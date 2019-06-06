<template>
    <el-container>
      <el-header>
        <h3>测试ElementUI</h3>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8" style="background-color: #444444">一江春水向东流</el-col>
          <el-col :span="4" style="background-color: bisque">一江春水向东流</el-col>
          <el-col :span="2" style="background-color: brown">一江春水向东流</el-col>
          <el-col :span="10">一江春水向东流</el-col>
          <el-col :span="6" style="background-color: #444444">一江春水向东流</el-col>
          <el-col :span="6" style="background-color: bisque">一江春水向东流</el-col>
          <el-col :span="6" style="background-color: brown">一江春水向东流</el-col>
          <el-col :span="6">一江春水向东流</el-col>
        </el-row>
        <el-button>查看</el-button>
        <el-alert>啊，不好意思出错了</el-alert>
      </el-main>
      <el-footer>
        Footer
      </el-footer>
    </el-container>
</template>

<script>
export default {
  name: 'elementui'
}
</script>

<style lang="scss" scoped>
  h3{
    text-align: center;
    font-size: .32rem;
  }
  .el-row{
    font-size: .24rem;
  }
</style>
