<!-- 信息打印 -->
<template>
<div>
     <el-row type="flex" justify="end">
          <el-button v-print="printObj" size="small" type="primary" class="btn">打印</el-button>
   </el-row>
  <div class="app-container" id="print">
  <table border="1" width="100%" height="100%" cellspacing="0">
  <tr align="center">
   <td bgcolor="#ededed" width="100px">姓名</td>
   <td width="100px">{{formLabelAlign.name}}</td>
   <td bgcolor="#ededed" width="100px">手机</td>
   <td width="200px">{{formLabelAlign.phone}}</td>
   <td bgcolor="#ededed" width="100px">出生日期</td>
   <td>{{formLabelAlign.birthday}}</td>
   <td bgcolor="#ededed">性别</td>
   <td>男</td>
   
   <td colspan="0" rowspan="3" width="150px" hight="150px">
       <img :src="formLabelAlign.img" width="100%" height="150px" alt="" class="img">
   </td>
   
  </tr>
  <tr align="center">
   <td bgcolor="#ededed">民族</td>
   <td>{{formLabelAlign.nation}}</td>
   <td bgcolor="#ededed">政治面貌</td>
   <td >{{formLabelAlign.Politics}}</td>
   <td bgcolor="#ededed">现居住地</td>
   <td colspan="3">{{formLabelAlign.address}}</td>
  </tr>
  <tr align="center">
   <td bgcolor="#ededed">毕业学校</td>
   <td colspan="2">{{formLabelAlign.graduation}}</td>
   <td bgcolor="#ededed">所学专业</td>
   <td colspan="2">{{formLabelAlign.major}}</td>
   <td bgcolor="#ededed">学历</td>
   <td>{{formLabelAlign.education}}</td>
  </tr>
  
  <tr align="center">
   <td bgcolor="#ededed" height="50px">籍贯</td>
   <td colspan="1">{{formLabelAlign.NativePlace}}</td>
   <td bgcolor="#ededed">入职日期</td>
   <td colspan="1">{{formLabelAlign.createTime}}</td>
   <td bgcolor="#ededed" height="50px">转正日期</td>
   <td colspan="1">{{formLabelAlign.timeOfEntry}}</td>
   <td bgcolor="#ededed" height="50px">银行卡号</td>
   <td colspan="2">{{formLabelAlign.bankCardNumber}}</td>
  </tr>
  
   <tr align="center">
   <td bgcolor="#ededed" height="50px">部门</td>
   <td colspan="1">{{formLabelAlign.department}}</td>
   <td bgcolor="#ededed">个人邮箱</td>
   <td colspan="1">{{formLabelAlign.mailbox}}</td>
   <td bgcolor="#ededed" height="50px">QQ</td>
   <td colspan="1">{{formLabelAlign.qq}}</td>
   <td bgcolor="#ededed" height="50px">微信</td>
   <td colspan="2">{{formLabelAlign.wx}}</td>
  </tr>

  <tr align="center">
   <td bgcolor="#ededed" height="50px">国家/地区</td>
   <td colspan="1">{{formLabelAlign.region}}</td>
   <td bgcolor="#ededed">聘用形式</td>
   <td colspan="1">{{formLabelAlign.employ}}</td>
   <td bgcolor="#ededed" height="50px">是否在职</td>
   <td colspan="1">{{formLabelAlign.job}}</td>
   <td bgcolor="#ededed" height="50px">公积金账号</td>
   <td colspan="2">{{formLabelAlign.accumulationFund}}</td>
  </tr>

  <tr align="center">
   <td bgcolor="#ededed" height="50px">工号</td>
   <td colspan="1">{{formLabelAlign.number}}</td>
   <td bgcolor="#ededed">紧急联系人</td>
   <td colspan="1">{{formLabelAlign.emergencyContact}}</td>
   <td bgcolor="#ededed" height="50px">联系人电话</td>
   <td colspan="1">{{formLabelAlign.contactNumber}}</td>
   <td bgcolor="#ededed" height="50px">常用住址</td>
   <td colspan="2">{{formLabelAlign.CommonAddress}}</td>
  </tr>
 </table>
  </div>
  </div>
</template>

<script>
  export default {
    props:['formLabelAlign'],
    data() {
      return {
        printObj: {
        id: 'print'
   }
      }
    },
  }
</script>
<style scoped>
.img{
    display: block;
}
.btn{
    margin-right: 3%;
}
</style>