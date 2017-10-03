import commonMutations from 'common/js/common-mutations.js'

const mutations = {
  addRemoveList (state) {
    commonMutations.addRemoveList(state.removeList, state.removeListTrigger)
  },
  addAddList (state) {
    commonMutations.addAddList(state.addList, state.addListTrigger)
  },
  deleteRemoveList (state, index) {
    commonMutations.deleteRemoveList(index, state.removeListTrigger)
  },
  deleteAddList (state, index) {
    commonMutations.deleteRemoveList(index, state.addListTrigger)
  },
  lampAddRemoveList (state) {
    commonMutations.addRemoveList(state.lampRemoveList, state.lampRemoveListTrigger)
  },
  lampAddAddList (state) {
    commonMutations.addAddList(state.lampAddList, state.lampAddListTrigger)
  },
  lampDeleteRemoveList (state, index) {
    commonMutations.deleteRemoveList(index, state.lampRemoveListTrigger)
  },
  lampDeleteAddList (state, index) {
    commonMutations.deleteAddList(index, state.lampAddListTrigger)
  }
}

export default mutations
