<template>
  <div>this is css
      <p>{{mess}}</p>
      <p v-if="isNow">you can see me now</p>
      <p>{{person.name}}!!!{{person.age}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mess: null,
      isNow: false,
      person: {}
    }
  },
  created() {
    this.mess = this.$route.query.mess;
    this.isNow = this.$route.query.isNow;
    this.person = this.$route.query.person;
  }
};
</script>
