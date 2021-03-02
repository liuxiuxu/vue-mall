<template>
<div >
  <nav-bar>
    <div class="iconfont" slot='left' @click="iconClick">&#xe62b;</div>
    <div slot="center" class="nav-item">
      <div v-for="(item,index) in title" 
      :key='index'
      @click="itemClick(index)"
      :class="{active:currentIndex===index}"
      >{{item}}</div>
    </div>
  </nav-bar>
</div>
  
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name:'NavlItem',
    data() {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components: {
      NavBar,
    },
    methods: {
      itemClick(index) {
        this.currentIndex=index
      },
      iconClick(){
      this.$router.back();
    }
    },
    
  }
</script>

<style lang="less" scoped>
  .nav-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>