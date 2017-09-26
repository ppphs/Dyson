<template>
  <ul class="tab">
    <router-link tag="li" class="tab-item" to="/checkApplicationForm">
      <span class="tab-link">审核申请单</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/propertyConfig">
      <span class="tab-link">审核道具配置</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/quotation">
      <span class="tab-link">审核报价单</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/affirm">
      <span class="tab-link">完成确认</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/newProperty">
      <span class="tab-link">新道具更换</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/PONumber">
      <span class="tab-link">链接PO Number</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/queryReceipts">
      <span class="tab-link">查询单据</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/baseData">
      <span class="tab-link">基础数据</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/statisticsForm">
      <span class="tab-link">统计报表</span>
    </router-link>
    <router-link tag="li" class="tab-item" to="/questionnaireSurvey">
      <span class="tab-link">问卷调查</span>
    </router-link>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'

.tab
  width: $width-nav
  height: calc(100vh - 71px)
  color: $color-text-white
  background-color: $color-nav-bg
  .tab-item
    position: relative
    text-align: center
    height: 45px
    line-height: 45px
    cursor: pointer
    nav-bg-color()
    border-bottom: 1px solid rgba(255, 255, 255, 0.1)
    &.router-link-active:before
      content: '  '
      position: absolute
      top: 50%
      right: 0
      width: 0
      height: 0
      border: 10px solid transparent
      border-right-color: $color-text-white
      transform: translateY(-50%)
</style>
