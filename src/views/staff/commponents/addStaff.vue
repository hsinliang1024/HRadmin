<!-- 增加员工 -->
<template>
  <div>
      <el-dialog title="新增员工" :visible.sync="dialogFormVisible" :top="top" :show-close="false">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="入职日期" :label-width="formLabelWidth">
      <el-col>
      <el-date-picker type="date" placeholder="选择日期" v-model="form.createTime"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="部门" :label-width="formLabelWidth">
      <el-select v-model="form.department" placeholder="选择部门">
      <el-option
      v-for="item in arrDepartment"
      :key="item.value"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="聘用" :label-width="formLabelWidth">
      <el-select v-model="form.employ" placeholder="选择聘用状态">
        <el-option label="正式" value="正式"></el-option>
        <el-option label="非正式" value="非正式"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="出生日期" :label-width="formLabelWidth">
      <el-col>
      <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="银行卡号" :label-width="formLabelWidth">
      <el-input v-model="form.bankCardNumber" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="转正日期" :label-width="formLabelWidth">
      <el-col>
      <el-date-picker type="date" placeholder="选择日期" v-model="form.timeOfEntry"></el-date-picker>
      </el-col>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="determine">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import {getStructure} from '@/api/structure'
import {addStaff} from '@/api/staff'
export default {
    // props:{
    //     isAdd:{
    //         type:Boolean,
    //         default:false
    //     }
    // },
  data () {
    return {
      dialogFormVisible:true,
        top:'3vh', //距离头部距离
        form: {
          name: '',
          phone: '',
          number: '',
          createTime:'',
          department: '',
          employ:'',
          birthday:'',
          bankCardNumber:'',
          timeOfEntry:''
        },
        formLabelWidth: '70px',
        arrDepartment:[],  //存放有哪些部门
    };
  },
  methods:{
      //取消按钮
      cancel(){
        this.dialogFormVisible = false
        this.$emit('cancel')
      },
      //确定按钮
      determine(){
          addStaff(this.form).then(res=>{
            this.$message.success("添加成功")
            // this.getStructure()  //刷新组件
            this.$emit('cancel')
          })
      },
      getStructure(){
        getStructure().then(res=>{
          const arr = res.StructureInfo
          for(let i=0;i<arr.length;i++){
            this.arrDepartment.push(arr[i].name)
          }
        })
      }
  },
  created(){
    this.getStructure()
  }
}

</script>
<style scoped>
</style>