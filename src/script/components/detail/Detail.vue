<template>
  <div id="details">
      <Header :canBack="true"/>
      <ul class="nav">
          <li class="active">作品</li>
          <li>参数</li>
          <li>推荐<span>/12</span></li>
          <li>晒单<span>/53</span></li>
          <li>套餐</li>
      </ul>
      <div class="scroll">
          <div class="showdetail">
              <div class="showImg">
                  <img src="http://img.zaozuo.com/5282be36b81ccf3734c01abe12a33b02?x-oss-process=image/format,jpg/interlace,1" alt="">
              </div>
              <div class="showTitle">
                  <h1>造作大先生沙发</h1>
                  <p>Mr.Big Sofa</p>
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
                      <div class="active">
                          <img src="http://img.zaozuo.com/848999408bc941cf808abcf6d6cf81e2@!small" alt="">
                      </div>
                      <div class="">
                          <img src="http://img.zaozuo.com/848999408bc941cf808abcf6d6cf81e2@!small" alt="">
                      </div>
                      <div class="">
                          <img src="http://img.zaozuo.com/848999408bc941cf808abcf6d6cf81e2@!small" alt="">
                      </div>
                  </dd>
              </dl>
              <dl class="styleStyle">
                  <dt>款型</dt>
                  <dd class="">
                      <div class="active">
                          单人座左扶手
                      </div>
                      <div class="">
                          双人座右扶手
                      </div>
                      <div class="">
                          脚墩
                      </div>
                      <div class="">
                          单人座右扶手
                      </div>
                      <div class="">
                          双人座左扶手
                      </div>
                  </dd>
              </dl>
              <dl class="styleOther">
                  <dt>沙发腿</dt>
                  <dd class="">
                      <div class="active">
                          有腿没腿
                      </div>
                      <div class="">
                          有腿没腿
                      </div>
                      <div class="">
                          有腿没腿
                      </div>
                  </dd>
              </dl>
          </div>
          <div class="showVideo">
              <img src="http://img.zaozuo.com/e5d8be95a360efffc60757f82e363c22" alt="">
              <div class="showposi">
                  <div class="authorImg">
                      <img src="http://img.zaozuo.com/57adc4879f9cd67acdf76017b6e81b27@!small" alt="">
                  </div>
                  <h1>Jonas Wagell</h1>
                  <p>Sweden | Stockholm</p>
                  <div class="messge">
                      <span></span>
                      2014年EDIDA国际设计大奖得主，Elle Decoration瑞典设计奖得主；2014年 年度灯具设计奖”Cloud”设计者；2008年WallPaper杂志全球50位热门年轻设计师得主。瑞典建筑师、设计师、造作首批签约设计师。他的设计以极简和童趣著称，尤其擅⻓为紧凑空间设计功能性产品。“家具设计应注重功能，而不是艺术。我希望我的设计成为⽇常生活的一部分。设计中的情感，比奢华材质更重要。我在努力创造简单⽽直观，但又有个人趣味的东西。我叫它generous minimalism”。
                  </div>
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
                      <div class="active">
                          <img src="http://img.zaozuo.com/cb0ac1a77cb1ce7bfd5768ae273a79d0@!small" alt="">
                      </div>
                      <div class="">
                          <img src="http://img.zaozuo.com/cb0ac1a77cb1ce7bfd5768ae273a79d0@!small" alt="">
                      </div>
                      <div class="">
                          <img src="http://img.zaozuo.com/cb0ac1a77cb1ce7bfd5768ae273a79d0@!small" alt="">
                      </div>
                      <div class="">
                          <img src="http://img.zaozuo.com/cb0ac1a77cb1ce7bfd5768ae273a79d0@!small" alt="">
                      </div>
                      <div class="">
                          <img src="http://img.zaozuo.com/cb0ac1a77cb1ce7bfd5768ae273a79d0@!small" alt="">
                      </div>
                  </dd>
              </dl>
          </div>
          <div class="">
              
          </div>
      </div>
  </div>
</template>
<script>
import Vue from "vue"
import Header from "../common/Header.vue"
import axios from "../../utils/axios.js"
Vue.component("Header",Header)
export default {
    name: "",
    data: function data() {
      return {
        list: []
      }
    },
    methods: {

    },
    mounted: function(){
    //   let that = this;
    //   axios.all({
    //     type: 'get',
    //     url: `proxy/app/item/300150`,
    //     callback: function(res){
    //       let data = res.data.data.categoryName;
    //      console.log(data);
    //     }
    //   })
    }
}
</script>
<style>
</style>
