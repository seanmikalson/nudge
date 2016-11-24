<template>
  <div class="intention-input">
    <div>
      <span>Goal!</span>
    </div>
    <div>
      <input class="int-input" placeholder="Need a nudge?" v-model="intention"></input>
      <button class="btn intention-button" @click="intentionEntered">Add!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intention-input',
  props: ['allintentions'],
  data: function () {
    return {
      intention: ''
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
        this.$emit('intentionadded', this.intention);
      }.bind(this));
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

input {
  padding: 5px;
  width: 200px;
  height: 20px;
}
</style>
