<template>
  <div class="list-main">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-main">
        <div class="img">
          <img :src="`http://img.zaozuo.com/${item.headImg}`" alt="">
        </div>
        <div class="info">
          <div class="top">
            <span class="price">{{item.minPrice}}起</span>
            <span class="title" v-text="item.name"></span>
          </div>
          <div class="content" v-text="item.slogan"></div>
          <div class="freePost">免费配送</div>
        </div>
      </div>
      <div class="item-child"  v-if="item.hasDetail">
        kong
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
      list: []
    }
  },
  mounted: function(){
    let that = this;
    axios.all({
      type: 'get',
      url: 'api/paper/13',
      callback: function(res){
        let data = res.data.data.boxCovers;
        that.list = that.list.concat(data.slice(0,1).concat(data.slice(2)));
        console.log(that.list)
      }
    })
  }
}
</script>
<style>
</style>
