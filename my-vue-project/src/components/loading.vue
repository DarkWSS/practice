<template>
  <div class="main" v-if="state">
    <div class="canvas">
      <div class="spinner"></div>
      <div class="hourHand"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      state: true
    }
  },
  created () {
    setTimeout(() => {
      this.state = false
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: #fff;
    .canvas {
      background: #eeeeee;
      border-radius: 50%;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      display: flex;
      height: 2rem;
      justify-content: center;
      width: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .spinner {
        animation: spinnerTwo 1s linear infinite;
        background: #4DB6AC;
        border-radius: 100px;
        height: .8rem;
        transform-origin: top;
        position: absolute;
        top: 1rem;
        width: .05em;
      }
      .hourHand {
        animation: spinnerTwo 7s linear infinite;
        background: #4DB6AC;
        border-radius: 100px;
        height: .5rem;
        transform-origin: top;
        position: absolute;
        top: 1rem;
        width: .05rem;
      }
      .dot {
        background: #4DB6AC;
        border-radius: 100%;
        height: .1em;
        width: .1em;
        margin-top: .95rem;
      }
    }
  }
  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
