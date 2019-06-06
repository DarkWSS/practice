<template>
    <div class="animated" :class="[msg.state, msg.animate]" id="toastMsg">
      <div class="msg">
        <i class="fa" :class="msg.icon" aria-hidden="true"></i>
        <span>{{msg.text}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'msg',
  data () {
    return {
      msg: {
        text: '',
        time: 2500,
        icon: '',
        state: 'alert',
        animate: ''
      },
      iconList: ['fa-check-circle', 'fa-times-circle', 'fa-exclamation-circle'],
      animateList: ['flipInX', 'shake', 'zoomInDown']
    }
  },
  methods: {
    showMsg (text) {
      this.msg.state = 'toast'
      this.msg.animate = 'fadeIn'
      this.showInfo(text)
    },
    alertMsg (text, type) {
      this.msg.state = 'alert'
      this.msg.icon = this.iconList[type]
      this.msg.animate = this.animateList[type]
      this.showInfo(text)
    },
    showInfo (text) {
      this.msg.text = text
      setTimeout(() => {
        this.msg.animate = 'fadeOut'
        setTimeout(() => {
          document.body.removeChild(document.getElementById('toastMsg'))
        }, 800)
      }, this.msg.time)
    }
  }
}
</script>

<style lang="scss" scoped>
  .toast{
    width: 100%;
    position: fixed;
    bottom: .5rem;
    left: 0;
    text-align: center;
    .msg{
      width: fit-content;
      background-color: rgba(0, 0, 0, .5);
      border-radius: .25rem;
      color: #ffffff;
      font-size: .24rem;
      height: .5rem;
      line-height: .5rem;
      padding: 0 .5rem;
      white-space: nowrap;
      margin: auto;
      transition: all .5s;
    }
  }
  .alert{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    .msg{
      width: fit-content;
      height: .8rem;
      line-height: .8rem;
      background-color: rgba(0, 0, 0, .5);
      border-radius: .04rem;
      color: #ffffff;
      font-size: .26rem;
      padding: 0 .5rem;
      white-space: nowrap;
      margin: auto;
      transition: all .5s;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
