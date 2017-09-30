import Vue from 'vue'
import Router from 'vue-router'
import NewProperty from 'components/newProperty/newProperty'
import ChooseLampSlice from 'components/chooseLampSlice/chooseLampSlice'
import ChooseProperty from 'components/chooseProperty/chooseProperty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/newProperty'
    },
    {
      path: '/newProperty',
      component: NewProperty,
      children: [
        {
          path: 'chooseProperty',
          component: ChooseProperty
        },
        {
          path: 'chooseLampSlice',
          component: ChooseLampSlice
        },
        {
          path: '',
          redirect: 'chooseProperty'
        }
      ]
    }
  ]
})
