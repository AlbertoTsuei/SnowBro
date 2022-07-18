import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import $httpMessageState from '@/methods/pushMessageState'
import { date, currency } from './methods/filter'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(AOS.init({ }))
app.use(router)
app.use(VueAxios, axios)
app.component('VueForm', Form)
app.component('VueField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VueLoading', Loading)
app.use(CKEditor)
app.mount('#app')
