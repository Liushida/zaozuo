<template lang="html">
  <div class="canshu">
      <h3>详细参数规格</h3>
      <ul>
          <li v-for="(item,index) in list">
              <b v-html="item.paramKey+':'"></b>
              <p class="" v-html="item.paramValue"></p>
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
      let id = this.$route.params.id
      let that = this;
      axios.get({
        type: 'get',
        url: `proxy/app/item/${id}/exp?boxId=1041`,
        callback: function(res){
          let date = res.data.data.params;
          that.list=that.list.concat(date);
        //   console.log(date);
        }
      })
    }
}
</script>

<style lang="css">
</style>
