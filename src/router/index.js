import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '../App'

const html = r => require.ensure([], () => r(require('@/components/html/html')), 'html')
const js = r => require.ensure([], () => r(require('@/components/js/js')), 'js')
const css = r => require.ensure([], () => r(require('@/components/css/css')), 'css')
const test = r => require.ensure([], () => r(require('@/components/test')), 'test')
const h1 = r => require.ensure([], () => r(require('@/components/html/childrens/h1')), 'h1')
const h2 = r => require.ensure([], () => r(require('@/components/html/childrens/h2')), 'h2')
const h3 = r => require.ensure([], () => r(require('@/components/html/childrens/h3')), 'h3')
const h4 = r => require.ensure([], () => r(require('@/components/html/childrens/h4')), 'h4')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'root',
    component: App,
    children: [{
      path: 'html',
      name: 'html',
      component: html,
      children: [{
        path: 'h1',
        component: h1
      }, {
        path: 'h2',
        component: h2
      }, {
        path: 'h3',
        component: h3
      }, {
        path: 'h4',
        component: h4
      }]
    }, {
      path: 'js',
      component: js
    }, {
      path: 'css',
      name: 'css',
      component: css
    }]
  }, {
    path: 'test',
    name: 'test',
    component: test
  }]
})
