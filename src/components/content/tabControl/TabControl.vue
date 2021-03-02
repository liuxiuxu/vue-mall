<template>
  <div class="control">
    <div
     v-for="(item,index) in titles" :key="index"
      :class="{active:index===currentIndex}"
      @click="controlClick(index)"
    >{{item}}</div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      },
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      controlClick(index){
        this.currentIndex=index;
        this.$emit('goods-item',index);
      }
    }
  }
</script>

<style lang="less" scoped>
  .control{
    position: relative;
    z-index: 10;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    >div{
      padding: 10px 5px;
    }
    >div.active{
      color: pink;
      border-bottom: 3px solid pink;
    }
  }
</style>