import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //mutation里实现的方法功能应该尽量单一，方便后期追踪
    addToCart(state,payload){
      state.cartList.push(payload)
    },
    addCount(state,payload){
      payload.count++;
    }
  },
  actions: {
    addCart(context,payload){
      // 查找该列表里是否存在该商品
      let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid);
      if(oldProduct){
        context.commit('addCount',oldProduct);
      }else{
        payload.count=1;
        context.commit('addToCart',payload)
      }
    }
  },
  modules: {
  }
})
