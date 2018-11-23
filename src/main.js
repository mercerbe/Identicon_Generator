import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: "#app",
  methods: {
    onInput: function () {
      console.log('input')
    }
  }

}).$mount('#app')
