<template>
  <div id="details">
      <Header :canBack="true"/>
      <!-- <ul class="nav">
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
      </ul> -->
      <!-- <mt-navbar v-model="selected">
          <mt-tab-item id="1">选项一</mt-tab-item>
          <mt-tab-item id="2">选项二</mt-tab-item>
          <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :title="'内容 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" />
          </mt-tab-container-item>
    </mt-tab-container> -->
      <div class="scroll">
          <div id='detail'>
              <div class="img">
                  <img :src="`http://img.zaozuo.com/${chooseWhoImg}`" alt="">
              </div>
              <div class="checkBox">
                  <div class="optionName" v-for="(item, index) in optionNames">
                      <span v-text="item.name"></span>
                      <div class="optionValueBox">
                          <div class="optionVale" v-for="(value,inde) in optionValues" v-if="value.opNameId == item.opNameId"
                          @click="chooseOption(item.opNameId,value.opValueId)">
                            <div class="" v-if="value.img != ''">
                                <img :src="`http://img.zaozuo.com/${value.img}`" alt="">
                            </div>
                              <span v-else v-text="value.value"></span>
                          </div>
                      </div>
                  </div>
              </div>
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
//选项卡
// import { Navbar, TabItem } from 'mint-ui';
// import { TabContainer, TabContainerItem } from 'mint-ui';
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);

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
        checkedImgs:{},
        optionNames: [],
        optionValues:[],
        chooseWho:{},
        chooseWhoImg:'',
        des:{},
        com:{},
        show:[],
        img:[],
        arr:[],
        title:{}
      }
    },
    methods: {
        chooseOption: function(optName,optValue){
            let obj = {}
            obj[optName] = optValue;
            this.chooseWho = this.objToOne(this.chooseWho,obj);
            this.toStr();
        },
        objToOne: function(obj1, obj2){
          let res = {}
          for(let i in obj1){
            res[i] = obj1[i]
          }
          for (let p in obj2){
            res[p]=obj2[p];
          }
          return res;
      },
      toStr: function(){
        let strrr = ';'
        for(let key in this.chooseWho){
            let str = key + ':' + this.chooseWho[key] +";";
            strrr +=str;
        }

        this.chooseWhoImg = this.checkedImgs[strrr].skuImg
     }
    },
    mounted: function(){
       let id = this.$route.params.id
      let that = this;
      axios.get({
        //   Indicator:Indicator.open({
        //       text: '加载中...',
        //       spinnerType: 'fading-circle'
        //   }),
        type: 'get',
        url: `proxy/app/item/${id}/exp?boxId=1041`,
        callback: function(res){
          let des= res.data.data.designerInf;
          let com= res.data.data;
          let show =com.sizeCharts;
          let data = res.data.data.detail.item;
          that.checkedImgs = data.option2Sku
          that.optionNames = that.optionNames.concat(data.optionNames);
          that.optionValues = that.optionValues.concat(data.optionValues);
        //   let init = ';';
        //   that.optionNames.forEach((item) => {
        //         init += itemId + ':';
        //         let a = that.optionValues.filter((value) => {
        //                 return value.opNameId == item.opNameId
        //         })[0]
        //         console.log(a)
        //   })
          let img =com.designerExtraInfo;
          that.img = img;

          that.list=that.list.concat(data);
          that.show=that.show.concat(show);
          that.com = com;
          that.des = des;
          that.title = data;
        //   console.log(color);
        Indicator:Indicator.colse();
}
      })
    }
}
</script>
<style>
</style>
