<template>	
	<div class="m-buycart-box">
		<div class="m-buycart-header">
			<div class="m-buycart-back"   @click="back"><img src="/static/images/biz_res_back_black.png"></div>
			<div class="m-buycart-title"><span>购物车</span>(<i>1</i>)</div>
		</div>
		<div class="m-buycart-list-box">
			<ul class="m-buycart-list">
				<li class="m-buycart-list-goods">
					<div class="goods-header">
						￥ <span>666</span>
					</div>
					<div class="goods-details">
						<div class="goods-details-img"><img :src="dataList?dataList.data.detail.item_detail_shareImg:null"></div>
						<ul class="goods-details-list">
							<li>随行桌</li>
							<li><b>颜色:</b><span><i>red</i></span></li>
							<li><b>数量:</b><span><i>{{this.cartNum}}</i>件</span></li>
							<li><b>单价:</b><span>￥<i>{{dataList.data.detail.item.displayPrice}}</i></span></li>
							<li><b>预计发货:</b><span><i>2017-05-05</i></span></li>
						</ul>
					</div>
					<div class="goods-nav">
						<span @click="isShow"><i><img src="/static/images/biz_order_cartlist_edit.png"/></i>编辑</span>
						<span><i><img src="/static/images/biz_order_cartlist_del.png"/></i>删除</span>
						<span><i><img src="/static/images/biz_order_cartlist_confirm.png"/></i>选中</span>
					</div>
				</li>
			</ul>
			<div class="m-buycart-bottom"></div>
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
	</div>	
</template>

<script type="text/javascript">
	import Axios from '../../utils/axios.js'

	import Vue from 'vue';

	import { Popup } from 'mint-ui';

	Vue.component(Popup.name, Popup);

export default {
	name:'',
	data: function(){
		return{
			dataList:null,
			popupVisible:false,
			cartNum:7
		}	
	},
	methods:{
		back: function(){
			this.$router.go(-1);
		},
		isShow: function(){
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
	mounted:function(){
		let that = this
		Axios.get({
			url: `proxy/app/item/300150`,
			callback:function(res){
				that.dataList = res.data
				// console.log(res.data)
			}
		})
	},
	updated:function(){
		// console.log(this.popupVisible)

	}

}
</script>