<template>
    <div class="login" v-title data-title="login to vue">
      <h3>Login To Vue</h3>
      <div class="form">
        <label>
          <span class="name" :class="nameInput ? 'on_input' : ''">name</span>
          <input type="text" v-model="login.name" @focusin="onInput('name')" @focusout="outInput('name')">
        </label>
        <label>
          <span class="pwd" :class="pwdInput ? 'on_input' : ''">password</span>
          <input type="password" v-model="login.pwd"   @focusin="onInput('pwd')" @focusout="outInput('pwd')">
        </label>
        <div class="choose">
          <i class="fa" :class="chooseState ? 'fa-check-circle' : 'fa-circle-o'" @click="chooseState= !chooseState"></i>
          <span>choose here to agree to our <a>agreement</a></span>
        </div>
        <div class="go_login">
          <button>Login</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      chooseState: false,
      nameInput: false,
      pwdInput: false,
      login: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    onInput (key) {
      key.indexOf('name') > -1 ? this.nameInput = true : this.pwdInput = true
    },
    outInput (key) {
      if (key.indexOf('name') > -1 && this.login.name.length < 1) {
        this.nameInput = false
      }
      if (key.indexOf('pwd') > -1 && this.login.pwd.length < 1) {
        this.pwdInput = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../css/publicValue.scss';
  @import "../assets/css/font.css";
  .login{
    font-size: $fontColor;
    h3{
      height: 3.5rem;
      line-height: 5.5rem;
      font-size: .48rem;
      text-align: center;
      font-family: 'CollegiateBlackFLF';
    }
    .form{
      font-size: .28rem;
      width: 6rem;
      margin: auto;
      input{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        margin-top: .3rem;
        border: 0;
        border-bottom: .02rem solid #a5a5a5;
        padding-left: .05rem;
      }
      .name, .pwd{
        position: absolute;
        color: #a5a5a5;
        font-weight:bold;
        padding-left: .05rem;
        margin-top: .2rem;
        transition: all 1s;
      }
      .on_input{
        margin-top: 0;
        padding-left: 0;
        font-size: .24rem;
      }
      .choose{
        font-size: .28rem;
        height: .5rem;
        i{
        }
        span{
        }
      }
      .go_login{
        width: 6rem;
        height: .8rem;
        margin: auto;
        button{
          width: 6rem;
          height: .8rem;
          border: 0;
        }
      }
    }
  }
</style>
