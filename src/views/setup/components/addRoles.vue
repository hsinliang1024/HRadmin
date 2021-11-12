<template>
  <div>
      <el-button
          type="primary"
          icon="el-icon-plus"
          style="margin: 15px 0"
          @click="dialogFormVisible = true">添加角色</el-button>
        <!-- 对话框 -->
        <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
          <el-form :model="form" :rules="rules">
            <el-form-item label="角色名" :label-width="formLabelWidth" prop="name">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="描述" :label-width="formLabelWidth" prop="name">
              <el-input v-model="form.describe" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addButton">确 定</el-button>
          </div>
        </el-dialog>
  </div>
</template>

<script>
import { addroles } from "@/api/setup";

export default {
  data () {
    return {
         //对话框
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          describe:''
        },
        formLabelWidth: '120px',
         rules: {  //表单验证
          name: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ]}
    };
  },
  methods:{
      //添加方法
    addRoles(){
      addroles(this.form).then((res)=>{
        this.$message.success('添加角色成功')
      })
    },
    //提交按钮
    addButton(){
    this.addRoles() //调用添加方法
    this.dialogFormVisible = false
    this.$emit('add')
  }
  }
}

</script>
<style scoped>
</style>