# router-skills
基础路由的实现

代码分割+懒加载（按需加载）<a>官方文档说明</a>
------
```javascript
const css = r => require.ensure([], () => r(require('@/components/css/css')), 'css')
const h1 = () => import(/* webpackChunkName: 'h1' */ '@/components/html/childrens/h1')
```


路由
-----
```javascript
routes: [{
    path: '/',
    name: 'root',
    component: App, //顶级路由
    children: [
      //二级路由，html部分
      {
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
    }]
}]
```

路由间传值（不全）
```javascript
app.js
<router-link :to="{path: '/js', query: {name: '123'}}">js</router-link>

js.vue
data() {
    return {
      js: 'im 2 js',
      name: ''
    }
  },
  created() {
    this.name = this.$route.query.name //通过 url query，父子路由进行传值
  }

js1.vue
created() {
    this.parentMess = this.$parent.js; //获取父路由信息
}

```