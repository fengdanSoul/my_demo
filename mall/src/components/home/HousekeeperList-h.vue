<template>
    <div class="home_list ">
      <!-- home_list -->
      <dl class="">
        <dt><img src="../../assets/icon3.png" /><span>游艇管家</span><a href="#">更多</a></dt>
        <dd>
          <div class="lay_hie">
            <router-link to="./gjlist">
              <img src="../../assets/pic/1.gif" />
              <p>
                <strong>徐梦园</strong><span>评价26  200单</span>
                <font><em>开朗</em><em>爱好摄影</em></font>
              </p>
            </router-link>
            <router-link to="./gjlist">
              <img src="../../assets/pic/2.gif" />
              <p>
                <strong>徐梦园</strong><span>评价26  200单</span>
                <font><em>开朗</em><em>爱好摄影</em></font>
              </p>
            </router-link>
            <router-link to="./gjlist">
              <img src="../../assets/pic/3.gif" />
              <p>
                <strong>徐梦园</strong><span>评价26  200单</span>
                <font><em>开朗</em><em>爱好摄影</em></font>
              </p>
            </router-link>
          </div>
        </dd>
      </dl>
      <!-- home_list -->

      <!--<dl>-->
        <!--<dt><img src="../../assets/icon3.png" /><span>游艇管家</span><a class="more" href="javascript:;">更多</a></dt>-->
        <!--<dd>-->
          <!--<div class="lay_hie">-->
            <!--<a href="javascript:;" v-for="item in butlerrecommend" v-if="butlerrecommend" @click="toButlerDet(item.butlerId)">-->
              <!--<img :src="imgHost+item.img" />-->
              <!--<p>-->
                <!--<strong>{{item.butlerNameCn}}</strong><span>评价{{item.score}}  200单</span>-->
                <!--<font><em v-for="label in item.labelType.split(',')">{{label}}</em></font>-->
              <!--</p>-->
            <!--</a>-->
          <!--</div>-->
        <!--</dd>-->
      <!--</dl>-->
      <div style="clear: both"></div>
    </div>
</template>

<script>
    export default {
      name: "HousekeeperList-h",
      props:{
        butlerrecommend:{
          type: Array,
        },
        imgHost:{
          type:''
        }
      },
      methods: {
        toButlerDet(butlerId) {
          this.$http.post('/searchButlerInfo', {
            'butlerId':butlerId
          }).then(function (response) {
            console.log(response);
            alert('测试：'+response.data['value']['butler']['chargeDetail'])
          }).catch(function (err) {
            if (err) {
              console.log('获取管家详情失败');
            }
          })
        }

      }

    }
</script>

<style scoped>
  .home_list{padding:17px 0 0 0;margin:0;}
  .home_list dt,.home_list dd{width:100%;float:left;margin-bottom:18px;}
  .home_list dt{padding-left:13px;}
  .home_list dt img{float:left;}
  .home_list dt span{float:left;font-size:19px;line-height:19px;color:#030303;font-weight:normal;margin-left:11px;}
  .home_list dt a{float:right;font-size:16px;color:#767676;font-weight:normal;padding-right:15px;margin-right:13px;background:url(../../assets/icon4.png) 100% 50% no-repeat;text-decoration: none}
  .home_list dd{height:308px;overflow-y:hidden;overflow-x:scroll;padding-left:4px;margin:0;}
  .home_list dd a{width:190px;float:left;height:301px;margin-left:9px;position:relative;}
  .home_list dd img{width:189px;height:230px;float:left; border-radius:5px 5px 0 0;}
  .home_list dd p{width:100%;height:71px;float:left;box-shadow:0 3px 10px #f3f3f3;padding:12px 10px;margin:0;background-color:#fff;}
  .home_list dd .lay_hie{width:608px;height:300px;float:left;}
  .home_list dd p strong{font-size:19px;line-height:19px;color:#393939;font-weight:normal;float:left;}
  .home_list dd p span{font-size:14px;color:#7a7979;font-weight:normal;float:right;margin-top:3px;line-height:14px;}
  .home_list dd p font{width:100%;float:left;margin-top:9px;}
  .home_list dd p em,.bj_btn{font-size:12px;line-height:19px;color:#969696;float:left;height:20px;padding:0 8px;margin-right:5px;border:1px solid #d1d1d1; border-radius:2px;}
  .home_list .xz_ico{width:26px;height:26px; position:absolute;top:0;right:1px;}
</style>
