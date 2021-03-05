<template>
  <div>
    <goods-list :goodsItem="recommendInfo">

    </goods-list>

  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList'
  export default {
    name:'DetailRecommendInfo',
    props: {
      recommendInfo: {
        type: Array,
        default(){
          return []
        }
      },
    },
    components: {
      GoodsList,
    },
  }
</script>

<style lang="less" scoped>

</style>