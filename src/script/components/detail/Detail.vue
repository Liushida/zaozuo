<template>
  <div id="details">
      <Header :canBack="true"/>
      <div class="buy">
              <div class="" @click="isShow()">
                      <p>$365</p>
                      <p>包邮立购</p>
              </div>
              <img src="/static/images/biz_res_btn_contact.png" alt="">
      </div>
      <mt-popup
          v-model="popupVisible"
          position="bottom">
          <div class="m-popup-box">
                  <div class="m-popup-title">
                          <div class="m-popup-img">
                                  <img :src="dataList?dataList.data.detail.item_detail_shareImg:null" />
                          </div>
                          <div class="m-popup-price">
                                  <h4>豌豆椅</h4>
                                  <h5>￥885</h5>
                                  <h6>48.6X48.2X77.1cm</h6>
                          </div>
                          <p>免费配送</p>
                  </div>
                  <div class="m-popup-details">
                          <ul class="m-popup-count">
                                  <li @click="delet"><img src="/static/images/biz_order_buyconfirm_amount_minus.png"></li>
                                  <li>{{cartNum}}</li>
                                  <li @click="add"><img src="/static/images/biz_order_buyconfirm_amount_plus.png"></li>
                          </ul>
                          <ul class="m-popup-color">
                                  <p>颜色</p>
                                  <li><img src="http://img.zaozuo.com/848999408bc941cf808abcf6d6cf81e2@!small" /></li>
                                  <li><img src="http://img.zaozuo.com/848999408bc941cf808abcf6d6cf81e2@!small" /></li>
                                  <li><img src="http://img.zaozuo.com/848999408bc941cf808abcf6d6cf81e2@!small" /></li>
                          </ul>
                          <ul class="m-popup-style">
                                  <p>款型</p>
                                <li>转角</li>
                                <li>角墩</li>
                                <li>单人座</li>
                                <li>双人座</li>
                                <li>转角双人座</li>
                                <li>三人座</li>
                                <li>转角三人座</li>
                          </ul>
                  </div>
                  <div class="m-popup-btn">
                          确认修改
                  </div>
          </div>
       </mt-popup>
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
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
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
        popupVisible:false,
        title:{},
        dataList:null,
        cartNum:1
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
        console.log(strrr);
        },
        isShow:function(){
                this.popupVisible = true;
        },
        add:function(){
                this.cartNum++
        },
        delet:function(){
                if(this.cartNum<=0){
                        this.cartNum = 0
                }else{
                        this.cartNum--
                }
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
