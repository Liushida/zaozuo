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
      <div class="item-child"  v-if="hide">
        <div class="detail" v-if="item.children.length <= 3 && item.hasDetail">
          <div class="detial-item" v-for="(value, index) in item.children" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </div>
        </div>
        <div class="detail" v-if="item.children.length > 3 && item.hasDetail">
          <div class="detial-item" v-for="(value, index) in item.children.slice(0, 5)" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </div>
          <div class="detial-item showall" @click="showAll">
            <div>
              <span>查看更多</span>
              <span>more</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-child"  v-else>
        <div class="detail" v-if="item.children.length <= 3 && item.hasDetail">
          <div class="detial-item" v-for="(value, index) in item.children" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </div>
        </div>
        <div class="detail" v-if="item.children.length > 3 && item.hasDetail">
          <div class="detial-item" v-for="(value, index) in item.children" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </div>
        </div>
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
      list: [],
      hide: true
    }
  },
  methods: {
    showAll: function() {
      return this.hide = false;
    }
  },
  mounted: function(){
    let type = this.$route.params.type || '13';
    let that = this;
    axios.all({
      type: 'get',
      url: `api/paper/${type}`,
      callback: function(res){
        let data = res.data.data.boxCovers;
        that.list = that.list.concat(data.slice(0,1).concat(data.slice(2)));
      }
    })
  }
}
</script>
<style>
</style>
