<template>
  <div class="myHeader">
    <h1 class="brand"><span class="big">dyson</span>Retail</h1>
    <p class="information"><span class="tel">热线电话：400-6028-508</span><span class="working-time">9:30am-18:00pm（法定节假日除外）</span></p>
    <div class="sign-in-up"><span class="sign-in">登录</span><span class="sign-up">注册</span></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'

.myHeader
  display: flex
  background-color: $color-text-black
  color: $color-text-white
  padding: 19px 10px 30px
  .brand
    flex: 1
    text-align: left
    font-size: $font-size-medium
    .big
      margin-right: 10px
      font-size: $font-size-large-x
  .information
    flex: 1 0 auto
    text-align: left
    font-size: $font-size-medium-x
    color: rgba(255, 255, 255, 0.7)
    .working-time
      margin-left: 30px
  .sign-in-up
    flex: 1
    text-align: right
    color: rgba(255, 255, 255, 0.5)
    .sign-in:hover, .sign-up:hover
      display: inline-block
      color: #fff
      cursor: pointer
    .sign-in
      padding-right: 10px
      border-right: 1px solid #fff
    .sign-up
      padding-left: 10px
</style>
