<template>
  <div class="navigationbar">
    <a href="javascript:;" class="icon" @click="goBack"><img src="../../assets/icon8.png" alt=""></a>
    <h1 class="title1">{{title}}</h1>
  </div>

</template>

<script>
    export default {
      name: "Navigationbar",
      props:{
        title:{
          type: String,
          default:'标题'
        }
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .navigationbar {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    z-index:1000 ;
    background: #2e6da4 url(../../assets/header_bg.gif) 0 0 no-repeat;
  }
  .navigationbar .icon{
    position: absolute;
    left: 0;
    top: 0;
    width: 45px;
    height: 45px;
    text-align: center;
  }
  .navigationbar .icon img{
    width: 17px;
    height: 30px;
    margin-top: 7px;
  }
  .navigationbar .title1{
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: #fff;
    text-align: center;
  }
</style>
