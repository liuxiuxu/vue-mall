<template>
<div id='home'>
   <nav-bar class="backColor">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 不能通过设置fixed来定位，因为better-scroll是改变translate的值 -->
    <tab-control 
      :titles="['流行','新款','精选']"
      class="tab-control"
      @goods-item="goodsItem"
      ref='tabControl1'
      :class="{fixed:tabFixed}"
      v-show="tabFixed"
      ></tab-control>
    <!-- :probe-type如果前面不写冒号，则传过去的是字符 -->
    <scroll 
    class="content" ref="scroll" 
    :probe-type="3"
    @scroll='contentScroll'
    :pull-up-load='true'
    @pullingup="loadMore"> 
      <home-swiper :banner='banners' @swiper-img-load="swiperImgLoad"></home-swiper>
      <command-view :command="recommend"></command-view>
      <feature></feature>
      <tab-control 
      :titles="['流行','新款','精选']"
      class="tab-control"
      @goods-item="goodsItem"
      ref='tabControl2'
      :class="{fixed:tabFixed}"
      ></tab-control>
      <goods-list :goodsItem="showData"></goods-list>
     
    </scroll>
    <!-- 监听组件点击事件加修饰符,.native -->
     <back-top @click.native="backTopClick" v-show="isBackShow"></back-top>
    
</div>
   
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'

import HomeSwiper from './homeComps/HomeSwiper'
import CommandView from './homeComps/CommandView'
import Feature from './homeComps/Feature'
import { getHomeMultidata,getHomeGoods } from '@/network/home'
import { debounce } from '@/common/utils.js'
import { backTop } from '@/common/mixin'
  export default {
    name:'Home',
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,

      HomeSwiper,
      CommandView,
      Feature
    },
    data(){
      return {
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        tabOffsetTop:0,
        tabFixed:false, //判断前面的导航栏是否显示
        saveY:0
      }
    },
    mixins:[backTop],
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted(){
       // 接收从goodsListItem.vue里发来的信号,事件总线需要在main.js里注册
      //  为了防止对服务器请求过多，所以添加一个防抖动函数
      const refresh=debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('homeImgLoad',()=>{
        refresh();
      })
    },
    computed:{
      showData(){
        return this.goods[this.currentType].list
      }
    },
    //记录当前的位置，使回来时还在当前位置
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      //如果不刷新，可能会出现不能滚动
      this.$refs.scroll.refresh();
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY();
    },
    methods:{
      // 方法
      goodsItem(index){
        switch(index){
          case(0):
            this.currentType='pop';
            break;
          case(1):
            this.currentType='new';
            break;
          case(2):
            this.currentType='sell';
            break;
        }
        this.$refs.tabControl2.currentIndex=index;
        this.$refs.tabControl1.currentIndex=index;
      },
      contentScroll(position){
        this.isBackShow=(-position.y)>1000;
        this.tabFixed=(-position.y)>this.tabOffsetTop;
      },
      loadMore(){
        this.getHomeGoods(this.currentType);
      },
      // 需要监听轮播图是否加载完成，这样获取的tab的offetsetTop的值才正确
      swiperImgLoad(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
      },
      // 网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
      },
      getHomeGoods(type){
        let page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
          // 上拉加载完成
          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.backColor{
  background-color: var(--color-tint);
  color: #fff;
}
#home{
  position: relative;
  height: 100vh;
}
.content{
  position: absolute;
  top:44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>