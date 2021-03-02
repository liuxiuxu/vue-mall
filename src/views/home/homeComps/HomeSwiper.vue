<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
  export default {
    name:'HomeSwiper',
    props:{
      banner:Array
    },
    data() {
      return {
        imageLoad: false
      }
    },
    components:{
      SwiperItem,
      Swiper,
    },
    methods: {
      imgLoad() {
        if(!this.imageLoad){
          this.$emit('swiper-img-load');
          this.imageLoad=true;
        }
      }
    },
  }
</script>

<style lang="less" scoped>

</style>