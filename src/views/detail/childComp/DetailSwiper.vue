<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in swiperImages" :key="index">
          <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper,SwiperItem } from '@/components/common/swiper/index'
  export default {
    name:'DetailSwiper',
    props:{
      swiperImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
  }
</script>

<style lang="less" scoped>
  .detail-swiper{
    height: 300px;
  }

</style>