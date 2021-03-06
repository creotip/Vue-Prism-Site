// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VuePrism from 'vue-prism'
Vue.use(VuePrism)

import 'normalize.css/normalize.css'
import 'prismjs/themes/prism.css'
import './assets/main.css'
// import 'prismjs/themes/prism-okaidia.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
