<template>
  <div>
    <!-- 对话框 -->
    <el-dialog title="修改角色" :visible.sync="showEditForm">
      <el-form :model="editInfo" :rules="rules">
        <el-form-item label="角色名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="editInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" prop="name">
          <el-input v-model="editInfo.describe" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="editButton">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {editroles} from '@/api/setup'
export default {
    props:{
        showEditForm:{
            type:Boolean
        },
        //表单数据
        editInfo:{
            type:Object
        }
    },
  data() {
    return {
        //对话框
        formLabelWidth: '120px',
         rules: {  //表单验证
          name: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ]}
    };
  },
  methods: {
    editButton(){
      editroles(this.editInfo).then((res)=>{
        this.$message.success('修改角色信息成功')
        this.$emit('cancel')
      })
    },
    cancel(){
        this.$emit('cancel')  //将取消按钮的动作传递给父组件
    },
  },
};
</script>
<style scoped>
</style>