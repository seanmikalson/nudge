<template>
  <div id="app">
    <intention-input @refresh="getIntentions" :allintentions="allintentions"></intention-input>
    <time-picker class="clock-container"></time-picker>
    <intention-display @refresh="getIntentions" :allintentions="allintentions"></intention-display>
  </div>
</template>

<script>
import IntentionInput from './components/intention-input'
import IntentionDisplay from './components/intention-display'
import TimePicker from './components/time-picker'

export default {
  name: 'app',
  components: {
    IntentionInput,
    IntentionDisplay,
    TimePicker
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

.clock-container {
  width: 150px;
  height: 150px;
  margin: auto;
  position: relative;
}
</style>
