<!-- 公司信息 -->
<template>
  <div>
    <!-- 警告 -->
    <el-alert
    title="您不是超级管理员暂时无权限修改"
    type="info"
    :closable="false"
    show-icon
    v-if="isDisable">
  </el-alert>

   <el-alert
    title="欢迎超级管理员，请谨慎修改当前信息"
    type="success"
    show-icon
    v-else>
  </el-alert>

  <!-- 信息 -->
  <el-form ref="form" :model="form" label-width="80px" style="margin:20px 0" :disabled="isDisable">
  <el-form-item label="公司名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="成立时间">
    <el-input v-model="form.time"></el-input>
  </el-form-item>
  <el-form-item label="创始人">
    <el-input v-model="form.founder"></el-input>
  </el-form-item>
  <el-form-item label="公司地址">
    <el-input v-model="form.address"></el-input>
  </el-form-item>
   <el-form-item label="官网">
    <el-input v-model="form.official"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即修改</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import {getInformation,setInformation} from '@/api/setup'
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['roles'])  //获取登陆者身份
  },
  data () {
    return {
      form: {
          _id:'',
          name: '',
          time:'',
          founder:'',
          address:'',
          official:''
        },
        isDisable:true
    };
  },
  methods:{
    onSubmit(){
      setInformation(this.form).then((res)=>{
        this.$message.success('修改成功')
      })
    },
    //获取公司信息
    getInfo(){
      getInformation().then((res)=>{
        this.form._id = res._id
        this.form.name = res.name
        this.form.time = res.time
        this.form.founder = res.founder
        this.form.address = res.address
        this.form.official = res.official
      })
    },
    //判断登陆者身份
    isRoles(){
      if(this.roles=='super-admin'){
        this.isDisable=false
      }
    }
  },
  created(){
    this.getInfo()
    this.isRoles()
  }
}

</script>
<style scoped>
.el-input{
  width: 280px;
}
.el-from{
  margin-top: 20px;
}
</style>