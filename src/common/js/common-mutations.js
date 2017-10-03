import Vue from 'vue'

export default {
  addRemoveList (list, listTrigger) {
    list.push('my-input')
    listTrigger.push(true)
  },
  addAddList (list, listTrigger) {
    list.push('my-input')
    listTrigger.push(true)
  },
  deleteRemoveList (index, listTrigger) {
    Vue.set(listTrigger, index, false) // vue数组的元素变更需要用Vue.set才会去更新视图
  },
  deleteAddList (index, listTrigger) {
    Vue.set(listTrigger, index, false)
  }
}
