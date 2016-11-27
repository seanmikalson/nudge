<template>
  <div id="app">
    <intention-input @refresh="getIntentions" :allintentions="allintentions"></intention-input>
    <intention-display @refresh="getIntentions" :allintentions="allintentions"></intention-display>
  </div>
</template>

<script>
import IntentionInput from './components/intention-input'
import IntentionDisplay from './components/intention-display'

export default {
  name: 'app',
  components: {
    IntentionInput,
    IntentionDisplay
  },
  data: function(){
    return {
      allintentions: ''
    };
  },
  created: function() {
    this.getIntentions();
  },
  methods: {
    getIntentions: function() {
      fetch('/getintentions', {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      }).then(function(data) {
        data.text().then(function(response) {
          this.allintentions = JSON.parse(response);
        }.bind(this));
      }.bind(this));
    }
  }
}
</script>

<style lang="scss">

</style>
