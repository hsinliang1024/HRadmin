<!-- 员工 -->
<template>
  <div class="app-container">
    <!-- 工具栏start -->
    <div class="tool">
      <el-row type="flex" class="row-bg" justify="end">
        <el-col><div class="grid-content bg-purple"></div></el-col>
        <el-col></el-col>
        <el-col>
          <el-row type="flex" class="row-bg" justify="end">
            <el-button type="primary" size="mini" @click="uploadExcel">导入</el-button>
            <el-button type="success" size="mini">导出</el-button>
            <el-button type="danger" size="mini" @click="add">新增</el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 工具栏end -->
    <!-- 表格start -->
    <el-table :data="tableData" border style="margin-top:20px;" :fit="false" ref="table">
          <el-table-column label="序号" width="80" type="index" :index="indexMethod"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100"></el-table-column>
          <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
          <el-table-column prop="number" label="工号" width="110"></el-table-column>
          <el-table-column prop="createTime" label="入职时间" width="120"></el-table-column>
          <el-table-column prop="department" label="部门" width="120"></el-table-column>
          <el-table-column prop="employ" label="聘用状态" width="120"></el-table-column>
          <el-table-column prop="job" label="是否在职" width="100"></el-table-column>
          <el-table-column prop="state" label="状态" width="100"></el-table-column>
          <el-table-column prop="timeOfEntry" label="转正时间" width="120"></el-table-column>
          <el-table-column label="操作" align="center" width="180">
            <!-- 操作 -->
            <template slot-scope="scope">
            <el-button type="text" title="查看" size="mini" @click="handleSee(scope.$index, scope.row)" >查看</el-button>
            <el-button type="text" title="修改" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button type="text" title="删除" @click="handleDel(scope.$index, scope.row)" size="mini">删除</el-button>
             </template>
          </el-table-column>
        </el-table>
    <!-- 表格end -->
     <!-- 分页功能 -->
        <el-pagination
          layout="total,prev, pager, next"
          @current-change="currentChange"
          :page-size="page.pagesize"
          :total="page.total"
          align="right"
          class="pagination"
        >
        </el-pagination>
    <!-- 分页end -->
    <!-- 新增对话框 -->
    <add-staff  @cancel="refresh" v-if="isAdd"/>
    <!-- 修改对话框 -->
    <edit-staff v-if="isEdit" :EditInfo="EditInfo" @edit="edit"/>
  </div>
</template>

<script>
import {getStaffInfo,delStaff,seeStaff} from '@/api/staff'
import addStaff from './commponents/addStaff.vue';
import EditStaff from './commponents/editStaff.vue';
export default {
  components: { addStaff, EditStaff },
  data() {
    return {
      tableData: [],
      page: {
        // 放置页码及相关数据
        currentPage: 1, //当前页数
        pagesize: 10, //每页显示条数
        total: 0, // 记录总数
      },
      Serial: 0, //存放序号
      isAdd:false, //是否显示新增对话框
      isEdit:false, //是否显示新增对话框
      EditInfo:{}, //存放需要修改的信息
    };
  },
  methods:{
    //获取员工信息
    getStaffInfo(){
      getStaffInfo(this.page).then((res)=>{
        this.tableData = res.staffInfo; //赋值给表格数据
        this.page.total = res.totalSum; //记录总条数
      })
    },
     //删除按钮
    handleDel(index,row){
      this.$confirm('确定删除？').then(()=>{
          return delStaff(row)
        }).then(()=>{
        this.$message.success('删除员工成功')
        this.getStaffInfo() // 刷新组件
        })
    },
    //修改按钮
    handleEdit(index,row){
      this.isEdit = true
      this.EditInfo = row
      console.log(row)
    },
    //查看按钮
    handleSee(index,row){
      this.$router.push(`/staff/information/${row._id}`)
    },
    //导出按钮
    uploadExcel(){
      this.$router.push("uploadExcel")
    },
    //点击页码，传递页码
    currentChange(page) {
      this.page.currentPage = page; //当前页数
      this.Serial = (this.page.currentPage - 1) * this.page.pagesize; //计算序号
      this.getStaffInfo();
    },
    //序号方法
    indexMethod(index) {
      return (index += this.Serial + 1);
    },
    //增加按钮
    add(){
      this.isAdd = true
    },
    //提交，取消 && 刷新组件
    refresh(){
      this.isAdd = false
      this.getStaffInfo()  //刷新页面
    },
    //修改按钮 提交，取消 && 刷新组件
    edit(){
      this.isEdit=false
      this.getStaffInfo()
    }
  },
  created(){
    this.getStaffInfo()
  }
};
</script>
<style scoped>
.app-container {
  background-color: white;
  padding: 20px 10px;
}
</style>
