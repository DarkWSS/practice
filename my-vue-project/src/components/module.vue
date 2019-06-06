<template>
  <div v-title data-title="组件实际应用">
    <loading></loading>
    <transition name="fade">
      <test v-if="state" titlt_style="h3" content="我的时钟"></test>
    </transition>
    <clock ref="clock"></clock>
    <button class="msg_btn" @click="showMsg">点击</button>
    <div class="btn_area">
      <button @click="openPopup" class="open_popup">打开</button>
      <button @click="closePopup">关闭</button>
    </div>
    <my-table>
      <tr slot="title">
        <th>序号</th>
        <th>姓名</th>
        <th>联系方式</th>
      </tr>
      <tr slot="data" v-for="(one, index) in tableData" :key="index">
        <td>{{index + 1}}</td>
        <td>{{one.name}}</td>
        <td>{{one.mobile}}</td>
      </tr>
    </my-table>
    <transition><!--enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown"-->
      <popup ref="popup" position="center">
        <div class="popup_content">
          <p>是的购房计划告诉对方感觉是豆腐干士大夫韩国十大富豪</p>
          <button class="msg_btn" @click="closePopup">关闭</button>
        </div>
      </popup>
    </transition>

  </div>
</template>

<script>
import {toastMsg, alertMsg} from '../js/dynamicComponents'

export default {
  name: 'module',
  data () {
    return {
      // popupState: false,
      state: true,
      tableData: [{
        name: '蝴蝶谷',
        mobile: '12155447896'
      }, {
        name: '保皇派',
        mobile: '13744558632'
      }, {
        name: '球蛋白',
        mobile: '15211478965'
      }, {
        name: '薯莨片',
        mobile: '18322478569'
      }]
    }
  },
  methods: {
    showMsg () {
      toastMsg(this.$refs.clock.showTime())
      alertMsg('操作失败', 1)
      this.state = !this.state
    },
    closePopup () {
      this.$refs.popup.closePopup()
      // this.popupState = false
    },
    openPopup () {
      this.$refs.popup.openPopup()
      // this.popupState = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-active {
    margin-top: -1rem;
  }
  .msg_btn{
    width: 90%;
    margin-left: 5%;
    border: 0;
    height: .8rem;
    background-color: cadetblue;
    color: #fff;
    font-weight: bold;
  }
  .btn_area{
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    button{
      width: 30%;
      height: .8rem;
      margin: auto;
      border: 0;
      background-color: #a5a5a5;
      border-radius: .08rem;
      color: #fff;
    }
    .open_popup{
      background-color: #4DB6AC;
    }
  }
  .popup_content{
    background-color: #ffffff;
    border-radius: .2rem;
    width: 7rem;
    margin: auto;
    p{
      padding: .5rem .6rem;
    }
    button{
      margin-bottom: .5rem;
    }
  }
</style>
