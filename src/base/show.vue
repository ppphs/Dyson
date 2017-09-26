<template>
  <div class="show">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'
.show
  position: absolute
  top: $absolute-top-show
  bottom: 0
  left: $width-nav
  right: 0
  background-color: #fff
  padding: 45px 30px 0 30px
  border-radius: 10px
</style>
