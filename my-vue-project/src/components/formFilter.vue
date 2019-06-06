<template>
    <div>
      <input v-model="mobile" placeholder="请在此处输入你的手机号码" />
      <button @click="submitForm">提交</button>
    </div>
</template>

<script>
import {checkMobile} from '../filter/checkData'

export default {
  name: 'formFilter',
  data () {
    return {
      mobile: ''
    }
  },
  methods: {
    submitForm () {
      checkMobile(this.mobile)
    }
  }
}
</script>

<style scoped>

</style>
