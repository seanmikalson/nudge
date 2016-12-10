<template>
  <div class="intention-input">
    <div>
      <span>Goal!</span>
    </div>
    <div>
      <input class="int-input" placeholder="Need a nudge?" v-model="intention"></input>
      <button class="btn btn-set-time" @click="setTime">When?</button>
      <button class="btn intention-button" @click="intentionEntered">Add!</button>
    </div>
    <time-picker v-if="showTimePicker" @time-selected="timeSelected" @canceled="timeSelectCancel"></time-picker>
  </div>
</template>

<script>
import TimePicker from './time-picker'

export default {
  name: 'intention-input',
  props: ['allintentions'],
  components: {
    TimePicker
  },
  data: function () {
    return {
      intention: '',
      showTimePicker: false
    };
  },
  methods: {
    intentionEntered: function() {
      fetch('/save', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'text/plain'
        }),
        body: this.intention
      }).then(function() {
        this.$emit('refresh', this.intention);
      }.bind(this));
    },
    setTime: function() {
      this.showTimePicker = true;
    },
    timeSelected: function() {
      this.showTimePicker = false;
    },
    timeSelectCancel: function() {
      this.showTimePicker = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intention-input {
  text-align: center;
}

.btn {
  width: 50px;
  height: 20px;
}

.btn-set-time {
  width: 70px;
}

input {
  padding: 5px;
  width: 200px;
  height: 20px;
}
</style>
