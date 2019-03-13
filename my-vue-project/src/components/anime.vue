<template>
  <div class="main">
    <div class="img_area">
      <img :src="img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'anime',
  data () {
    return {
      img: '../../static/img/ninja/1.png',
      index: 1
    }
  },
  mounted () {
    setInterval(() => {
      this.img = `../../static/img/ninja/${this.index}.png`
      this.index++
      if (this.index > 72) {
        this.index = 1
      }
    }, 33.33)
  }
}
</script>

<style scoped>

</style>
