<!-- 角色管理 -->
<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="角色管理">
        <!-- 增加角色按钮 -->
        <add-roles @add="getSetupInfo"/>
        <!-- 修改角色 -->
        <edit-roles :editInfo="editInfo" :showEditForm="showEditForm" @cancel="cancel" @edit="getSetupInfo"/>
        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            label="序号"
            width="180"
            type="index"
            align="center"
            :index="indexMethod"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="角色名"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="describe" label="角色描述" width="200">
          </el-table-column>
          <el-table-column prop="createTime" label="修改时间" width="180">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <!-- 操作 -->
            <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-setting" title="设置权限"></el-button>
            <!-- 修改start -->
            <el-button type="primary" 
            icon="el-icon-edit" title="修改"
            @click="handleEdit(scope.$index, scope.row)"></el-button>
            <!-- 修改end -->
            <el-button type="primary" 
            icon="el-icon-delete" title="删除"
            @click="handleDel(scope.$index, scope.row)"></el-button>
             </template>
          </el-table-column>
        </el-table>
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
      </el-tab-pane>
      <el-tab-pane label="公司信息">
        <information />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getetup,delroles } from "@/api/setup";
import addRoles from './components/addRoles.vue';
import EditRoles from './components/editRoles.vue';
import Information from './components/information.vue';
export default {
  components: { addRoles, EditRoles, Information },
  data() {
    return {
      tableData: [], //存放数据
      page: {
        // 放置页码及相关数据
        currentPage: 1, //当前页数
        pagesize: 5, //每页显示条数
        total: 0, // 记录总数
      },
      Serial: 0, //存放序号
      showEditForm:false, //修改信息表单显示、隐藏
      editInfo:{}, //存放需要修改的信息
    };
    
  },
  created() {
    this.getSetupInfo();
  },
  methods: {
    getSetupInfo() {
      getetup(this.page).then((res) => {
        this.tableData = res.Info; //赋值给表格数据
        this.page.total = res.totalSum; //记录总条数
      });
    },
    //点击页码，传递页码
    currentChange(page) {
      this.page.currentPage = page; //当前页数
      this.Serial = (this.page.currentPage - 1) * this.page.pagesize; //计算序号
      this.getSetupInfo();
    },
    //序号方法
    indexMethod(index) {
      return (index += this.Serial + 1);
    },
       //修改按钮
    handleEdit(index, row) {
        this.showEditForm = true  //显示表单
        this.editInfo = row  //将点击项的数据传递给修改组件
      },
      //删除按钮
      handleDel(index,row){
        this.$confirm('确定删除？').then(()=>{
            return delroles(row)
          }).then(()=>{
          this.$message.success('删除部门成功')
          this.getSetupInfo() // 刷新组件
          })
      },
      //修改信息取消按钮
    cancel(){
      this.showEditForm=false  //关闭对话框
      this.getSetupInfo()  //刷新组件
    },
  }
};
</script>
<style scoped>
.app-container {
  background-color: white;
  /* padding: 20px 120px; */
}
.pagination {
  margin-top: 20px;
}
</style>