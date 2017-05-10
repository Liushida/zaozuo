<template lang="html">
    <div id='details'>
        <div class="img">
            <img :src="`http://img.zaozuo.com/${chooseWhoImg}`" alt="">
        </div>
        <div class="checkBox">
            <div class="optionName" v-for="(item, index) in optionNames">
                <span v-text="item.name"></span>
                <div class="optionValueBox">
                    <div class="optionVale" v-for="(value,inde) in optionValues" v-if="value.opNameId == item.opNameId"
                    @click="chooseOption(item.opNameId,value.opValueId)">
                        <img :src="value.img" v-if="value.img != ''"  alt="">
                        <span v-else v-text="value.value"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue";
import Vue from "vue"
import axios from "../../utils/axios.js"
export default {
    name: "",
    data: function data() {
      return {
        checkedImgs:{},
        optionNames: [],
        optionValues:[],
        chooseWho:{},
        chooseWhoImg:''
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
        type: 'get',
        url: `proxy/app/item/${id}/exp?boxId=1041`,
        callback: function(res){
          let data = res.data.data.detail.item;
          that.checkedImgs = data.option2Sku
          that.optionNames = that.optionNames.concat(data.optionNames);
          that.optionValues = that.optionValues.concat(data.optionValues);
        //   console.log(that.checkedImgs[";10331:11057;10332:11060;10333:11069;"])
        }
      })
    }
}
</script>

<style lang="css">
</style>
