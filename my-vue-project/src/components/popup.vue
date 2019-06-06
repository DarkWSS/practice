<template>
  <div v-if="popupState" class="popup animated" :class="animate">
    <div class="content" :class="position">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: ['position'],
  data () {
    return {
      popupState: false,
      animate: ''
    }
  },
  methods: {
    closePopup () {
      this.animate = 'fadeOut'
      setTimeout(() => {
        this.popupState = false
      }, 1000)
    },
    openPopup () {
      this.popupState = true
      this.animate = 'fadeIn'
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .content{
      position: fixed;
      width:fit-content;
      height: fit-content;
      font-size: .28rem;
      .info{
        padding: .5rem;
      }
    }
    .center{
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    .top{
      top: 0;
      left: 0;
    }
    .bottom{
      bottom: 0;
      left: 0;
    }
  }
</style>
