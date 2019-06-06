<template>
    <div class="main">
      <div class="date_area">
        <div class="date">
          <div class="year">{{ year }}</div>
          <div class="month">{{ month }}</div>
          <div class="day">{{ day }}</div>
        </div>
      </div>
      <div class="time_area">
        <div class="time">
          <div class="hours">{{ hours }}</div>
          <div class="minute">{{ minute }}</div>
          <div class="second">{{ second }}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      year: '',
      month: '',
      day: '',
      hours: '',
      minute: '',
      second: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.getTime()
    })
  },
  methods: {
    getTime () {
      const time = new Date()
      this.year = time.getFullYear()
      this.month = (time.getMonth() + 1).toString().padStart(2, '0')
      this.day = time.getDate().toString().padStart(2, '0')
      this.hours = time.getHours().toString().padStart(2, '0')
      this.minute = time.getMinutes().toString().padStart(2, '0')
      this.second = time.getSeconds().toString().padStart(2, '0')
    },
    showTime () {
      return this.year + '-' + this.month + '-' + this.day + ' ' + this.hours + ':' + this.minute + ':' + this.second
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/font.css";
  .date_area{
    .date{
      width: fit-content;
      margin: 2vh auto;
      display: flex;
      font-size: 15vw;
      font-family: 'Tandelle';
      .year{
        color: cadetblue;
        &:after{
          content: ".";
          color: #a5a5a5;
        }
      }
      .month{
        color: darkgreen;
        &:after{
          content: ".";
          color: #a5a5a5;
        }
      }
      .day{
        color: brown;
      }
    }
  }
  .time_area{
    .time{
      width: fit-content;
      margin: 2vh auto;
      display: flex;
      font-size: 15vw;
      font-family: 'CollegiateBlackFLF';
      .hours{
        color: cadetblue;
        &:after{
          content: ":";
          color: #a5a5a5;
          margin: 0 1vw;
        }
      }
      .minute{
        color: darkgreen;
        &:after{
          content: ":";
          color: #a5a5a5;
          margin: 0 1vw;
        }
      }
      .second{
        color: brown;
      }
    }
  }
</style>
