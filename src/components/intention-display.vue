<template>
  <ul>
    <li v-for="intention in allintentions">
      {{intention.value}}
      <button @click="removeIntention(intention.key)" class="btn">X</button>
    </li>
  </ul>
</template>

<script>
module.exports = {
  name: 'intention-display',
  props: ['allintentions'],
  methods: {
    removeIntention: function(key) {
      fetch('/intention/' + key, {
        method: 'DELETE'
      });
      this.$emit('refresh');
    }
  }
}
</script>
.btn {
  width: 20px;
  height: 20px;
}

<style scoped>
</style>
