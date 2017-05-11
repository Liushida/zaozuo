<template>	
	<div class="m-rg-box">
		<div class="m-rg-back" @click="back"><img src="/static/images/nav_back.png"><span>返回</span></div>
		<div class="m-rg-logo">手机注册</div>
		<div class="m-rg-pd">
			<div class="m-rg-user"><input type="text"  placeholder="手机号" v-model="username"></div>
			<div class="m-rg-code"><input type="text"  placeholder="验证码" v-model="usercode"><span @click="getcode">发送</span></div>
			<div class="m-rg-pas"><input type="password"  placeholder="请输入6-12位数字或字母密码" v-model="password"></div>
			<div class="m-rg-rg" @click="register">注册</div>
			<div class="m-rg-mm"><img src="/static/images/biz_account_forget_select.png">邮箱注册</div>	
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
	import { Popup } from 'mint-ui';
	Vue.component(Popup.name, Popup);
	import axios from 'axios'
	import Axios from '../../utils/axios.js'
	import Qs from 'qs'
	import { Indicator } from 'mint-ui'
export default {
	data(){
		return({
			username:'',
			password: '',
			popupVisible:false,
			state:'',
			code:'',
			usercode:''
		})
	},
	methods:{
	    back: function(){
	      this.$router.go(-1);
	    },
	    register:function(){
		    let that = this;
	    	if(that.usercode==that.code){
		    	Indicator.open({
				  text: '注册中...',
				  spinnerType: 'fading-circle'
				});
		    	axios.post('/node/users/registor', Qs.stringify({username: this.username, password:this.password}), {
		          headers: {
		            'Content-Type': 'application/x-www-form-urlencoded'
		          }
		        }).then((res)=>{
		        	if(res.data=='2'){
	          			that.popupVisible=true;
		        		Indicator.close();
		        		that.state="注册成功，为您跳转登录页面";
	          			that.$router.push('./login');
		        	}else{
		        		Indicator.close();
		        		that.state="注册失败";
	          			that.popupVisible=true;
		        	}
		        })
	    	}else{
	    		that.popupVisible=true;
        		that.state="验证码错误！";
	    	}
		},
		getcode:function(){
			let that=this;
			// console.log(that.username)
			axios.post('/tag/sms.php', Qs.stringify({mobile:that.username})
			)
			.then(function(res){
				// console.log(1);
				// console.log(res);
				that.code=res.data.slice(35,39);
				// console.log(that.code);
			})
		}

	},
	mounted:function(){
	
	}
}


</script>