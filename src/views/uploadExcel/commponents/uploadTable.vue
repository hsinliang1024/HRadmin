<!-- 导入数据表格 -->
<template>
  <div>
     <h2>导入员工信息确认</h2> 
        <el-table
    :data="staffData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      type="index"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="入职时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="department"
      label="部门"
      width="180">
    </el-table-column>
    <el-table-column
      prop="employ"
      label="聘用"
      width="180">
    </el-table-column>
     <el-table-column
      prop="birthday"
      label="出生日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="bankCardNumber"
      label="银行卡号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="timeOfEntry"
      label="转正时间"
      >
    </el-table-column>
  </el-table>
  <el-button class="btn" @click="cancel">取消</el-button>
  <el-button type="primary" class="btn" @click="upload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
import {excelStaff} from '@/api/staff'
export default {
    props:{
        staffData:{
            type:Array
        }
    },
   data() {
      return {
       
      }
    },
    methods:{
      upload(){
        excelStaff(this.staffData).then(()=>{
          this.$message.success('导入成功')
          this.$router.push('staff')
        })
      },
      cancel(){
          this.$router.push('staff')
      }
    }
}

</script>
<style scoped>
.btn{
    margin: 10px 10px;
}
h2{
    text-align: center;
}
</style>