import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index"



//全局配置
import 'element-ui/lib/theme-chalk/index.css'
import http from './api/config'
import './mock'

//第三方包
import ElementUI from 'element-ui'

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '4b5g9T9NKD9ICQHuPSxlth5cAb8cHZZQ'
})


Vue.use(ElementUI)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,store,
}).$mount('#app')
