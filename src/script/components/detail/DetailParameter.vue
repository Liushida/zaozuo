<template lang="html">
    <div class="parameter">
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
</template>

<script>
import Vue from "vue"
import axios from "../../utils/axios.js"
export default {
    name: "parameter",
    data: function data() {
      return {
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
          let com= res.data.data;
          let show =com.sizeCharts;
          that.show=that.show.concat(show);
          that.com = com;
        }
      })
    }
}
export default {
}
</script>

<style lang="css">
</style>
