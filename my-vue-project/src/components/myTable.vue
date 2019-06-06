<template>
  <div class="my_table">
    <table>
      <slot name="title"></slot>
      <slot name="data"></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'myTable'
}
</script>

<style lang="scss" scoped>
  .my_table{
    .data_area{
      max-height: 3rem;
      overflow: auto;
    }
    table{
      width: 100%;
      font-size: .24rem;
      border-spacing: 0;
      text-align: center;
      tr{
        &:nth-child(odd){
          background-color: #d9d9d9;
        }
        &:nth-child(even){
          background-color: #fff;
        }
      }
      th{
        font-weight: bold;
        color: #4169E1;
        padding: .2rem 0;
        background-color: #DAF7A6;
      }
      td{
        color: #4682B4;
        padding: .1rem 0;
      }
    }
  }
</style>
