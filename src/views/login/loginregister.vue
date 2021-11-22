<!-- 注册 -->
<template>
  <div>
      <el-form
      ref="RegisterForm"
      :model="RegisterForm"
      :rules="RegisterRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">人力资源管理系统</h3>
      </div>

      <el-form-item>
        <el-input
          ref="username"
          v-model="RegisterForm.username"
          placeholder="账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

    <el-form-item prop="pass">
    <el-input 
    type="password" 
    v-model="RegisterForm.pass" 
    autocomplete="off"
    placeholder="密码"
    name="password"
    tabindex="2"></el-input>
  </el-form-item>
  <el-form-item  prop="checkPass">
    <el-input 
    type="password" 
    v-model="RegisterForm.checkPass" 
    autocomplete="off"
    placeholder="确认密码"></el-input>
  </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleRegister"
      >注册</el-button>

      <div class="tips">
        <span style="margin-right: 20px">已经有账号</span>
        <a @click="login">点击登录</a>
      </div>
    </el-form>
  </div>
</template>

<script>
import {register} from '@/api/user'
export default {
  name: 'Loginregister',
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.RegisterForm.checkPass !== '') {
            this.$refs.RegisterForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.RegisterForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
        RegisterForm: {
        username: '',
        pass: '',
        checkPass:''
      },
      RegisterRules: {
        pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    //注册
    handleRegister() {
      register(this.RegisterForm).then(()=>{
        this.$message.success("注册成功");
      }).catch(()=>{
        this.$message.error("账户名存在")
      })
    },
    //注册
    login(){
      this.$emit('login')
    }
  }
}

</script>
<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  background: url("~@/assets/common/loginbg.png");
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
    a{
      text-decoration:underline;
    }
    a:hover{
      color: orange;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.svg-icon {
  color: white;
}
</style>