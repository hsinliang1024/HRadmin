<!-- 公司结构 -->
<template>
  <div class="app-container">
        <!-- 首行部分 -->
        <tree-tools :tree-data="titleData" :isRoot="true"/>
    <!-- 内容部分 -->
       <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <tree-tools slot-scope="{ data }" :tree-data="data" style="width:100%;" @delDepts="getStrctureData"/>

       </el-tree> 
       <add-detps @addDepts="getStrctureData"/>
       <edit-detps @editDepts="getStrctureData"/>
       
  </div>
</template>

<script>
import TreeTools from './components/TreeTools.vue'
import {getStructure} from '@/api/structure'
import {tranToTreeData} from '@/utils/index.js'
import AddDetps from './components/addDetps.vue';
import EditDetps from './components/editDetps.vue';
export default {
  components: { TreeTools, AddDetps, EditDetps },
  data() {
    return {
      data:[{name: '总裁办', manager: '贺鑫良'}],
      titleData:{name: '公司部门',manager:'负责人',},
      //defaultProps 表示树形控件从name显示
      defaultProps: {
          children: 'children',
          label: 'name' 
        }
    };
  },
  created(){
    this.getStrctureData()
  },
  methods:{
    //获取组织架构数据
     getStrctureData() {
      getStructure().then(response => {
        this.data = tranToTreeData(response.StructureInfo,'')
      })
    }
  }
};
</script>

<style scoped>
.app-container {
  background-color: white;
  padding: 20px 120px;
}
</style>