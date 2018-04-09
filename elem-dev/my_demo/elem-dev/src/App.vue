<template>
  <div id="app">
    <!--<headerView></headerView>-->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import headerView from './components/header/Header'
  export default {
    name: 'App',
    components: {
      headerView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      text-align center
      .tab-item
        flex 1
        & > a.active
          color red



</style>
