<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="(detailImage,indey) in detailInfo.detailImage" :key="indey">
      <div class="info-key">{{detailImage.key}}</div>
      <div class="info-list">
      <img v-for="(item,index) in detailImage.list"
      :key="index" :src="item" alt="" @load='imgLoad'>
    </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
        default(){
          return {}
        }
      },
    },
    data() {
      return {
        counter: 0,
        imagesLength:0
      }
    },
    methods: {
      imgLoad() {
        // 所有图片都加载完成才回调
        // 也可以用utils.js里的防抖函数
        if(++this.counter===this.imagesLength){
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imagesLength=this.detailInfo.detailImage[0].list.length;
      }
    },
  }
</script>

<style lang="less" scoped>
 .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start {
    float: left;
  }
  .info-desc .end {
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>