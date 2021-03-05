<template>
  <div id="detail">
    <nav-item class="navItem" @itemClick="itemClick" ref="nav"></nav-item>
    <scroll class="content" :probe-type="3" ref="scroll" @scroll="contentScroll">
      <detail-swiper :swiper-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :goods-param="goodsParam" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods-item="recommendInfo" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top v-show="isBackShow" @click.native='backTopClick'/>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import NavItem from "./childComp/NavItem";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailBaseInfo from "./childComp/DetailBaseInfo";
import DetailShopInfo from "./childComp/DetailShopInfo";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
import DetailParamInfo from "./childComp/DetailParamInfo";
import DetailCommentInfo from "./childComp/DetailCommentInfo";
import DetailBottomBar from './childComp/DetailBottomBar';
import { backTop } from '@/common/mixin'
import {
  detail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail";
import { debounce } from "@/common/utils.js";


// 引入防抖函数
// import { debounce } from '@/common/utils.js'
export default {
  name: "Detail",
  data() {
    return {
      iid: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendInfo: [],
      //保存各个标签的offsetTop
      themePosition: [],
      // 接收防抖函数的返回值
      getPosition: null,
      //记录当前点击的导航下标
      currentIndex: 0,
    };
  },
  // 采用混入，把backTop抽离
  mixins:[backTop],
  components: {
    Scroll,
    GoodsList,
    NavItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
  },
  created() {
    this.iid = this.$route.params.iid;
    detail(this.iid).then((res) => {
      let data = res.result;
      // 轮播图片
      this.topImages = data.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 商家信息
      this.shop = new Shop(data.shopInfo);
      // 商品详细信息
      this.detailInfo = data.detailInfo;
      // 商品参数
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 用防抖函数获取各个部分的offsetTop值
      // 不能在mounted里请求数据，因为对各个组件传数据是异步的，不一定传过去了
      // 在图片加载完成的函数里调用
      this.getPosition = debounce(() => {
        this.themePosition.push(0);
        this.themePosition.push(this.$refs.param.$el.offsetTop);
        this.themePosition.push(this.$refs.comment.$el.offsetTop);
        this.themePosition.push(this.$refs.recommend.$el.offsetTop);
      }, 200);
    });
    // 获取推荐数据
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },
  mounted() {
    // 详情图片加载完成进行一次刷新
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("detailImgLoad", () => {
      refresh();
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getPosition();
      // 用防抖函数
      // let refresh=debounce(this.$refs.scroll.refresh,200);
      // refresh();
    },
    contentScroll(position) {
      this.isBackShow=-position.y>1000;
      let positionY=-position.y;
      let length=this.themePosition.length;
      for(let i=0;i<length;i++){
        if(this,this.currentIndex!==i && (i<length-1 && 
        positionY>this.themePosition[i] && positionY<this.themePosition[i+1])
        || (i===length-1 && positionY>this.themePosition[i])){
          this.currentIndex=i;
          this.$refs.nav.currentIndex=this.currentIndex;
        }
      }
    },
    // 点击导航栏跳转到相应的位置
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themePosition[index], 300);
    },
    addCart(){
      const product={};
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;
      this.$store.dispatch('addCart',product)
    }
  },
};
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 30;
  height: 100vh;
  // 为了遮盖tabbar，所以把背景颜色设置成白色
  background-color: #fff;
}
.navItem {
  background-color: #fff;
  position: relative;
  z-index: 7;
}
.content {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>