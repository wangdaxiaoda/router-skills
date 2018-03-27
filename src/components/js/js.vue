<template>
  <div id="body">
      <div id="left-menu">
        <ul>
          <li><router-link :to="'/js/js1'">js1</router-link></li>
          <li><router-link :to="'/js/js2'">js2</router-link></li>
        </ul>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
  </div>
</template>


