<template>
  <div>just for test <button @click="show">123</button></div>
</template>

<script>
import a from "./a.js"
export default {
  data () {
    return {
      mess: 'showshow'
    }
  },
  methods: {
    show () { a(this.mess) }
  }
}
</script>
