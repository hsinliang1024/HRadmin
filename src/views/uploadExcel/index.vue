<!-- 导入 -->
<template>
  <div>
    <!-- 确认信息 -->
    <upload-table v-if="isShow" :staffData="staffData"/>
    <!-- 上传 -->
    <div class="upload" v-else> 
     <el-alert title="注意：只能上传.xlsx,.xls文件" type="warning" show-icon :closable="false"></el-alert>
     <h2 class="title">员工导入</h2>
    <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick">
    <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      文件拖到此处上传
      <el-button :loading="loading" style="margin-left:16px;" size="mini" type="primary" @click="handleUpload">
        点击上传
      </el-button>
    </div>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import uploadTable from '../uploadExcel/commponents/uploadTable.vue';
export default {
  components: { uploadTable },
  props: {
    beforeUpload: Function, 
    onSuccess: Function
  },
  data() {
    return {
      loading: false,
      // excelData: {
      //   header: null,
      //   results: null
      // },
      staffData:[],  //存放员工数据
      isShow:false  //显示表格
    }
  },
  methods: {
    generateData({ header, results }) {
      // this.excelData.header = header
      // this.excelData.results = results
      // this.onSuccess && this.onSuccess(this.excelData)
      //将中文转换成英文
      for(let i=0;i<results.length;i++){
        const arr = {};
        arr.name = results[i]['姓名'];
        arr.phone = results[i]['手机'];
        arr.createTime = this.formatDate(results[i]['入职日期']);
        arr.department = results[i]['部门'];
        arr.employ = results[i]['聘用'];
        arr.birthday = this.formatDate(results[i]['出生日期']);
        arr.bankCardNumber = results[i]['银行卡号'];
        arr.timeOfEntry = this.formatDate(results[i]['转正日期']);
        this.staffData.push(arr)
      }
    },
    //将Excel时间转换
    formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + '-'
      const month = time.getMonth() + 1 
      const date = time.getDate()
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return year + (month < 10 ? '0' + month : month) +'-'+ (date < 10 ? '0' + date : date)
    },
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isExcel(rawFile)) {
        this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      this.$refs['excel-upload-input'].click()
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel
      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      }).then(()=>{
        this.isShow = true
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style scoped>
.excel-upload-input{
  display: none;
  z-index: -9999;
  margin-top: 20px;
}
.drop{
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 20px auto;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative;
}
.title{
  text-align: center;
}
</style>