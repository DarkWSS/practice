import Vue from 'vue'
import msg from '../components/msg'
// toast简单弹窗
export let toastMsg = (text) => {
  let MsgClass = Vue.extend(msg)
  let msgInstance = new MsgClass()
  msgInstance.$mount()
  document.body.appendChild(msgInstance.$el)
  msgInstance.showMsg(text)
}
// toast简单弹窗
export let alertMsg = (text, type) => {
  let MsgClass = Vue.extend(msg)
  let msgInstance = new MsgClass()
  msgInstance.$mount()
  document.body.appendChild(msgInstance.$el)
  msgInstance.alertMsg(text, type)
}
export let consoleLog = (log) => {
  console.log(log)
}
