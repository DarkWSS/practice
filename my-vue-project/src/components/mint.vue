<template>
    <div class="main">
      <mt-button @click="alertMsg">点击弹窗</mt-button>
      <mt-button @click="alertLoad">点击加载</mt-button>
      <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <p v-for="item in list">{{item}}</p>
      </mt-loadmore>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li v-for="(index, item) in list" :key="index">{{ item }}</li>
      </ul>-->
      <mt-button @click="alertWindow">点击Alert</mt-button>
      <mt-button @click="sheetVisible=true">下方菜单</mt-button>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    </div>
</template>

<script>
import Mint from 'mint-ui'
export default {
  name: 'mint',
  data () {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      actions: [
        {name: 'QQ', method: this.showMsg},
        {name: 'weChat', method: this.showMsg},
        {name: 'skype', method: this.showMsg}
      ],
      sheetVisible: false
    }
  },
  methods: {
    alertMsg () {
      Mint.Toast({
        message: '好得很',
        position: 'bottom',
        iconClass: 'icon icon-success',
        duration: 2000
      })
    },
    alertLoad () {
      Mint.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        Mint.Indicator.close()
      }, 2000)
    },
    alertWindow () {
      Mint.MessageBox({
        title: '这是弹窗',
        message: '随便弹出点什么',
        showCancelButton: true
      })
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
    },
    showMsg () {
      Mint.Toast({
        message: 'msg',
        position: 'bottom',
        duration: 2000
      })
    }
    /* loadTop () {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      this.$refs.loadmore.onBottomLoaded()
    },
    allLoaded () {
      console.log('aaaaaa')
    } */
  }
}
</script>

<style lang="scss" scoped>
  .main{
    button{
      width: 100%;
    }
    ul{
      li{
        height: 20px;
      }
    }
  }
</style>
