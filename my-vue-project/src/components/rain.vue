<template>
  <div class="main">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'rain',
  data () {
    return {
      rain: 'false',
      width: 0,
      height: 0,
      drop: {}
    }
  },
  mounted () {
    // this.beginRain()
    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame
    let can = document.getElementById('canvas')
    // 设置2d绘图环境
    let ctx = can.getContext('2d')
    // 获取浏览器窗口的宽高
    let w = can.width = window.innerWidth
    let h = can.height = window.innerHeight
    // 自适应浏览器窗口
    window.onresize = function () {
      w = can.width = window.innerWidth
      h = can.height = window.innerHeight
    }
    function Drop () {}
    Drop.prototype = {
      init () {
        this.x = this.rand(0, w) // 雨滴的初始化坐标
        this.y = 0 // 雨滴y轴方向的坐标
        this.vy = this.rand(8, 9) // 雨滴下落的速度
        this.l = this.rand(h * 0.8, h * 0.9) // 雨滴下落的高度
        this.r = 1
        this.vr = 1 // 半径增加的速度
        this.a = 1
        this.va = 0.98 // 透明度的变化系数
      },
      draw () { // 绘制雨滴
        if (this.y > this.l) {
          // 绘制圆形
          ctx.beginPath() // 开始路径
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
          ctx.strokeStyle = 'rgba(255,255,255,' + this.a + ')'
          ctx.stroke()
        } else { // 绘制下落的雨滴
          ctx.fillStyle = 'rgb(255,255,255)'
          ctx.fillRect(this.x, this.y, 2, 10)
        }
        this.update()
      },
      update () { // 更新坐标
        if (this.y < this.l) {
          this.y += this.vy
        } else {
          if (this.a > 0.03) {
            this.r += this.vr
            if (this.r > 50) {
              this.a *= this.va
            }
          } else { // 重新初始化了
            this.init()
          }
        }
      },
      rand (min, max) {
        return Math.random() * (max - min) + min
      }
    }
    // 实例化一个雨滴对象
    var drops = []
    for (var i = 0; i < 30; i++) {
      setTimeout(function () {
        var drop = new Drop()
        drop.init()
        drops.push(drop)
      }, i * 200)
    }
    // 实例初始化
    let animation = () => {
      // 绘制一个透明层
      ctx.fillStyle = 'rgba(56,163,179,0.1)'
      ctx.fillRect(0, 0, w, h)
      for (var i = 0; i < drops.length; i++) {
        drops[i].draw()
      }
      requestAnimationFrame(animation)
    }
    requestAnimationFrame(animation)
  },
  methods: {
    beginRain () {
      const canvas = document.getElementById('canvas')
      this.width = document.documentElement.clientWidth
      this.height = document.documentElement.clientHeight
      canvas.width = this.width
      canvas.height = this.height
      const can = canvas.getContext('2d')
      this.createRaindrop(can)
    },
    createRaindrop (can) {
      const x = parseInt(Math.random() * this.width)
      const y = parseInt(Math.random() * this.height)
      const len = parseInt(Math.random() * 30)
      can.fillStyle = 'rgb(255,255,255)'
      can.fillRect(x, y, 2, len)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    height: -webkit-fill-available;
    overflow: hidden;
    canvas{
      background-color: skyblue;
    }
  }
</style>
