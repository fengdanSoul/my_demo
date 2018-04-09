<template>
    <div class="header">
      <div class="header-wraaper">
        <div class="item icon">
          <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
        </div>
        <div class="des"></div>
        <div class="item tip">
          <div class="title">
            <span class="icon"></span>
            <h1>粥品香坊（大运村）</h1>
          </div>
          <div class="delever">蜂鸟专达/8分钟送达</div>
          <div>
            <span class="icon"></span>
            <p>在线支付满28减5，满50减10</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width: 100%
    position absolute
    left 0
    top 0
    .header-wraapeer
      width 100%
      display flex
      .icon
        flex 0 0 200px
      .item
        flex 1





</style>
