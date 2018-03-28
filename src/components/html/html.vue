<template>
  <div id="body">
      <div id="left-menu">
        <ul>
          <li><router-link :to="'/html/h1'">h1</router-link></li>
          <li><router-link :to="'/html/h2'">h2</router-link></li>
          <li><router-link :to="'/html/h3'">h3</router-link></li>
          <li><router-link :to="'/html/h4'">h4</router-link></li>
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
      leftMenus: {},
      a: ''
    };
  }
};
</script>


<style>

</style>
