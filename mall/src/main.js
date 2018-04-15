// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
Vue.config.productionTip = false


axios.interceptors.request.use(function (config) {
  store.commit('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  store.commit('hideLoading');
  return response;
}, function (error) {
  return Promise.reject(error);
});
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/

// axios.defaults.baseURL = 'http://client.ilxgj.com';
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to, from,next) => {
  var path=to.path.substring(1);
  if(path.indexOf('gjlist')==-1){
    store.commit('showFooter');
  }else{
    store.commit('hideFooter');
  }
  next();

});
