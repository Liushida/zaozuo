<template>
  <div class="search">
    <Header :canBack="true"/>
    <div class="listHeader">
      <div class="classifyBox">
        <div class="classifyItem" v-for="(item, index) in tagList" :key="index" @click="showWho(item.name)">
          <span>{{item.name}}</span>
          <div class="img">
            <img src="/static/images/biz_order_orderconfirm_btn_down.png" alt="">
          </div>
        </div>
      </div>
      <div class="tagsBox" v-if="show">
        <div class="box" v-if="classLeft">
          <div class="tagItem" v-for="(item, index) in tagList[0].children" :key="index" @click="search(tagList[0].name,item.tagId)">
            <img :src="`http://img.zaozuo.com/${item.iconNormal}`" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
        <div class="box" v-if="classRight">
          <div class="tagItem" v-for="(item, index) in tagList[1].children" :key="index" @click="search(tagList[1].name,item.tagId)">
            <img :src="`http://img.zaozuo.com/${item.iconNormal}`" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
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
      itemList: [],
      classLeft: false,
      classRight: false,
      show: false,
      tagIds: {}
    }
  },
  methods:{
    showWho: function(name){
      if(name == '品类'){
        this.classLeft = true;
        this.classRight = false;
        this.show = true;
      }else if(name == '场景'){
        this.classLeft = false;
        this.classRight = true;
        this.show = true;
      }
    },
    search: function(name,tagId){
      // let obj = {}
      // obj[name] = tagId;
      // this.tagIds = Object.assign(this.tagIds, obj)
      // console.log(this.tagIds)
      this.tagIds[name] =  tagId;
      console.log(this.tagIds)
    }
  },
  watch:{
    tagIds: {
      handler: function () {
        console.log(2)
      },
      deep: true
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
            that.itemList = that.itemList.concat(res.data.data.items);
          }
        })
      }
    })
  }
}
</script>
<style>
</style>
