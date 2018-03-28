<template>
  <div id="body">
      <div id="left-menu">
        <ul>
          <li><router-link :to="'/js/js1'">js1 {{name}}</router-link></li>
          <li><router-link :to="'/js/js2'">js2</router-link></li>
        </ul>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      js: 'im 2 js',
      name: ''
    }
  },
  created() {
    this.name = this.$route.query.name //通过 url query，父子路由进行传值
  }
}
</script>

