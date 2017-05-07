<template>
  <div class="search">
    <Header :canBack="true"/>
    <div class="classify">
      <div class="item" v-for="(item, index) in tagList" :key="index">
        
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, index) in itemList" :key="index">
        <div class="img">
          <img :src="`http://img.zaozuo.com/${item.headImg}`" alt="">
        </div>
        <div class="info">
          <span class="name" v-text="item.name"></span>
          <span class="price">￥{{item.price}}</span>
          <span class="empty"></span>
          <span class="freePost">免费配送</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
Vue.component('Header',Header);
import axios from '../../utils/axios.js';
export default {
  name: "",
  data: function() {
    return {
      tagList: [],
      itemList: []
    }
  },
  mounted: function(){
    let that = this;
    axios.all({
      type: 'get',
      url: `/proxy/app/itemTags`,
      callback: function(res){
        that.tagList = that.tagList.concat(res.data.data.itemTags);
        console.log(this.tagList)
        axios.all({
          type: 'get',
          url: `/proxy/app/search`,
          data: {
            page: 1
          },
          callback: function(res){
            that.itemList = that.itemList.concat(res.data.data.items)
            console.log(this.itemList)
          }
        })
      }
    })
  }
}
</script>
<style>
</style>
