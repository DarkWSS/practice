import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import slide from '@/components/slide'
import clock from '@/components/clock'
import calendar from '@/components/calendar'
import drag from '@/components/drag'
import anime from '@/components/anime'
import arborescence from '@/components/arborescence'
import rain from '@/components/rain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },
    {
      path: '/clock',
      name: 'clock',
      component: clock
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/anime',
      name: 'anime',
      component: anime
    },
    {
      path: '/arborescence',
      name: 'arborescence',
      component: arborescence
    },
    {
      path: '/rain',
      name: 'rain',
      component: rain
    }
  ]
})
