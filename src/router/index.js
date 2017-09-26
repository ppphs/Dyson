import Vue from 'vue'
import Router from 'vue-router'
import NewProperty from 'components/newProperty/newProperty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/newProperty'
    },
    {
      path: '/newProperty',
      component: NewProperty
    }
  ]
})
