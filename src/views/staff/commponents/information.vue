<!-- 员工信息 -->
<template>
  <div class="app-container">
    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个人详情" name="first">
      <div>
      <div class="userInfo">
      <upload-img @upload="upload" :img="formLabelAlign.img"/>
        <h2><span>{{formLabelAlign.name}}</span></h2>
        <el-button icon="el-icon-setting" @click="update">保存更新</el-button>
      </div>
      <div class="information">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="工号">
        <el-tag>{{formLabelAlign.number}}</el-tag>
          <!-- <span>{{formLabelAlign.number}}</span> -->
        </el-form-item>
        <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="手机">
        <el-input v-model="formLabelAlign.phone"></el-input>
        </el-form-item>
        <el-form-item label="职位">
        <el-input v-model="formLabelAlign.department"></el-input>
        </el-form-item>
        <el-form-item label="入职日期">
         <el-col>
        <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.createTime"></el-date-picker>
         </el-col>
        </el-form-item>
        <el-form-item label="聘用形式">
      <el-select v-model="formLabelAlign.employ">
        <el-option label="正式" value="正式"></el-option>
        <el-option label="非正式" value="非正式"></el-option>
      </el-select>
    </el-form-item>
     </el-form>
      </div>
      <el-divider content-position="left" class="fg">基本信息</el-divider>
       <div class="essential-information">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="民族">
        <el-input v-model="formLabelAlign.nation"></el-input>
        </el-form-item>
        <el-form-item label="国家/地区">
        <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
        <el-input v-model="formLabelAlign.ID"></el-input>
        </el-form-item>
        <el-form-item label="生日">
         <el-col>
        <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.birthday"></el-date-picker>
         </el-col>
        </el-form-item>
        <el-form-item label="最高学历">
      <el-select v-model="formLabelAlign.education">
        <el-option label="高中" value="高中"></el-option>
        <el-option label="专科" value="专科"></el-option>
        <el-option label="本科" value="本科"></el-option>
        <el-option label="研究生" value="研究生"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="毕业学校">
        <el-input v-model="formLabelAlign.graduation"></el-input>
        </el-form-item>
        <el-form-item label="专业">
        <el-input v-model="formLabelAlign.major"></el-input>
        </el-form-item>
     </el-form>
      </div>
      <!-- 通讯信息 -->
      <el-divider content-position="left" class="fg">通讯信息</el-divider>
      <div class="essential-information">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="联系电话">
        <el-input v-model="formLabelAlign.phone"></el-input>
        </el-form-item>
        <el-form-item label="微信">
        <el-input v-model="formLabelAlign.wx"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
        <el-input v-model="formLabelAlign.qq"></el-input>
        </el-form-item>
        <el-form-item label="通讯地址">
        <el-input v-model="formLabelAlign.address" class="address"></el-input>
        </el-form-item>
        <el-form-item label="个人邮箱">
        <el-input v-model="formLabelAlign.mailbox"></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人">
        <el-input v-model="formLabelAlign.emergencyContact"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
        <el-input v-model="formLabelAlign.contactNumber"></el-input>
        </el-form-item>
        <el-form-item label="常用住址">
        <el-input v-model="formLabelAlign.CommonAddress"></el-input>
        </el-form-item>
     </el-form>
      </div>
      <!-- 账号信息 -->
      <el-divider content-position="left" class="fg">账号信息</el-divider>
      <div class="essential-information">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="银行卡号">
        <el-input v-model="formLabelAlign.bankCardNumber"></el-input>
        </el-form-item>
        <el-form-item label="公积金号">
        <el-input v-model="formLabelAlign.accumulationFund"></el-input>
        </el-form-item>
     </el-form>
      </div>
      <!-- footer -->
      <div class="footer">
        <div class="footerCenter">
          <el-button @click="back">返回</el-button>
         <el-button type="primary" @click="update">保存更新</el-button>
        </div>
      </div>
      </div>
    </el-tab-pane>
    
    <el-tab-pane label="信息打印" name="second">
     <print :formLabelAlign="formLabelAlign"/>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import {seeStaff,editStaff} from '@/api/staff'
import uploadImg from './uploadImg.vue';
import Print from './print.vue';
export default {
  components: { uploadImg, Print },
  data () {
    return {
      activeName: 'first',
      labelPosition: 'right',
        formLabelAlign: {}
    };
  },
  methods:{
    seeStaff(){
      seeStaff(this.$route.params.id).then((res)=>{
        this.formLabelAlign = res
        // console.log(res)
      })
    },
    handleClick(tab, event) {
        // console.log(tab, event);
      },
      //返回按钮
    back(){
      this.$router.back()
    },
    //更新按钮
    update(){
      editStaff(this.formLabelAlign).then(()=>{
        this.$message.success("保存更新数据成功")
      })
    },
    //图片上传
    upload(data){
      this.formLabelAlign.img = data
      // console.log(data)
    }
  },
  created(){
    this.seeStaff()
  }
}

</script>
<style scoped>
.app-container {
  background-color: white;
  padding: 20px 10px;
}
.userInfo{
  width: 25%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userInfo img{
  /* width: 150px; */
  margin-top: 10px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
.userInfo span{
  font-size: 18px;
}

.information{
float: left;
width: 65%;
}

.fg{
  float: left;
}

.essential-information{
  float: left;
  margin-left: 50px;
}

.address{
  width: 260px;
}

.footer{
  width: 100%;
  height: 50px;
  float: left;
}

.footerCenter{
  margin: 0 auto;
  width: 30%;
  height: 50px;
}
</style>