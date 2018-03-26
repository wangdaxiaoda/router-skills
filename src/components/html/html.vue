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
  },
  created() {
    console.log(this.$route);
    this.a = this.$route.params.age
  }
};
</script>


<style>
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
