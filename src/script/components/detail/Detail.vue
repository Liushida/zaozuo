<template>
  <div id="details">
      <Header :canBack="true"/>
      <div class="scroll">
          <div id='detail'>
              <div class="img">
                        <img v-if="chooseWhoImg!=''" :src="`http://img.zaozuo.com/${chooseWhoImg}`" alt="">
                        <img v-else :src="`http://img.zaozuo.com/${com.defaultBigImg}`" alt="">
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
          <Talk />
      </div>
  </div>
</template>
<script>
import Header from "../common/Header.vue";
import Parameter from "./DetailParameter.vue";

import Talk from "./DetailTalk.vue";
Vue.component("Header", Header);
Vue.component("Parameter", Parameter);
Vue.component("Talk", Talk);
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

          let img =com.designerExtraInfo;
          that.img = img;

          that.list=that.list.concat(data);
          that.show=that.show.concat(show);
          that.com = com;
          that.des = des;
          that.title = data;
        //   console.log(color);
        // Indicator:Indicator.colse();
}
      })
    }
}
</script>
<style>
</style>
