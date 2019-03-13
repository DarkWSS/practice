<template>
   <div class="main">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :style="{backgroundColor: swiperColor[index]}" :key="index">{{ slide }}</swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'slide',
  data () {
    return {
      swiperSlides: [1, 2, 3, 4, 5],
      swiperColor: ['#ff3300', '#66cc66', '#3399cc', '#330000', '#990099'],
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 100%;
    text-align: center;
    position: fixed;
  }
  .swiper-slide{
    font-size: 100vw;
    line-height: 100vh;
    color: #fff;
    font-family: 'Forte';
  }
</style>
