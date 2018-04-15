<template>
  <!-- home_list -->
  <div class="bot_menu hom_menu">
    <div class="col-xs-4 yd1 hei72 nav1">
      <router-link to="/home"><span></span><br />首页</router-link>
    </div>
    <div class="col-xs-4 yd1 hei72 nav2">
      <router-link to="housekeeper"><span></span><br />管家</router-link>
    </div>
    <div class="col-xs-4 yd1 hei72 nav3">
      <router-link to="/profile"><span></span><br />我的</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  a{text-decoration: none}
  .bot_menu{width:100%;float:left;height:49px;border-top:1px solid #e7e7e7;position:fixed;bottom:0;left:0;z-index:99;background-color:#fff;}
  .bot_menu .a1{height:49px;text-align:center;border-right:1px solid #e7e7e7;padding:0;}
  .bot_menu .a1 a{width:100%;float:left;height:49px;line-height:49px;}
  .bot_menu .a1 span{font-size:14px;color:#3f3e3e;padding:0 27px 0 15px;background:url(../../assets/icon9.png) 100% 50% no-repeat;}
  .list_tjpx{width:100%;float:left;border-top:1px solid #e7e7e7;position:fixed;bottom:44px;left:0;z-index:99;background-color:#fff;}
  .list_tjpx li{width:100%;float:left;height:40px;line-height:40px;border-bottom:1px solid #e7e7e7;padding:0 15px;font-size:14px;}
  .list_tjpx .active{background:url(../../assets/icon10.png) 98% 50% no-repeat; background-size:24px;}
  .bot_menu .open a span{background:url(../../assets/icon9_1.png) 100% 50% no-repeat;}
  .bot_menu .yd1{font-size:16px;color:#3f3e3e;text-align:center;padding-top:4px;}
  .bot_menu .yd2{height:49px;padding:0;}
  .bot_menu .yd2 a{font-size:14px;height:35px;color:#fff;text-align:center;padding-top:3px;background-color:#de2f4e;margin:0;width:100%;float:left;}

  .hom_menu .nav1 span{background:url(../../assets/icon19.png) 50% 50% no-repeat;width:100%;float:left;height:20px; background-size: auto 20px;}
  .hom_menu .nav1 a.active span{background:url(../../assets/icon19_1.png) 50% 50% no-repeat;background-size: auto 20px;}
  .hom_menu .nav2 span{background:url(../../assets/icon20.png) 50% 50% no-repeat;width:100%;float:left;height:20px; background-size: auto 20px;}
  .hom_menu .nav2 a.active span{background:url(../../assets/icon20_1.png) 50% 50% no-repeat;background-size: auto 20px;}
  .hom_menu .nav3 span{background:url(../../assets/icon21.png) 50% 50% no-repeat;width:100%;float:left;height:20px; background-size: auto 20px;}
  .hom_menu .nav3 a.active span{background:url(../../assets/icon21_1.png) 50% 50% no-repeat;background-size: auto 20px;}
  .hom_menu{height:49px;}
  .hom_menu a{font-size:15px;color:#8d8b8b;}
  .hom_menu a span{margin-bottom:2px;}
  .hom_menu div a.active{color:#c88a27;}

</style>
