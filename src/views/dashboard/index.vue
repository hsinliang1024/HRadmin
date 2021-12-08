<template>
  <div class="dashboard-container">
    <!-- 头部内容 -->
    <el-card class="header-card">
      <div>
        <div class="fl headL">
          <div class="headImg">
            <!-- <img src="@/assets/common/head.png"> -->
            <img :src="avatar">
          </div>
          <div class="headInfoTip">
            <p class="firstChild">欢迎 <span>{{name}}</span> 登录人力资源管理系统</p>
            <p class="lastChild">当前登录身份：{{roles}}</p>
          </div>
        </div>
        <div class="fr" />
      </div>
    </el-card>
    <!-- 主要内容 -->
    <el-row type="flex" justify="space-between">
      <!-- 左侧内容 -->
      <el-col :span="13" style="padding-right:26px">
        <!-- 快捷入口 -->
        <el-card class="box-card">
          <div slot="header" class="header">
            <span>快捷入口</span>
          </div>
        <!-- 放置快捷入口 -->
        <div class="total">
          <div class="totalList" >
            <img src="@/assets/common/团队绩效.png" alt="">
            <p>团队绩效</p>
            </div>
            <div class="totalList" >
            <img src="@/assets/common/权限审批.png" alt="">
            <p>审批报表</p>
            </div>
            <div class="totalList" >
            <img src="@/assets/common/招聘计划.png" alt="">
            <p>招聘计划</p>
            </div>
            <div class="totalList" >
            <img src="@/assets/common/qj.png" alt="">
            <p>请假调休</p>
            </div>
            <div class="totalList" >
            <img src="@/assets/common/培训考试.png" alt="">
            <p>培训考试</p>
            </div>
        </div>
        </el-card>
        <!-- 公告 -->
        <el-card class="box-card">
          <div class="advContent">
            <!-- <div class="title"> 公告</div> -->
            <div slot="header" class="header">
            <span>公告</span>
          </div>
            <div class="contentItem">
              <ul class="noticeList">
                <li>
                  <div class="item">
                    <img src="@/assets/common/dlam.webp" alt="">
                    <div>
                      <p><span class="col">刘梦</span> 发布了 11月获得“优秀员工”的获奖名单公布</p>
                      <p>2021-12-1 10:14:18</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 右侧内容 -->
      <el-col :span="11">
        <el-card class="box-card">
          <div class="header headTit">
            <span>绩效指数</span>
          </div>
          <div class="sideNav">
        <radar />
          </div>
        </el-card>

        <!-- 绩效指数 -->
        <el-card class="box-card">
          <div slot="header" class="header">
            <span>绩效指数</span>
          </div>
        <!-- 放置雷达图 -->
        <work-calendar />
        </el-card>
        <!-- 帮助连接 -->
        <!-- <el-card class="box-card">
          <div class="header headTit">
            <span>帮助链接</span>
          </div>
          <div class="sideLink">
            <el-row>
              <el-col :span="8">
                <a href="#">
                  <span class="icon iconGuide" />
                  <p>入门指南</p>
                </a>
              </el-col>
              <el-col :span="8">
                <a href="#">
                  <span class="icon iconHelp" />
                  <p>在线帮助手册</p>
                </a>
              </el-col>
              <el-col :span="8">
                <a href="#">
                  <span class="icon iconTechnology" />
                  <p>联系技术支持</p>
                </a>
              </el-col>
            </el-row>
          </div>
        </el-card> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Radar from './commponents/radar.vue'
import workCalendar from './commponents/work-calendar.vue'

export default {
  components: { workCalendar, Radar },
  name: 'Dashboard',
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'name','roles'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  margin: 10px;
  li {
    list-style: none;
  }
  .headImg {
    float: left;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #999;
          img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .headInfoTip {
    padding: 25px 0 0;
    margin-left: 120px;
    p {
      padding: 0 0 15px;
      margin: 0;
      &.firstChild {
        font-size: 24px;
      }
      &.lastChild {
        font-size: 20px;
        color: #7f8c8d;
      }
    }
  }
}

.box-card {
  padding: 5px 10px;
  margin-top: 20px;
  .header {
    span {
      color: #2c3e50;
      font-size: 24px;
    }
    .item {
      color: #97a8be;
      float: right;
      padding: 3px 0;
    }
  }
  .headTit {
    span {
      // border-bottom: 4px solid #8a97f8;
      padding-bottom: 10px;
    }
  }
}
.header-card{
  position: relative;
  .header {
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 1;
  }
}

.advContent {
  background: #fff;
  border-radius: 5px 5px 0px 0px;
  .title {
    font-size: 16px;
    padding: 20px;
    font-weight: bold;
    border-bottom: solid 1px #ccc;
  }
  .contentItem {
    padding: 0 30px;
    min-height: 350px;
    .item {
      display: flex;
      padding:18px 0 10px;
      border-bottom: solid 1px #ccc;
      .col {
        color: #8a97f8;
      }
      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-right: 10px;
      }
      p{
        padding: 0 0 8px;
      }
    }
  }
}
.noticeList {
  margin: 0;
  padding: 0;
}
.sideNav,
.sideLink {
  padding: 30px 0 12px;
  .sideBtn {
    padding: 16px 26px;
    font-size:16px;
    margin: 10px 5px;
  }
}
.sideLink {
  text-align: center;
  .icon {
    display: inline-block;
    width: 76px;
    height: 76px;
    background: url('./../../assets/common/icon.png') no-repeat;
  }
  .iconGuide {
    background-position: 0 0;
  }
  .iconHelp {
    background-position: -224px 0;
  }
  .iconTechnology {
    background-position: -460px 0;
  }
}

.firstChild span{
  color: red;
}

.totalList{
  width:25%;
  height: 100%;
  border: 1px solid #eeeeee;
  text-align: center;
  flex: 1;
  margin: 5px;
}
.totalList img{
  width: 50%;
  margin: 14px 0 0 0;
}
.totalList p{
  text-align: center;
  font-size: 14px;
}

.total{
  display: flex;
  flex-wrap: wrap;
}
.totalList:hover{
  background-color: #eee;
}
</style>

