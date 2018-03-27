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
const js1 = r => require.ensure([], () => r(require('@/components/js/childrens/js1')), 'js1')
const js2 = r => require.ensure([], () => r(require('@/components/js/childrens/js2')), 'js2')
const css1 = r => require.ensure([], () => r(require('@/components/css/childrens/css1')), 'css1')
const css2 = r => require.ensure([], () => r(require('@/components/css/childrens/css2')), 'css2')

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
      component: js,
      children: [{
        path: 'js1',
        component: js1
      }, {
        path: 'js2',
        component: js2
      }]
    }, {
      path: 'css',
      name: 'css',
      component: css,
      children: [{
        path: 'css1',
        component: css1
      }, {
        path: 'css2',
        component: css2
      }]
    }]
  }, {
    path: 'test',
    name: 'test',
    component: test
  }]
})
