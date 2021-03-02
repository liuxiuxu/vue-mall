<template>
  <div class="goodslist">
    <goods-list-item 
    v-for="(item,index) in goodsItem" 
    :key='index' :item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      goodsItem:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.goodslist{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>