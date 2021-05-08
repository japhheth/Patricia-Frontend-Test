import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import vuetify from './plugins/vuetify'


Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')