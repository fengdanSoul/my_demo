<template>
    <div class="bg_qhui">
      <navigationbar :title="'游艇列表'"></navigationbar>
      <div class="ny_pic heiauto">
        <h1>都欣然<span class=" fon_14 pad_le15">工号 SY0008</span></h1>
        <p>评分：8.0&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;200单&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;78收藏</p>
        <img src="../../assets/pic/1.gif" class="heiauto" />
      </div>
      <!-- ny_pic -->
      <div class="ny_sx"><span><strong class="fon_20 fon_wei"><em class="red">5.0</em>分</strong>&nbsp;&nbsp;&nbsp;&nbsp;200条好论&nbsp;&nbsp;386条差评</span></div>
      <!-- ny_sx -->
      <dl class="ny_bot_about ny_gj mar_top10 mar_bot0">
        <dt><img src="../../assets/icon3.png" />关于我</dt>
        <dd>
          我是三亚学院的学生，来自于江南水乡 湖北。
        </dd>
      </dl>
      <!-- ny_gj -->
      <dl class="ny_bot_about ny_gj mar_top10 mar_bot0">
        <dt><img src="../../assets/icon3.png" />我的相册</dt>
        <dd>
          <div class="ny_gj_pic">
            <p>
              <a href="#"><img src="../../assets/pic/1.gif" /></a>
              <a href="#"><img src="../../assets/pic/1.gif" /></a>
              <a href="#"><img src="../../assets/pic/1.gif" /></a>
              <a href="#"><img src="../../assets/pic/1.gif" /></a>
              <a href="#"><img src="../../assets/pic/1.gif" /></a>
            </p>
          </div>
        </dd>
      </dl>
      <!-- ny_gj -->
      <dl class="ny_bot_about ny_gj mar_top10 mar_bot0">
        <dt class="active"><img src="../../assets/icon3.png" />服务内容</dt>
        <dd>
          我是三亚学院的学生，来自于江南水乡 湖北。
        </dd>
      </dl>
      <!-- ny_gj -->
      <dl class="ny_bot_about ny_gj mar_top10 mar_bot0">
        <dt><img src="../../assets/icon3.png" />特别提醒</dt>
        <dd>
          我是三亚学院的学生，来自于江南水乡 湖北。
        </dd>
      </dl>
      <!-- ny_gj -->
      <dl class="ny_bot_about ny_gj mar_top10 mar_bot0">
        <dt><img src="../../assets/icon3.png" />费用明细</dt>
        <dd>
          我是三亚学院的学生，来自于江南水乡 湖北。
        </dd>
      </dl>
      <!-- ny_gj -->
      <dl class="ny_bot_about ny_gj mar_top10 mar_bot60">
        <dt><img src="../../assets/icon3.png" />退订政策</dt>
        <dd>
          我是三亚学院的学生，来自于江南水乡 湖北。
        </dd>
      </dl>
      <!-- ny_gj -->
      <div class="bot_menu">
        <div class="col-xs-3 yd1 hei49 bor_ri1">
          <a href="#">评论</a>
        </div>
        <div class="col-xs-3 yd1 hei49">
          <a href="#">收藏</a>
        </div>
        <div class="col-xs-6 yd2">
          <a href="#">提交订单</a>
        </div>
      </div>
      <!-- bot_menu -->
    </div>
</template>

<script>
  import navigationbar from '../navigationbar/Navigationbar'
    export default {
      name: "HousekeeperList",
      components:{
        navigationbar
      },
      methods:{
        goBack() {
          console.log('back');
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>

  .ny_pic{width:100%;float:left;height:197px;margin-top:45px;position:relative;}
  .ny_pic h1{position:absolute;bottom:45px;left:25px;font-size:27px;color:#fff;margin:0;}
  .ny_pic p{position:absolute;bottom:19px;left:25px;font-size:13px;color:#fff;margin:0;}
  .ny_pic img{height:197px;width:100%;}

  .ny_sx{height:48px;line-height:44px;width:100%;float:left;border-bottom:1px solid #e5e5e5;padding:0 18px;background:#fff url(../../assets/icon6.png) 97% 50% no-repeat;}
  .ny_sx span{font-size:14px;font-size:14px;color:#3f3e3e;}

  .ny_list,.ny_list dt,.ny_list dt a,.ny_list dd div,.ny_bot_about dt,.ny_bot_about dd{width:100%;float:left;margin:0;}
  .ny_list{padding:11px;}
  .ny_list dt a{height:72px;border:1px solid #d9d9d9;background:#fff url(../../assets/icon12.png) 97% 50% no-repeat; background-size:30px;border-radius:5px;padding:4px;}
  .open dt .yt_ny_a1{background:#fff url(../../assets/icon12_1.png) 97% 50% no-repeat;background-size:30px;}
  .ny_list dt a .img{padding:0!important;height:63px;}
  .ny_list dt a strong{font-size:17px;line-height:17px;color:#454646;font-weight:normal;margin-top:10px;}
  .ny_list dt a p{font-size:13px;line-height:13px;color:#a3a4a3;font-weight:normal;margin-top:10px;}
  .ny_list dt a span,.ny_list dd div span{text-align:left;font-size:19px;margin-top:-10px;margin-bottom:0;margin-top:-4px;padding-left:0;margin-left:-10px;}
  .ny_list dt a span em,.ny_list dd div span em{font-size:14px;padding:0 2px;}
  .ny_list dt a span strong,.ny_list dd div span strong{color:#de2f4e;font-weight:normal;}
  .ny_list dd div{border-bottom:1px solid #d9d9d9;padding:16px 12px;}
  .ny_list dd div h3{font-size:17px;color:#454646;margin:0;}
  .ny_list dd div p{margin:7px 0 0 0;}
  .ny_list dd div span{margin:-5px 0 0 0;}
  .ny_list dd div a{background-color:#b1b0b0;height:45px;margin-top:-20px; border-radius:7px;color:#fff;text-align:center;padding-top:5px;font-size:12px;}

  .ny_bot_about{width:100%;float:left;border-bottom:1px solid #e5e5e5;border-top:1px solid #e5e5e5;padding:10px 18px;background-color:#fff}
  .ny_bot_about dt{font-size:16px;color:#454646;line-height:32px;}
  .ny_bot_about dd{line-height:32px;font-size:14px;}
  .ny_bot_about dd span{margin-right:18px;word-break:keep-all;}

</style>
