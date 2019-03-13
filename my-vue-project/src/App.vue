<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {getNewDate} from '../api/index'
export default {
  name: 'App',
  methods: {
    consoleLog () {
      console.log(getNewDate)
    }
  }
}
</script>

<style>

</style>
