<template>
  <div id="details">
      <Header :canBack="true"/>
      <ul class="nav">
          <li class="active">
              <router-link to="detail_index" active-class="active">作品</router-link>
          </li>
          <li>
              <router-link to="/home" active-class="active">参数</router-link>
          </li>
          <li>
              <router-link to="/home" active-class="active">推荐</router-link><span>/12</span>
          </li>
          <li>
              <router-link to="/home" active-class="active">晒单</router-link><span>/53</span>
          </li>
          <li>
              <router-link to="/home" active-class="active">套餐</router-link>
          </li>
      </ul>
      <div class="scroll">
          <div class="showdetail">
              <div class="showImg">
                  <img :src="`http://img.zaozuo.com/${this.com.defaultBigImg}`" alt="">
              </div>
              <div class="showTitle">
                  <h1 v-html="title.title"></h1>
                  <p v-html="title.englishTitle"></p>
                  <div class="sAs">
                      <span>收藏</span>
                      <span>分享</span>
                  </div>
              </div>
          </div>
          <div class="chooseStyle">
              <dl class="styleColor" v-if="color">
                  <dt>颜色</dt>
                  <dd class="color">
                      <div
                       v-for="(item,index) in color"
                       :title="item.value" :data-option="item.opNameId+':'+item.opValueId"
                       :class="'col-'+item.orderLong"
                       @click="chooseColor()">
                          <img :src="`http://img.zaozuo.com/${item.img}`" alt="">
                      </div>
                  </dd>
              </dl>
              <dl class="styleStyle" v-if="style">
                  <dt>款型</dt>
                  <dd class="">
                      <div v-for="(style,index) in style" v-html="style.value" :title="style.value" :data-option="style.opNameId+':'+style.opValueId">  </div>
                  </dd>
              </dl>
              <dl class="styleOther" v-if="other">
                  <dt>其他</dt>
                  <dd class="">
                      <div v-for="(item,index) in other" v-html="item.value" :title="item.value" :data-option="item.opNameId+':'+item.opValueId"></div>
                  </dd>
              </dl>
          </div>
          <div class="showVideo">
              <img :src="`http://img.zaozuo.com/${img.designer_bgimgwap}`" alt="">
              <div class="showposi">
                  <div class="authorImg">
                      <img  :src="`http://img.zaozuo.com/${des.avatar}`" alt="">
                  </div>
                  <h1 v-html="des.dname"></h1>
                  <p v-html="des.nationality"></p>
                  <div class="messge" v-html="des.descriptionText"></div>
                  <a href="">了解更多></a>
              </div>
          </div>
          <Parameter />
          <div class="ImgShow">

          </div>
          <Canshu />
      </div>
  </div>
</template>
<script>

import Header from "../common/Header.vue";
import Parameter from "./DetailParameter.vue";
import Canshu from "./DetailCanshu.vue";
Vue.component("Header", Header);
Vue.component("Parameter", Parameter);
Vue.component("Canshu", Canshu);
import Vue from "vue"
import axios from "../../utils/axios.js"
import { Indicator } from 'mint-ui';
export default {
    name: "",
    data: function data() {
      return {
        list: [],
        color:[],
        style:[],
        other:[],
        des:{},
        com:{},
        show:[],
        img:[],
        arr:[],
        title:{}
      }
    },
    methods: {
        chooseColor:function(){
            var color = document.getElementsByClassName('color');
            var div = color.children;
            // color.children.className +=" active"
            console.log(this.color);
            for(var i = 0;i<this.$refs.asd.length;i++){}
        }

    },
    mounted: function(){
       let id = this.$route.params.id
      let that = this;
      // Indicator:Indicator.open({
      //     text: '加载中...',
      //     spinnerType: 'fading-circle'
      // });
      axios.get({
        type: 'get',
        url: `proxy/app/item/${id}/exp?boxId=1041`,
        // url: `proxy/app/item/300100/exp?boxId=1041`,
        callback: function(res){
          let data = res.data.data.detail.item;

          //获取颜色,款式,其他要求
          let boom = res.data.data.name2values;
          let arr = []
          let i = 0;
          for(let key in boom){
            arr[i] = boom[key]
            i++;
          }
          let color = arr[0];
          let style= arr[1];
          let other= arr[2];
          color == true ? color.concat(color) : false;
          style == true ? style.concat(style) : false;
          other == true ? other.concat(other) : false;
          that.color = color;
          that.style = style;
          that.other = other;
          //获取颜色款式其他  结束
          let des= res.data.data.designerInf;
          let com= res.data.data;
          let show =com.sizeCharts;

          let img =com.designerExtraInfo;
          that.img = img;

          that.list=that.list.concat(data);
          that.show=that.show.concat(show);
          that.com = com;
          that.des = des;
          that.title = data;
        //   console.log(color);
        // Indicator.colse();
        }
      })
    }
}
</script>
<style>
</style>
