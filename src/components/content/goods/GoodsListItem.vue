<template>
  <div class="goods-item" @click='goodsClick'>
    <!-- 图片添加监听加载完成事件 -->
    <img :src="item.show.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p class="title">{{item.title}}</p>
      <div class="text">
        <span class="price">{{item.price}}</span>
        <p><span class="iconfont">&#xe629;</span><span class="cfav">{{item.cfav}}</span></p>
      </div>
        
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      item:Object
    },
    methods:{
      // 用事件总线监听或者用vuex,到Home.vue里接收
      imgLoad(){
        this.$bus.$emit('itemImgLoad')
      },
      goodsClick(){
        this.$router.push('/detail/'+this.item.iid)
      }
    }
  }
</script>

<style lang="less" scoped>
.goods-item{
  padding-bottom: 40px;
  width: 49%;
  position: relative;
  img{
    width: 100%;
    border-radius: 5px;
    margin-bottom: 8px;
  }
}
.goods-info{
  position: absolute;
  left:0;
  right: 0;
  bottom: 8px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.text{
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods-info>p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  margin-bottom: 3px;
}
.price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .cfav{
    position: relative;
  }
</style>