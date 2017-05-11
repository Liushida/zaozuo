<template lang="html">
        <div class="share">
                <h1>交流与晒单</h1>
                <div class="main">
                        <div class="userMsg">
                                <div class="circle">
                                        <img src="http://img.zaozuo.com/4818b017846dddb6f15ed9453f6c1514" alt="">
                                </div>
                                <div class="Msg">
                                        <div class="">
                                                <h2>馒头酱是个好姑娘</h2>
                                                <img src="/static/images/biz_show_comment_tanning_tag.png" alt="">
                                                <span>2013-07-24</span>
                                        </div>
                                        <img src="/static/images/biz_show_comment_selected.png" alt="">
                                </div>
                        </div>
                        <div class="PL">
                                <div class="">
                                        <p>第一次看到大先生沙发的时候就想着我家装修好一定要买这个沙发，所以就买了棕色黑腿的大先生，产品如其名，坐上去感觉恰到好处的软硬和温度。同批还购买了光笼和几把丝绸椅，质量同样杠杠的，送货和安装的工作人员热情又专业。买过造作的大件后，小件应该也会陆续购买造作的产品，特别棒~另外因为赶上店庆的活动，还得到了限量版8点椅和书~</p>
                                        <ul>
                                                <li><img src="http://img.zaozuo.com/90ba5f9c5353b0d6a60c0d34f4a61394" alt=""></li>
                                                <li><img src="http://img.zaozuo.com/f5a309a67bde70ff7ead9c4f9cd2b3aa" alt=""></li>
                                                <li><img src="http://img.zaozuo.com/ac2fade3bf5502e76d0bfc85958b60ae" alt=""></li>
                                                <li><img src="http://img.zaozuo.com/cfe20b917c697441d7dbc300d6997b33" alt=""></li>
                                        </ul>
                                </div>
                                <div class="reply">
                                        <b>造作客服:</b>
                                        <p>
                                                大先生沙发舒适柔软让人萌生想立刻躺在上面睡一觉的困意，非常开心您能够满意并且对造作产品及服务的认可，未来我们会更加努力给大家带来更多优秀的作品的，提前预祝您国庆快乐~
                                        </p>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
import Vue from "vue"
import axios from "../../utils/axios.js"
export default {
        data:function data(){
                return{
                        talk:[]
                }
        },
        methods:function(){

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
                                // console.log(that.talk);

                                var iM = 1475134702000;
                                var nDate = new Date(iM).toLocaleString();
                                // console.log(nDate.toLocaleString());

                        }
               })
        }
}
</script>

<style lang="css">
</style>
