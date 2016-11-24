<template>
  <ul>
    <li v-for="intention in allintentions">
      {{intention}}
    </li>
  </ul>
</template>

<script>
module.exports = {
  props: ['allintentions']
}
</script>


<style scoped>
</style>
