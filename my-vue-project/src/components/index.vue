<template>
  <div class="main" v-title data-title="我的组件">
    <loading></loading>
    <div class="btn_area">
      <button v-for="(title, index) in btnArr" :key="index" :style="{backgroundColor: btnColor[index]}" @click="skipToPlug(index)">{{ title }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      btnArr: ['滑动插件', '时间插件', '日期插件', '拖动插件', '定格动画', '树形图', '下雨天', 'Element-UI', 'Mint-UI', 'Mand', 'Module', 'FormFilter', 'Login'],
      btnColor: []
    }
  },
  mounted () {
    for (let i = 0; i < this.btnArr.length; i++) {
      this.btnColor.push(this.randomColor())
    }
  },
  methods: {
    randomColor () {
      return `rgb(${parseInt(Math.random() * 255)} , ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
    },
    skipToPlug (index) {
      const urlArr = ['slide', 'clock', 'calendar', 'drag', 'anime', 'arborescence', 'rain', 'element', 'mint', 'mand', 'module', 'formFilter', 'login']
      this.$router.push({path: urlArr[index]})
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn_area{
    display: flex;
    flex-wrap: wrap;
    button{
      width: 30vw;
      height: 6vh;
      margin: 2vh 10vw;
      border: 0;
      border-radius: 5px;
      color: #fff;
      font-weight: 800;
      text-shadow: 0 0 1vw #000000;
      box-shadow: 0 0 1vw #a5a5a5;
    }
  }
</style>
