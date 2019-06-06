<template>
    <div class="main">
      <md-button type="default" round icon="edit" size="small">Default & Plain</md-button>
      <md-notice-bar
        icon="warn"
        mode="closable"
        type="warning"
      >
        该银行3:00-12:00系统维护，请更换其他银行卡
      </md-notice-bar>
      <md-notice-bar
        icon="coupon"
        mode="link"
        type="activity"
        style="margin-top:10px;"
      >
        福利来啦，7日免息券发放中！
      </md-notice-bar>
    </div>
</template>

<script>
import '../js/rootFontSize.js'
export default {
  name: 'mand'
}
</script>

<style scoped lang="scss">
  .main{

  }
</style>
