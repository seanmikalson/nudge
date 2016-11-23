<template>
  <div id="app">
    <intention-input :allintentions="allintentions"></intention-input>
  </div>
</template>

<script>
import IntentionInput from './components/intention-input'

export default {
  name: 'app',
  props: ['allintentions'],
  components: {
    IntentionInput
  }
}
</script>

<style lang="scss">

</style>
