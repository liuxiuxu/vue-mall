<template>
  <div class="command">
    <div v-for="(item,index) in command" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'CommandView',
    props:{
      command:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style lang="less" scoped>
.command{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #ccc;

  div{
    flex: 1;
    height: 100%;
    text-align: center;
    font-size: 12px;
    img{
      width: 65px;
      height: 65px;
      margin-bottom: 5px;
    }
  }
} 
</style>