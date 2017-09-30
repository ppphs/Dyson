import Vue from 'vue'

const mutations = {
  addRemoveList (state) {
    state.removeList.push('my-input')
    state.removeListTrigger.push(true)
  },
  addAddList (state) {
    state.addList.push('my-input')
    state.addListTrigger.push(true)
  },
  deleteRemoveList (state, index) {
    Vue.set(state.removeListTrigger, index, false) // vue数组的元素变更需要用Vue.set才会去更新视图
  },
  deleteAddList (state, index) {
    Vue.set(state.addListTrigger, index, false)
  }
}

export default mutations
