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
                  <h1>造作大先生沙发</h1>
                  <p>
                      Mr.Big Sofa
                  </p>
                  <div class="sAs">
                      <span>收藏</span>
                      <span>分享</span>
                  </div>
              </div>
          </div>
          <div class="chooseStyle">
              <dl class="styleColor">
                  <dt>颜色</dt>
                  <dd class="color">
                      <div class="" v-for="(item,index) in color" :title="item.value" :data-option="item.opNameId+':'+item.opValueId" @click="chooseColor()">
                          <img :src="`http://img.zaozuo.com/${item.img}`" alt="">
                      </div>
                  </dd>
              </dl>
              <dl class="styleStyle">
                  <dt>款型</dt>
                  <dd class="">
                      <div v-for="(style,index) in style" v-html="style.value" :title="style.value" :data-option="style.opNameId+':'+style.opValueId">  </div>
                  </dd>
              </dl>
              <dl class="styleOther">
                  <dt>沙发腿</dt>
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
        img:[]
      }
    },
    methods: {
        chooseColor:function(){
            var color = document.getElementsByClassName('color');
            var div = color.children;
            // color.children.className +=" active"
            console.log(div);
        }

    },
    mounted: function(){
      let that = this;
      // Indicator:Indicator.open({
      //     text: '加载中...',
      //     spinnerType: 'fading-circle'
      // });
      axios.get({
        type: 'get',
        url: `proxy/app/item/300100/exp?boxId=1041`,
        callback: function(res){
          let data = res.data.data.detail.item;
          let color = res.data.data.name2values[10331];
          let style= res.data.data.name2values[10332];
          let other= res.data.data.name2values[10333];
          let des= res.data.data.designerInf;
          let com= res.data.data;
          let show =com.sizeCharts;

          let img =com.designerExtraInfo;
          that.img = img;

          that.list=that.list.concat(data);
          that.color=that.color.concat(color);
          that.style=that.style.concat(style);
          that.other=that.other.concat(other);
          that.show=that.show.concat(show);
          that.com = com;
          that.des = des;
          Indicator.close();
        //   console.log(show);
        }
      })
    }
}
</script>
<style>
</style>
