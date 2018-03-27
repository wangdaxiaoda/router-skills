<template>
  <div id="body">
      <div id="left-menu">
        <ul>
          <li><router-link :to="'/css/css1'">css1</router-link></li>
          <li><router-link :to="'/css/css2'">css2</router-link></li>
        </ul>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
  </div>
</template>
