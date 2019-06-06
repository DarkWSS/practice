<template>
    <div :class="titlt_style">{{content}}</div>
</template>

<script>
export default {
  name: 'test',
  props: ['titlt_style', 'content']
}
</script>

<style lang="scss" scoped>
  @import '../css/publicValue.scss';
  .p{
    text-align: center;
    font-size: .24rem;
    color: $fontColor;
  }
  .h3{
    text-align: center;
    font-size: .38rem;
    font-weight: bold;
    color: $fontColor;
    height: 1rem;
    line-height: 1rem;
  }
  .test{
    background-color: #FF525D;
  }
</style>
