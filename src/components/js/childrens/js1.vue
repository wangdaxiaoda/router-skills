<template>
  <div>im js1
    <p>from parent  {{parentMess}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMess: ""
    };
  },
  created() {
    this.parentMess = this.$parent.js; //获取父路由信息
  }
};
</script>
