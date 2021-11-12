<!-- 添加部门 -->
<template>
  <div>
<el-dialog title="修改部门" :visible.sync="dialogFormVisible">
  <el-form :model="form" :rules="rules">
    <el-form-item label="部门名称" :label-width="formLabelWidth" prop="name">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="部门负责人" :label-width="formLabelWidth" prop="manager">
      <el-input v-model="form.manager" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="部门介绍" :label-width="formLabelWidth">
      <el-input v-model="form.introduce" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary"  @click="editDetps">提交</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus.js'
import {editStructure} from '@/api/structure'

export default {
  data () {
    return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          manager: '',
          introduce:'',
          id: ''
        },
        formLabelWidth: '120px',
        rules:{
             name: [
            { required: true, message: '请输入部门名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          manager: [
            { required: true, message: '请输入负责人', trigger: 'blur' }
          ],
        }
    };
  },
  methods:{
      editDetps(){
          editStructure(this.form).then((res)=>{
              this.$emit('editDepts') // 触发自定义事件 使组件刷新
              this.$message.success('删除部门成功')
              this.dialogFormVisible=false
          })
      },
  },
  created(){
    eventBus.$on('edit',(dialog,data)=>{
        //将数据赋值给表单
        this.dialogFormVisible=dialog
        this.form.id = data.id
        this.form.name = data.name
        this.form.manager = data.manager
    })
}
}

</script>
<style scoped>
</style>