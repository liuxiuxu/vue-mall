<template>
  <div class="item" @click='btnItem'>
    <div class="item-icon" v-if="!isActive"><slot name='item-icon'></slot></div>
    <div class='item-icon-active' v-else><slot name='item-icon-active'></slot></div>
    <div class='item-text' :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      btnItem(){
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path===this.path;
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{};
      }
    }
  }
</script>

<style lang="less" scoped>
.item{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  .iconfont{
  font-size: 22px;
}
img{
  width: 30px;
  height: 30px;
}
}


</style>