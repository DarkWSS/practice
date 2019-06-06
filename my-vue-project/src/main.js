// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
// import vueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.min.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
/* import mandMobile from 'mand-mobile' */
import {NoticeBar, Button} from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import './css/mand-mobile.1.6.9.css'
import components from './js/components.js'
import './js/rootFontSize'
import './css/reset.css'
import './filter/filter'
import 'animate.css'

Vue.prototype.$ajax = axios
// Vue.use(vueAxios)
Vue.use(swiper)
Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(components)
Vue.component(Button.name, Button)
Vue.component(NoticeBar.name, NoticeBar)

Vue.config.productionTip = false
// 动态修改页面title
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
