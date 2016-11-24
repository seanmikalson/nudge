<template>
  <div id="app">
    <intention-input @intentionadded="intentionadded" :allintentions="allintentions"></intention-input>
    <intention-display :allintentions="allintentions"></intention-display>
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
  },
  methods: {
    intentionadded: function(intention) {
      this.allintentions.push(intention);
    }
  }
}
</script>

<style lang="scss">

</style>
