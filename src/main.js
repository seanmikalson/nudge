import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :allintentions="allintentions"/>',
  components: { App },
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
        this.allintentions += response;
      }.bind(this));
    }.bind(this));
  }
})

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw-store.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
