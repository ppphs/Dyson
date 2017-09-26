<template>
  <div class="newProperty">
    <div class="header">
      <h1 class="title">新道具更换申请</h1>
      <div class="step"><span class="circle">1</span>选择道具</div>
      <div class="step"><span class="circle">2</span>选择门店</div>
      <div class="step"><span class="circle">3</span>提交申请</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'

.newProperty
  color: #000
  .header
    display: flex
    position: relative
    justify-content: center
    height: 52px
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    .title
      position: absolute
      bottom: 40%
      left: 0
      font-size: $font-size-large
      font-weight: bold
    .step
      flex: 0 0 auto
      font-size: $font-size-medium
      .circle
        display: inline-block
        border-radius: 50% 
        background-color: #000
        margin-right: 10px  
        font-size: $font-size-medium-x
        color: #fff
        height: 32px
        width: 32px
        line-height: 32px
        text-align: center
        margin-left: 70px
        background: url('~common/image/steps_background_currentNode.png') no-repeat
</style>
