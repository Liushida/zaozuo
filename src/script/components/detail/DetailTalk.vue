<template lang="html">
        <div class="share">
                <h1>交流与晒单</h1>
                <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"  :autoFill="false">
                        <div class="main" v-for="(item,index) in talk">
                        <div class="userMsg">
                                <div class="circle">
                                        <img :src="`http://img.zaozuo.com/${item.userImg}`" alt="">
                                </div>
                                <div class="Msg">
                                        <div class="MsgL">
                                                <h2 v-text="item.userName"></h2>
                                                <img src="/static/images/biz_show_comment_tanning_tag.png" alt="">
                                                <!-- <span v-text="item.itemCommentImgs[0].createTime"></span> -->
                                        </div>
                                        <img src="/static/images/biz_show_comment_selected.png" alt="">
                                </div>
                        </div>
                        <div class="PL">
                                <div class="pingjia">
                                        <p v-text="item.content"></p>
                                        <ul>
                                                <li v-for="(value,index) in item.itemCommentImgs">
                                                        <img :src="`http://img.zaozuo.com/${value.md5}`" alt="">
                                                </li>
                                        </ul>
                                </div>
                                <div class="reply" v-if="item.reply!=''">
                                        <b>造作客服:</b>
                                        <p v-text="item.reply"></p>
                                </div>
                        </div>
                </div>
                </mt-loadmore>
        </div>
</template>

<script>
import Vue from "vue"
import axios from "../../utils/axios.js"

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
export default {
        data:function data(){
                return{
                        talk:[],
                        page:1,
                        allLoaded:false
                }
        },
        methods:{
                loadBottom:function(){
                        let id = this.$route.params.id
                        let that = this;
                        // this.allLoaded = true;// 若数据已全部获取完毕
                        that.page++;
                        console.log(that.page);
                        axios.get({
                                type: 'get',
                                url: `proxy/item/talk?type=6&itemId=${id}&page=${that.page}`,
                                callback: function(res){
                                        let share= res.data.data.talks;
                                        that.talk=that.talk.concat(share);
                                }
                       })
                       this.$refs.loadmore.onBottomLoaded();
                }
        },
        mounted:function(){
                let id = this.$route.params.id
                let that = this;
                axios.get({
                        type: 'get',
                        url: `proxy/item/talk?type=6&itemId=${id}&page=`,
                        callback: function(res){
                                let share= res.data.data.talks;
                                that.talk=share;
                        }
               })
        }
}
</script>

<style lang="css">
</style>
