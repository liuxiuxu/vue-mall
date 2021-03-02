<template>
  <div>
    <nav-bar>
      <div slot='left'>左边</div>
      <div slot='center'>中间</div>
      <div slot='right'>右边</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../common/navbar/NavBar'
  export default {
    name:'MainNavBar',
    components:{
      NavBar
    }
  }
</script>

<style lang="less" scoped>

</style>