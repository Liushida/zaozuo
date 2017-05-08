<template>
  <div class="list-main">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :autoFill="false" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="item" v-for="(item, index) in list" :key="index">
      <router-link class="item-main" :to="`/detail/${item.goTo.refId}`" tag="div">
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
      </router-link>
      <div class="item-child"  v-if="hide">
        <div class="detail" v-if="item.children.length <= 3 && item.hasDetail">
          <router-link :to="`/detail/${item.goTo.refId}`" tag="div" class="detial-item" v-for="(value, index) in item.children" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </router-link>
        </div>
        <div class="detail" v-if="item.children.length > 3 && item.hasDetail">
          <router-link :to="`/detail/${item.goTo.refId}`" tag="div" class="detial-item" v-for="(value, index) in item.children.slice(0, 5)" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </router-link>
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
          <router-link :to="`/detail/${item.goTo.refId}`" tag="div" class="detial-item" v-for="(value, index) in item.children" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </router-link>
        </div>
        <div class="detail" v-if="item.children.length > 3 && item.hasDetail">
          <router-link :to="`/detail/${item.goTo.refId}`" tag="div" class="detial-item" v-for="(value, index) in item.children" :key="index">
            <img :src="`http://img.zaozuo.com/${value.headImg}`" alt="">
          </router-link>
        </div>
      </div>
    </div>
    </mt-loadmore>
  </div>
</template>
<script>
import Vue from 'vue';
import axios from '../../utils/axios.js';
import { Loadmore } from 'mint-ui';
import { Toast } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore);
export default {
  name: "",
  data: function data() {
    return {
      list: [],
      hide: true,
      allLoaded: false,
      page: 1
    }
  },
  methods: {
    showAll: function() {
      return this.hide = false;
    },
    loadTop: function() {
      Toast({
        message: '已经是最新啦',
        duration: 1000
      });
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom: function(){
      let type = this.$route.params.type || '13';
      let that = this;
      this.page++;
      axios.get({
        url: `api/paper/${type}`,
        data:{
          page: that.page
        },
        callback: function(res){
          let data = res.data.data.boxCovers;
          if(data.length >= 8){
            that.list = that.list.concat(data);
            that.$refs.loadmore.onBottomLoaded();
          }else{
            Toast({
              message: '没有更多啦',
              duration: 1000
            });
            this.allLoaded = true;
            this.$refs.loadmore.onBottomLoaded();
          }
        }
      })
    }
  },
  mounted: function(){
    let type = this.$route.params.type || '13';
    let that = this;
    axios.get({
      url: `api/paper/${type}`,
      data:{
        page: that.page
      },
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
