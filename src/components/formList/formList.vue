<template>
  <div class="formList">
    <div class="lead-excel">
      <p class="text">如已导出过门店清单，无需再筛选，可在此直接导入修改的Excel结果</p>
      <div class="lead-btn">直接导入</div>
    </div>
    <div class="form-container">
      <h1 class="big-title">通过设置道具条件筛选门店</h1>
      <form class="form">
        <div class="text-container">
          <h2 class="title">计划移除的{{ text }}：</h2>
          <h2 class="num">{{ text }}数量：</h2>
        </div>
        <component v-if="removeListTrigger[index]" :key="index" v-for="(item, index) in removeList" :is="item" :isRemove="true" :index="index"></component>
        <h2 class="add-title">计划新增的{{ text }}：</h2>
        <component v-if="addListTrigger[index]" :key="index" v-for="(item, index) in addList" :is="item" :isRemove="false" :index="index"></component>
      </form>
    </div>
    <div class="next-step">
      <div class="next-btn">下一步</div>
    </div>
  </div>
</template>

<script>
import MyInput from 'components/my-input/my-input'

export default {
  created () {
    console.log(this.removeListTrigger)
  },
  data () {
    return {}
  },
  props: {
    text: {
      type: String,
      require: true
    }
  },
  components: {
    MyInput
  },
  computed: {
    removeList () {
      let removeList = this.$store.state.removeList
      if (removeList.length > 1) {
        this.removeFlage = true
      } else {
        this.removeFlage = false
      }
      return removeList
    },
    addList () {
      let addList = this.$store.state.addList
      if (addList.length > 1) {
        this.addFlage = true
      } else {
        this.addFlage = false
      }
      return addList
    },
    removeListTrigger () {
      return this.$store.state.removeListTrigger
    },
    addListTrigger () {
      return this.$store.state.addListTrigger
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'

.formList
  .lead-excel
    display: flex
    width: 100%
    background: rgb(247, 247, 247)
    border: 1px solid rgba(155, 155, 155, 0.1)
    padding: 10px 15px
    font-size: $font-size-medium
    box-sizing: border-box
    line-height: 33px
    justify-content: space-between
    .text
      flex: 1 0 auto
    .lead-btn
      flex: 0 0 90px
      height: 33px
      width: 90px
      text-align: center
      color: #fff
      background-color: rgba(51, 51, 51, 0.9)
      border-radius: 5px
      cursor: pointer
      &:active, &:hover
        background-color: rgb(51, 51, 51)
  .form-container
    padding: 65px 35px 15px
    .big-title
      color: rgba(0, 0, 0, 0.5)
      border-bottom: 1px solid rgba(0, 0, 0, 0.4)
    .form
      .text-container
        display: flex
        padding: 10px 0
        .title
          flex: 0 0 50%
        .num
          flex: 0 0 50%
      .add-title
        padding: 10px 0
  .next-step
    display: flex
    justify-content: flex-end
    background-color: #f7f7f7
    border: 1px solid rgba(155, 155, 155, 0.1)
    padding: 10px 15px
    .next-btn
      flex: 0 0 84px
      width: 84px
      height: 33px
      justify-content: right
      color: #fff
      background-color: rgba(51, 51, 51, 0.9)
      border-radius: 5px
      line-height: 33px
      text-align: center
      font-size: $font-size-medium
      cursor: pointer
      &:active, &:hover
        background-color: rgb(51, 51, 51)
</style>
