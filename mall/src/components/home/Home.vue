<template>
  <div class="header">
    <div class="home_header">
      <img class="bg" src="../../assets/top_bg.gif" alt="">
      <strong class="col-xs-3">
        <select v-model="localName" class=" mar_top4">
          <option >{{localName}}</option>
          <option>广州</option>
          <option>北京</option>
        </select>
      </strong>
      <p class="col-xs-8 home_search"><span><input name="" type="text" value="搜索城市，游艇等信息" onfocus="if (value =='搜索城市，游艇等信息'){value =''}" onblur="if (value ==''){value='搜索城市，游艇等信息'}" /></span></p>
      <a href="tel:10086" class="col-xs-1 tex_cen pad0"><img src="../../assets/icon1.png" /></a>
      <!--出游日期、人数选择-->
      <div class="picker">
        <span><a class="date" href="javascript:;" @click="selectDate">{{this.calendar1.display ? this.calendar1.display:'出游日期'}}</a></span>
        <span class=" bor_no mar_le20">
          <select class="count" v-model="playCount">
            <option disabled value="">出游人数</option>
            <option>1人</option>
            <option>2人</option>
            <option>3人</option>
          </select>
        </span>
      </div>
    </div>
    <!-- home_header -->
    <housekeeperListH :imgHost="imgHost" :butlerrecommend="butlerrecommend"></housekeeperListH>
    <transition name="slide-fade">
      <keep-alive>
        <div class="datepicker-wrapper" v-show="this.calendar1.datepickerShow">
          <div class="content clearfix">
            <div>
              <calendar
                ref="calendar1"
                :events="calendar1.events"
                :lunar="calendar1.lunar"
                :value="calendar1.value"
                :begin="calendar1.begin"
                :end="calendar1.end"
                :weeks="calendar1.weeks"
                :months="calendar1.months"
                @select="calendar1.select"
                @selectMonth="calendar1.selectMonth"
                @selectYear="calendar1.selectYear"></calendar>
            </div>
          </div>
        </div>
      </keep-alive>
    </transition>


  </div>
</template>

<script>
  import housekeeperListH from './HousekeeperList-h'
  import Calendar from '../calendar/calendar.vue'
  export default {
    data(){
      return {
        localName:'杭州',
        imgHost:'',
        butlerrecommend:[],
        playCount:'',
        calendar1:{
          value: [2018,4,13], //默认日期
          lunar:true, //显示农历
          datepickerShow:false,
          select:(value)=>{
            this.calendar1.value=value;
            this.calendar1.display=value.join("/");
            this.calendar1.datepickerShow = false;
            // 判断星期
          },
          selectMonth(month,year){
            console.log(year,month)
          },
          selectYear(year){
            console.log(year)
          },
          timestamp:Date.now()
        },
      }
    },
    computed: {

    },
    components: {
      housekeeperListH,
      Calendar
    },
    mounted() {
      console.log(this.localName);
      if (this.localName.length) {
        this.init();
      }
      // 定位
      this.getLocation();


    },
    watch:{
      'localName': function () {
        if (this.localName.length) {
          this.init();
        }
      }
    },
    methods: {
      init() {

        let _this = this;
        this.$http.post('/api/searchCityCode', {
          localName: _this.localName
        }).then(function (response) {
          let result = response.data;
          if (result['errorCode'] === 0 || result['success'] === true) {
            _this.$http.post('/api/index',{
              "areaCode_eq":result['value']['localCode']
            }).then(function (response) {
              let result1 = response.data;
              console.log(response);
              if(result1['errorCode'] === 0 || result1['success'] === true ) {
                let arr = result1['value']['Butlerrecommend'];
                if (arr.length>3){
                  _this.butlerrecommend = arr.splice(0,3);
                } else {
                  _this.butlerrecommend = arr;

                }
                _this.imgHost = result1['imgHost'];
              }
            }).catch(function (err) {
              if (err){
                console.log('获取首页数据失败');
              }
            })
          }
        }).catch(function (error) {
          if (error) {
            console.log('获取城市失败');
          }
        });

      },
      // 定位
      getLocation() {
        let _this = this;
        // 百度地图API功能121.48789949,31.24916171
        // 百度地图 浏览器定位
        var map = new BMap.Map("allmap");
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            // alert('您的位置：'+r.point.lng+','+r.point.lat);
            // 百度地图根据经纬度获取地址
            // var point = new BMap.Point(121.48789949,31.24916171);
            var geoc = new BMap.Geocoder();
            geoc.getLocation(r.point, function(rs){
              var addComp = rs.addressComponents;
              // alert('当前城市：',addComp.city);
              _this.localName = addComp.city;
              // alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            });

          }
          else {
            alert('failed'+this.getStatus());
          }
        },{enableHighAccuracy: true})
      },
      // 日期选择
      selectDate() {
        this.calendar1.datepickerShow =true;

      }


    }

  }
</script>

<style scoped>
  .header{margin-bottom: 80px}
  /*.home_header{width:100%;height:189px;background:url(../../assets/top_bg.gif) 0 0 no-repeat;background-size:cover;padding:10px;text-align:center;}*/
  .home_header{position: relative;width:100%;height:189px;padding:10px;text-align:center;}
  .home_header .bg{position: absolute;top:0;left:0;width: 100%;height: 189px;z-index: -1;}
  .home_header select{background-color:transparent;color:#fff;border:0;font-size:16px;appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background-color: #fff;
    /*设置箭头*/
    background: url("../../assets/icon2.png") no-repeat scroll right center transparent;padding-right:20px;background-size:15px auto;}
  .home_header p{margin:0;}
  .home_header .home_search span{background-color:rgba(255,255,255,0.3);border-radius:5px;width:100%;height:32px;float:left;}
  .home_header input[type=text]{width:100%;height:32px;border:0;font-size:14px;color:#fff;text-align:left;background:transparent url(../../assets/icon.png) 2% 50% no-repeat;background-size:15px 15px;padding-left:12.5%;padding-right:5%;}
  .home_header a img{width:22px;margin-top:5px;}
  .home_header div{display:inline-block;margin-top:55px;}
  .home_header div span{border-right:2px solid #fff;display:inline-block;padding-right:20px;height:20px;}
  .home_header div select{font-size:19px;margin-top:-3px;padding-right:27px;}
  .home_header .picker .date{font-size: 16px;color: rgb(255,255,255);text-decoration: none;}
  .home_header .picker .count{font-size: 16px;outline-style: none;text-align: right}
  .bj_btn{height:30px;line-height:30px;margin-top:10px;}

  header{width:100%;height:45px;line-height:45px;float:left;background:url(../../assets/header_bg.gif) 0 0 no-repeat;background-size:cover; position:fixed;top:0;left:0;z-index:99;}
  header a img{width:14px;margin-top:9px;}
  header h3{line-height:45px;margin:0;text-align:center;color:#fff;font-size:19px;}


  .datepicker-wrapper{background: rgb(255,255,255);position: fixed;left: 0;top:0;width: 100%;height:100%;overflow: auto;z-index: 200}
  .datepicker-wrapper .content{width: 100%;min-height: 100%;}

  .content.slide-fade-enter-active, .content.slide-fade-leave-active {
    transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 6em, 0);
  }
  .content.slide-fade-enter, .content.slide-fade-leave-active {
    opacity: .1;
    transform: translate3d(0, 6em, 0);
  }

  .list_nav{width:100%;height:82px;line-height:46px;float:left;background-color:#fff;position:fixed;top:45px;left:0;z-index:99;}
  .list_nav a{font-size:14px;color:#3f3e3e;}
  .list_nav .col-xs-3 img{margin-right:9px;}
  .list_nav .col-xs-6 a{background:url(../../assets/icon6.png) 100% 50% no-repeat;padding-right:20px;}
  .list_nav .col-xs-3 a{background:url(../../assets/icon6.png) 100% 50% no-repeat;padding-right:20px;line-height:14px;font-size:12px;text-align:right;margin-top:10px;float:right;}
  .list_nav .search{width:100%;height:35px;line-height:32px;float:left;border-radius:5px;border:0;text-align:center;color:#3f3e3e;font-size:14px;background:#ebe9e9 url(../../assets/icon7.png) 30% 50% no-repeat;}

  .yt_list{padding:15px;position:absolute;top:127px;left:0;bottom:50px;z-index:10;float:left;width:100%;overflow:auto;}
  .yt_list li,.yt_list li a{width:100%;float:left;}
  .yt_list li{margin-bottom:9px;}
  .yt_list li a{border:1px solid #d9d9d9;border-radius:5px;padding:4px;height:109px;}
  .yt_list li a img{height:98px;border-radius:3px;color:#706f6f;}
  .yt_list li a h4{font-size:17px;margin-top:11px;}
  .yt_list li a span{font-size:12px;color:#a3a4a3;line-height:20px;}
  .yt_list li a p{text-align:right;font-size:19px;margin-top:-10px;padding-right:9px;margin-bottom:0;}
  .yt_list li a p em{font-size:14px;padding:0 2px;}
  .yt_list li a p strong{color:#de2f4e;font-weight:normal;}



  .list_ccsx{width:100%;float:left;border-top:1px solid #e7e7e7;position:fixed;bottom:50px;left:0;z-index:99;background-color:#fff;}
  .list_ccsx dt,.list_ccsx dd{width:100%;float:left;height:40px;line-height:40px;border-bottom:1px solid #e7e7e7;padding:0 15px;font-size:14px;}
  .list_ccsx dt a{width:auto!important;height:auto!important;line-height:33px!important;font-size:14px;color:#202020;}
  .list_ccsx dd{border:0;height:auto;}
  .list_ccsx dd strong{width:100%;float:left;font-size:14px;color:#202020;}
  .list_ccsx dd em{padding:5px;}
  .list_ccsx dd a{width:100%;padding:5px 0;border:1px solid #ecebeb;font-size:12px;height:auto!important;line-height:20px!important;text-align:center; border-radius:5px;}
  .list_ccsx dd a:hover,.list_ccsx dd .me_active{border:1px solid #d8ac67;color:#d8ac67;}
  .list_ccsx .active{background:url(../../assets/icon10.png) 98% 50% no-repeat; background-size:24px;}

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

  .yt_rc_laytou{padding:10px;}
  .rc_title{font-size:15px;color:#3f3e3e;margin-top:45px;line-height:40px;text-align:center;}
  .yt_rc_table{border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;background-color:#fff;}
  .yt_rc_table td{padding:10px 5px;border-bottom:1px solid #d9d9d9;color:#3f3e3e;font-size:12px;text-align:center;}
  .yt_rc_table .tab_title{background-color:#fcfbfb;border-right:1px solid #d9d9d9;}
  .yt_rc_table strong{font-size:14px;font-weight:normal;}
  .yt_rc_table p{margin:0;}
  .yt_rc_table span em,.yt_rc_table p{display:none;}
  .yt_rc_table td:hover em,.yt_rc_table td:hover p{display: inline-block;}
  .yt_rc_table .active .tab_janh,.yt_rc_table .active .tab_jh{width:15px;height:15px;display:inline-block;margin:0 5px -3px 5px;}
  .yt_rc_table .active .tab_janh{background:url(../../assets/icon13.png) 0 0 no-repeat;background-size:15px;}
  .yt_rc_table .active .tab_janh:hover{background:url(../../assets/icon13_1.png) 0 0 no-repeat;background-size:15px;}
  .yt_rc_table .active .tab_jh{background:url(../../assets/icon14.png) 0 0 no-repeat;background-size:15px;}
  .yt_rc_table .active .tab_jh:hover{background:url(../../assets/icon14_1.png) 0 0 no-repeat;background-size:15px;}

  .yt_yd_about{padding:17px;margin:45px 0 0 0;}
  .yt_yd_about dt{font-size:20px;color:#3f3e3e;font-weight:normal;margin-bottom:10px;}
  .yt_yd_about dd{font-size:14px;color:#3f3e3e;line-height:20px;}

  .ny_sx .jjh{width:112px;height:28px;float:right;margin-top:9px;text-align:left;font-size:16px;color:#333333;border:1px solid #dedede;}
  .progress-bar{background-color:#ee7f3b;}
  .ny_sx .jjh a,.ny_sx .jjh input{height:25px;float:left;line-height:26px;text-align:center;font-size:13px;color:#b7b7b7;padding:0;}
  .ny_sx .jjh a img{margin-top:5px;}
  .ny_sx .jjh input{color:#333333;font-size:13px;padding:0;border:0;}
  .ny_sx .yt_text{border:0;}


  .bot_menu .yd1{font-size:17px;color:#3f3e3e;text-align:center;padding-top:12px;}
  .bot_menu .yd2{height:49px;padding:0;}
  .bot_menu .yd2 a{font-size:20px;height:49px;color:#fff;text-align:center;padding-top:12px;background-color:#de2f4e;margin:0;width:100%;float:left;}
  .zf_layout img{width:25px;margin-right:15px;}
  .zf_layout span{font-size:16px;}
  .zf_active{background:#fff url(../../assets/icon17.png)97% 50% no-repeat!important;background-size:20px 14px!important;}

  .mod_new .modal-header{background-color:#fff;font-size:20px;color:#333333;text-align:center;border:0;border-radius:10px;}
  .mod_new .modal-header .close{background-color:#b5b5b5;margin:-30px -20px 0 0;width:32px;height:32px;}
  .mod_new .modal-header .close span{margin:-5px 0 0 5px;font-size:28px;}
  .mod_new ul{font-size:16px;color:#666666;}
  .mod_new ul li{margin:10px 0;width:100%;float:left;font-size:16px;}
  .mod_new ul li span{width:97px;text-align:left;float:left;color:#666666;}
  .mod_new ul .passwor input{width:41px;height:40px;line-height:40px;float:left;color:#333333;font-size:16px;text-align:center;}
  .mod_new ul .xy{font-size:16px;color:#666666;}
  .mod_new ul .xy input{float:left;margin-right:10px;}
  .mod_new ul .xy a{padding:0 5px;color:#ef8c39;text-decoration:underline;}
  .mod_new .modal-footer button{width:40%;margin-left:26px!important; border-radius:10px;}
  .mod_new .modal-footer .btn-danger{background-color:#fe5555;}
  .mod_new1 .btn{height:44px!important; border-radius:5px!important;margin-left:7%!important;width:158px!important;}
  .mod_new2 .btn{width:158px!important;height:44px!important; border-radius:4px!important;}
  .mod_new2 .modal-header,.mod_new1 .modal-header,.mod_new .modal-header{padding-top:20px;}

  .gzgm_model{border-radius:5px;}
  .gzgm_model .modal-header{border-bottom:1px solid #e4e4e4;border-radius:5px;padding:15px;text-align:left;}
  .gzgm_model .modal-header button{margin-top:-25px!important;}
  .gzgm_model .modal-body p{width:100%;float:left;font-size:20px;color:#333333;margin:10px 0;}
  .gzgm_model .modal-body span{border-right:1px solid #e4e4e4;margin:10px 0;font-size:20px;float:left;}
  .gzgm_model .modal-body strong{font-size:20px;color:#fc5555;width:100%;float:left;margin-top:10px;}
  .gzgm_model .modal-body .inp{width:100%;float:left;border-top:1px solid #e4e4e4;}
  .gzgm_model .modal-body .tzgm_lay_top{padding:15px;width:100%;float:left;}
  .gzgm_model .inp{padding:15px 15px 0 15px;}
  .gzgm_model .inp input{margin:0;float:left; border-radius:0;height:60px;}

  .tzgm_mum{position:fixed;bottom:0;left:0;width:100%;float:left;background-color:#e5e5e5;border-top:1px solid #e5e5e5;}
  .tzgm_mum a{border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;background-color:#fff;height:50px;text-align:center;line-height:50px;font-size:24px;color:#333333;}
  .tzgm_mum a:hover{ opacity:0.5;}
  .tzgm_mum .mum_x{font-size:36px;background-color:#e5e5e5;}

  .modal-dialog .modal-header .close {
    width: 28px;
    height: 28px;
    line-height: 26px;
    padding: 0;
    background-color: #b5b5b5;
    float: right;
    opacity: 1;
    border-radius: 30px;
    text-shadow: none
  }
  .modal-dialog .modal-header .close span {
    color: #fff;
    float: left;
    margin: -4px 0 0 4px
  }

  .list_dq{position:fixed;top:104px;left:0;right:auto;bottom:0; overflow:auto;}
  .list_dq dd em{margin-bottom:10px;}
  .list_dq dd em a{float:left;}

  .gj_list li a{height:165px;}
  .gj_list li a img{height:155px;}
  .gj_list li a h4 .biao1{width:16px;height:17px;margin:-4px 0 0 10px;}
  .gj_list li a font{float:left;margin:6px 0;}
  .gj_list li a font em{font-size:12px;line-height:19px;color:#969696;float:left;height:20px;padding:0 8px;margin-right:5px;border:1px solid #d1d1d1; border-radius:2px;}

  .ny_gj dt{background:url(../../assets/icon9.png) 100% 50% no-repeat;}
  .ny_gj dt img{margin:-3px 10px 0 0;}
  .ny_gj .ny_gj_pic{width:100%;float:left;margin-top:10px;margin-bottom:10px;height:97px;overflow-y:hidden;overflow-x:auto;}
  .ny_gj .ny_gj_pic p{width:720px;}
  .ny_gj .ny_gj_pic a{float:left;margin-right:8px;}
  .ny_gj .ny_gj_pic img{height:97px;width:172px;float:left;}
  .ny_gj .active{background:url(../../assets/icon9_1.png) 100% 50% no-repeat;}



  .gj_dq{position:relative;top:auto;left:0;right:auto;bottom:0;margin-top:10px;border-bottom: 1px solid #e7e7e7;}
  .list_dq dd em{margin-bottom:10px;}
  .list_dq dd em a{float:left;}

  .mui-slider_title{background-color:#fff;border-bottom:1px solid #C7C7CC;}
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{color:#ef6a4f!important;}
  .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-progress-bar{background-color: #ef6a4f;}
  .mui-select select{padding-left:10px;}
  .jycx_cd_list{border-bottom:1px solid #DDDDDD;}
  .jycx_cd_list strong{font-size:12px;}
  .jycx_cd_list span{font-size:10px;text-align:right;}
  .jycx_cd_list strong,.jycx_cd_list span{padding-bottom:5px;}
  .jycx_cd_list_bot span{font-size:12px;}
  .jycx_cd_list_btn{border-top:1px solid #DDDDDD;margin:0;border-bottom:0;}

  .btn_qxdd{background-color:#fff!important; box-shadow:none!important;color:#de2f4e!important;margin-top:-5px;float:right;padding-right:0!important;}


</style>
