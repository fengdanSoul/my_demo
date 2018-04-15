<template>
  <div id="app">
    <v-loading v-show="loadingShow"></v-loading>
    <transition name="slide-down">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <footerView v-show="footerShow"></footerView>
  </div>
</template>

<script>
  import LoadingView from './components/loading/Loading'
  import footerView from './components/footer/Footer.vue'
  // import { mapGetters } from 'vuex'

  export default {
  name: 'App',
  // computed:{
  //   ...mapGetters([
  //     'footerShow',
  //     'loadingShow'
  //   ])
  // },
  computed:{
    footerShow(){
      return this.$store.state.footerShow;
    },
    loadingShow(){
      return this.$store.state.loadingShow;
    }
  },
  mounted(){

  },

  components: {
    'v-loading':LoadingView,
    footerView
  }
}
</script>

<style>
  .slide-up-enter-active, .slide-up-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    /*transform: translate3d(0, 4em, 0);*/
  }
  .slide-up-enter, .slide-up-leave-active {
    opacity: .3;
    /*transform: translate3d(0, 4em, 0);*/
  }

  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    /*transform: translate3d(0, 6em, 0);*/
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: .1;
    /*transform: translate3d(0, 6em, 0);*/
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(2em, 0, 0);
  }

  .slide-left-enter, .slide-left-leave-active {
    opacity: .3;
    transform: translate3d(2em, 0, 0);
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .5;
    transform: translate3d(5em, 0, 0);
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: .3;
    transform: translate3d(5em, 0, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
