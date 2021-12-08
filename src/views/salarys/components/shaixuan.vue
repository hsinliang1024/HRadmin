<template>
<div>
<span>快速筛选：</span>
  <el-checkbox-group v-model="checkList" class="screen">
    <el-checkbox v-for="item in List" :label="item" :key="item"></el-checkbox>
  </el-checkbox-group>
</div>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A'],
        List: ['总裁办','技术部','开发部','国外业务','网路管理','人事部'],
      };
    }
  };
</script>

<style scoped>
.screen{
    margin: 10px 0;
    width: 60%;
}
</style>