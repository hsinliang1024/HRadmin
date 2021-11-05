<template>
  <div>
       <el-row type="flex" justify="space-between" align="middle" style="width:100%;height:40px">

      <el-col>
        <span>{{treeData.name}}</span>
        </el-col>

      <el-col :span="4">
          <el-row type="flex" justify="end">
            <!-- 负责人 -->
            <el-col>
              {{treeData.manager}}
              </el-col>
            <el-col>
              <!-- 下拉菜单 -->
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="add">增加部门</el-dropdown-item>
                  <el-dropdown-item v-if="!isRoot" command="edit">修改部门</el-dropdown-item>
                  <el-dropdown-item v-if="!isRoot" command="del">删除部门</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus.js'
import {delStructure} from '@/api/structure'
export default {
    props:{
        treeData:{
            require:true,
            type:Object
        },
        isRoot:{
            type:Boolean,
            default:false
        }
    },
  data () {
    return {
      dialogFormVisible:true
    };
  },
  methods: {
      handleCommand(command) {
        if(command=='add'){
          eventBus.$emit('add',this.dialogFormVisible,this.treeData)  //调出弹出层，把数据传递过去
        }else if(command=='edit'){
          eventBus.$emit('edit',this.dialogFormVisible,this.treeData)  //调出弹出层，把数据传递过去
        }else if(command=='del'){
          this.$confirm('确定删除？').then(()=>{
            return delStructure(this.treeData.id)
          }).then(()=>{
          this.$emit('delDepts') // 触发自定义事件
          this.$message.success('删除部门成功')
          })
        }
      }
    }
}

</script>
<style scoped>
</style>