<template lang="html">
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
                <dd class="">
                    <div v-for="(item,index) in color">
                        <img :src="`http://img.zaozuo.com/${item.img}`" alt="">
                    </div>
                </dd>
            </dl>
            <dl class="styleStyle">
                <dt>款型</dt>
                <dd class="">
                    <div v-for="(style,index) in style" v-html="style.value">  </div>
                </dd>
            </dl>
            <dl class="styleOther">
                <dt>沙发腿</dt>
                <dd class="">
                    <div v-for="(item,index) in other" v-html="item.value"></div>
                </dd>
            </dl>
        </div>
        <div class="showVideo">
            <img :src="`http://img.zaozuo.com/${com.designerExtraInfo.designer_bgimgwap}`" alt="">
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
        <div class="zhanshi">
            <p>转角</p>
            <div class="zsImg">
                <img src="http://img.zaozuo.com/b9b4967d0aa1d774914f7fbef941f28a?x-oss-process=image/format,jpg/interlace,1" alt="">
            </div>
            <dl class="zsStyle">
                <dd class="">
                    <div v-for="(item,index) in show">
                        <img :src="`http://img.zaozuo.com/${item.smallImg.md5}`" alt="">
                    </div>
                </dd>
            </dl>
        </div>
        <div class="">

        </div>
    </div>
</template>

<script>
import Vue from "vue"
import axios from "../../utils/axios.js"
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
        show:[]
      }
    },
    methods: {

    },
    mounted: function(){
      let that = this;
      axios.all({
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
          that.list=that.list.concat(data);
          that.color=that.color.concat(color);
          that.style=that.style.concat(style);
          that.other=that.other.concat(other);
          that.show=that.show.concat(show);
          that.com = com;
          that.des = des;
          console.log(show);
        }
      })
    }
}
</script>

<style lang="css">
</style>
