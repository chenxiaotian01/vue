import Vue from 'vue'
import App from '@/App'
Vue.config.productionTip = false
 let vm = new Vue({
    el:'#root',
    render:h => h(App)
})
console.log(vm)