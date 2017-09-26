<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <show>
      <router-view></router-view>
    </show>
  </div>
</template>

<script>
import MyHeader from 'components/my-header/my-header'
import Tab from 'components/tab/tab'
import Show from '@/base/show'

export default {
  name: 'app',
  components: {
    MyHeader,
    Tab,
    Show
  }
}
</script>

<style lang="stylus">
#app
  height: 100%
</style>
