import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    footerShow: true,
    loadingShow: false
  },
  getters: {
    footerShow: state => {
      return state.footerShow
    },
    loaingShow: state => {
      return state.loadingShow
    }
  },
  mutations: {
    showFooter (state) {
      state.footerShow = true;
    },
    hideFooter (state) {
      state.footerShow = false;
    },
    showLoading (state) {
      state.loadingShow = true;
    },
    hideLoading (state) {
      state.loadingShow = false;
    }
  }
});

