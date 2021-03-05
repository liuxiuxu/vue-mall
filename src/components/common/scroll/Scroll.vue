<template>
<div ref="wrapper">
    <div ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted () {
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      if(this.probeType===2||this.probeType===3){
        this.scroll.on('scroll',position=>{
        this.$emit('scroll',position)
      })
      }
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup')
      })
      }
      
  },
  methods:{
    scrollTo(x,y,time=500){
      // 判断this.scroll有无值，没有久不往后执行
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    getScrollY(){
      this.scroll && this.scroll.scrollY;
    }
  }
  }
</script>

<style lang="less" scoped>
</style>