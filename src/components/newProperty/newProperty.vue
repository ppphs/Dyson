<template>
  <div class="newProperty">
    <div class="header">
      <h1 class="title">新道具更换申请</h1>
      <div :class="{'step': true, 'stepHighlight': stepHighlight[0] === true}"><span class="circle">1</span>选择道具</div>
      <div :class="{'step': true, 'stepHighlight': stepHighlight[1] === true}"><span class="circle">2</span>选择门店</div>
      <div :class="{'step': true, 'stepHighlight': stepHighlight[2] === true}"><span class="circle">3</span>提交申请</div>
    </div>
    <div class="link-container clearfix">
      <router-link class="link" tag="span" to="/newProperty/chooseProperty"><span>选择道具</span></router-link><!--
   --><router-link class="link" tag="span" to="/newProperty/chooseLampSlice"><span>选择灯片</span></router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stepHighlight: [true]
    }
  }
}
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
    margin-bottom: 15px
    .title
      position: absolute
      bottom: 40%
      left: 0
      font-size: $font-size-large
      font-weight: bold
    .step
      flex: 0 0 auto
      font-size: $font-size-medium
      opacity: 0.3
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
      &.stepHighlight
        opacity: 1
  .link-container
    position: relative
    margin-bottom: 13px
    &:after
      content: "  "
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 1px
      width: 100%
      background-color: #000
    .link
      position: relative
      display: inline-block
      margin-right: 10px
      width: 100px
      height: 30px
      line-height: 30px
      text-align: center
      font-size: $font-size-large
      background: #fff
      color: #000
      border: 1px solid rgb(186, 186, 186)
      z-index: 1
      cursor: pointer
      &.router-link-active
        background: rgb(71, 71, 78)
        color: #fff
        border: 1px solid #000
</style>
