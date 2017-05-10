<template>	
	<div class="m-lg-box">
		<div class="m-lg-back" @click="back"><img src="/static/images/nav_back.png"><span>返回</span></div>
		<div class="m-lg-logo"><img src="/static/images/biz_account_big_icon_white.png"></div>
		<div class="m-lg-pd">
			<div class="m-lg-user"><input type="text"  placeholder="手机号或邮箱" v-model="username"></div>
			<div class="m-lg-pas"><input type="password"  placeholder="请输入密码" v-model="password"></div>
			<div class="m-lg-lg" @click="login">登录</div>
			<div class="m-lg-mm"><img src="/static/images/biz_account_forget_select.png">忘记密码</div>	
		</div>
		<mt-popup
		  v-model="popupVisible"
		  popup-transition="popup-fade">
		  <div v-text="state"></div>
		</mt-popup>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	import axios from 'axios'
	import Axios from '../../utils/axios.js'
	import Qs from 'qs'
	import { Indicator } from 'mint-ui';
	import { Popup } from 'mint-ui';
	Vue.component(Popup.name, Popup);
export default {
	data(){
		return({
			username:'',
			password: '',
			popupVisible:false,
			state:''
		})
	},
	mounted:function(){
		
	},
	methods:{
	    back: function(){
	      this.$router.go(-1);
	    },
	    login:function(){
	    	let that = this;

	    	Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
	    	axios.post(
	    		'/node/users/login',
	    		 Qs.stringify({username: this.username, password:this.password}), 
	    		 {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
	    	).then((res)=>{
	        	// console.log(res.data)
	        	if(res.data=='1'){
	          		Indicator.close();
	          		that.state="登陆成功";
	          		that.$router.push('/mine')
	        	}else{
	        		Indicator.close();
	          		that.state="登陆失败";
	        		that.popupVisible=true;
	        	}
	        })
		}
	}
}


</script>