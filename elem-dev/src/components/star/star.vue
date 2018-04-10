<template>
    <div class="star" :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>

<script>
    export default {
      name: "star",
      props:{
        size: {
          type: Number
        },
        score: {
          type: Number
        }
      },
      computed: {
        starType() {
          return 'star-'+this.size;
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mix.styl"
  .star
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20x
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
    &.star-24

</style>
