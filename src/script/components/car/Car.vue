<template>
  <div id="">
    <div class="itemsBox">
      <div class="item" v-for="(item, index) in items">
        <img :src="`http://img.zaozuo.com/${item.skuImg}`" alt="">
        <span class="price">{{item.price}}</span>
        <span @click="edit">编辑</span>
        <span @click="deleteItem">删除</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../utils/axios.js';
export default {
  name: "",
  data: function data() {
    return {
      items: this.$store.state.items,
      buyNumObj: this.$store.state.buyNumObj
    }
  },
  methods: {
    edit: function(){

    },
    deleteItem: function(){

    }
  },
  mounted: function(){
    //初始化store中数据
    let itemsObj = JSON.parse(localStorage.getItem("cartItems"));
    let buyNumObjReset = {};
    let itemsReset = [];
    for(let key in itemsObj){
      let opt = itemsObj[key];
      buyNumObjReset[key] = 1;
      let that = this;
      axios.get({
       type: 'get',
       url: `proxy/app/item/${key}`,
       callback: function(res){
        //  console.log(res.data.data.detail.item.option2Sku[opt])
         itemsReset = itemsReset.concat(res.data.data.detail.item.option2Sku[opt])
         that.$store.commit('initItems', {
           items: itemsReset
         })
         that.items = that.$store.state.items
       }
      })
    }
    this.$store.commit('initBuyNum',{
      buyNumObj: buyNumObjReset
    })
    this.buyNumObj = this.$store.state.buyNumObj
  }
}
</script>
<style>
</style>
