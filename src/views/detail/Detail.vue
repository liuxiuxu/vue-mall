<template>
  <div id="detail">
    <nav-item class="navItem"></nav-item>
    <scroll 
    class="content"
    :probe-type="3" 
    :pull-up-load="true"
    ref="scroll">
      <detail-swiper :swiperImages='topImages'></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :goodsParam="goodsParam"></detail-param-info>
    </scroll>
    
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'

  import NavItem from './childComp/NavItem'
  import DetailSwiper from './childComp/DetailSwiper'
  import DetailBaseInfo from './childComp/DetailBaseInfo'
  import DetailShopInfo from './childComp/DetailShopInfo'
  import DetailGoodsInfo from './childComp/DetailGoodsInfo'
  import DetailParamInfo from './childComp/DetailParamInfo'
  import {detail, Goods, Shop,GoodsParam} from '@/network/detail'

  // 引入防抖函数
// import { debounce } from '@/common/utils.js'
  export default {
    name:'Detail',
    data() {
      return {
        iid: 0,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        goodsParam:{}
      }
    },
    components: {
      Scroll,
      NavItem,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo
    },
    created() {
      this.iid=this.$route.params.iid;
      detail(this.iid).then(res=>{
        console.log(res);
        let data=res.result;
        // 轮播图片
        this.topImages=data.itemInfo.topImages;
        // 商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // 商家信息
        this.shop=new Shop(data.shopInfo);
        // 商品详细信息
        this.detailInfo=data.detailInfo;
        // 商品参数
        this.goodsParam=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
        // 用防抖函数
        // let refresh=debounce(this.$refs.scroll.refresh,200);
        // refresh();
      }
    },
  }
</script>

<style lang="less" scoped>
  #detail{
    position: relative;
    z-index:30;
    height: 100vh;
    // 为了遮盖tabbar，所以把背景颜色设置成白色
    background-color: #fff;
  }
  .navItem{
    background-color: #fff;
    position: relative;
    z-index: 7;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>