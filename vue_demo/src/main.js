import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap' // 在這裡載入 Bootstrap 的 JavaScript 檔與CSS相關
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import loading from 'vue-loading-overlay' //過場遮罩使用
import 'vue-loading-overlay/dist/vue-loading.css'
import '@fortawesome/fontawesome-free/css/all.css' //引入小圖
import i18n from './i18n/language.js' //加入語系
import Vuelidate from 'vuelidate' //針對欄位驗證使用
Vue.use(Vuelidate)
// 讓瀏覽器的全域環境可以使用到 $
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
Vue.config.productionTip = false
import '@/assets/css/global.css' //導入全局樣式
//錯誤訊息彈跳
import SimpleAlertError from "@/components/SimpleAlertError.vue";

//EventBus
Vue.prototype.$bus = new Vue();

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
Vue.component('loading', Loading) // vue-loading-overlay