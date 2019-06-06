import test from '../components/test'
import clock from '../components/clock'
import loading from '../components/loading'
import popup from '../components/popup'
import myTable from '../components/myTable'

const components = {
  install: function (Vue) {
    Vue.component('test', test)
    Vue.component('clock', clock)
    Vue.component('loading', loading)
    Vue.component('popup', popup)
    Vue.component('my-table', myTable)
  }
}
export default components
