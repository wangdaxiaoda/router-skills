import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import html5 from '@/components/html/h5'
// import test from '@/components/test'

const html5 = r => require.ensure([], () => r(require('@/components/html/h5')), 'html5')
const test = r => require.ensure([], () => r(require('@/components/test')), 'test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'h5',
          name: 'html5',
          component: html5
        }
      ]
    }, {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
