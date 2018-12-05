import Vue from 'vue'
import App from './App.vue'
import { Button,Row, Col,Uploader, Icon,Tabbar, TabbarItem} from 'vant';
import router from './router/router'
import store from './store'
Vue.use(Button).use(Row).use(Col).use(Uploader).use(Icon).use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false
// Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
