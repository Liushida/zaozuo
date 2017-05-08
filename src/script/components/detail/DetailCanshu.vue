<template lang="html">
  <div class="canshu">
      <h3>详细参数规格</h3>
      <ul>
          <li v-for="(item,index) in list">
              <b v-html="item.title+':'"></b>
              <p class="" v-html="item.val"></p>
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from "vue"
import axios from "../../utils/axios.js"
export default {
    data:function data(){
        return{
            list:[]
        }
    },
    mounted: function(){
      let that = this;
      axios.get({
        type: 'get',
        url: `proxy/app/item/300100/exp?boxId=1041`,
        callback: function(res){
          let date = res.data.data.newFeed;
          let num = date.length-1;
          let data = date[num].contents[0].child.parameter
          that.list=that.list.concat(data);

        }
      })
    }
}
</script>

<style lang="css">
</style>
