<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab ">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import header from './components/header/Header.vue'

  export default {
    name: 'App',
    data(){
      return {
        seller: {}
      }
    },
    created(){
      // http://192.168.0.105/data.json
      let _this = this;
      this.$http.get('/api/data.json').then((response) => {
        if (response.data) {
          _this.seller = response.data['seller'];
        }
        // console.log(response.data);
      }).catch((error) => {
        if (error){
          console.log(error);
        }
      });
    },
    components: {
      'v-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mix.styl"
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7,17,27,0.2))
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          color rgb(77,85,93)
          font-size 14px
          &.active
            color rgb(240,20,20)

</style>
