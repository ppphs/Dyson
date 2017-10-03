<template>
  <div class="my-input">
    <span class="left">
      <input type="text" placeholder="被替换道具的名称" v-model.trim="text" @blur="addNewInput">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wxbsousuotuiguang"></use>
      </svg>
    </span>
    <span v-if="isRemove" class="remove">
      <span>=</span>
      <select name="num" id="number">
        <option value="0">0</option>
      </select>
    </span>
    <div class="minus" v-if="_flage" @click="deleteInput"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      _flage: false
    }
  },
  props: {
    flage: {
      type: Boolean,
      require: true
    },
    isRemove: {
      type: Boolean,
      require: true
    },
    index: {
      type: Number
    },
    isChooseLamp: {
      type: Boolean
    }
  },
  created () {
    this._flage = this.hasMinus()
  },
  methods: {
    addNewInput () {
      if (this.isRemove && this.text !== '') {
        this.isChooseLamp ? this.$store.commit('lampAddRemoveList') : this.$store.commit('addRemoveList')
      } else if (this.text !== '') {
        this.isChooseLamp ? this.$store.commit('lampAddAddList') : this.$store.commit('addAddList')
      } else {
        return
      }
    },
    hasMinus () {
      if (this.isRemove) {
        return this.isChooseLamp ? this.$store.state.lampRemoveList.length > 1 : this.$store.state.removeList.length > 1
      } else {
        return this.isChooseLamp ? this.$store.state.lampAddList.length > 1 : this.$store.state.addList.length > 1
      }
    },
    deleteInput () {
      if (this.isRemove) {
        this.isChooseLamp ? this.$store.commit('lampDeleteRemoveList', this.index) : this.$store.commit('deleteRemoveList', this.index)
      } else {
        this.isChooseLamp ? this.$store.commit('lampDeleteAddList', this.index) : this.$store.commit('deleteAddList', this.index)
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable.styl'

.my-input
  display: flex
  font-size: 0
  margin-bottom: 4px
  .left
    flex: 0 0 50%
    display: flex
    width: 50%
    input
      flex: 1 0 auto
      font-size: $font-size-medium
      height: 30px
      border: 1px solid rgba(0, 0, 0, 0.2)
    .icon
      flex: 0 0 auto
      font-size: 29px
      margin: 0 25px 0 10px
  .remove
    flex: 0 0 auto
    line-height: 32px
    span
      font-size: $font-size-medium
      margin-right: 15px
  .minus
    flex: 0 0 20px
    position: relative
    width: 20px
    height: 20px
    border-radius: 5px
    border: 2px solid rgb(78, 78, 78)
    margin: 3px 20px 0px
    &:after
      content: '  '
      position: absolute
      top: 50%
      left: 50%
      height: 2px
      width: 80%
      transform: translateX(-50%)
      background-color: rgb(78, 78, 78)
      border-radius: 1px
</style>
