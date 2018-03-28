<template>
  <div class="page">
    <div id="header">
      <ul>
        <li class="header-menu"><router-link :to="{path: '/html'}">html</router-link></li>
        <li class="header-menu"><router-link :to="{path: '/js', query: {name: '123'}}">js</router-link></li>
        <li class="header-menu"><router-link :to="{path: '/css', query: {name: '123'}}">css</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      a: '123'
    };
  },
  methods: {}
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}

.page {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#header {
  display: flex;
  justify-content: center;
  height: 50px;
}

.header-menu {
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  list-style: none;
  text-align: center;
  border: 1px dotted;
}

#left-menu {
  width: 200px;
  text-align: center;
}

.left-menu-item {
}

#content {
  position: absolute;
  left: 200px;
  right: 0;
  bottom: 0;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
