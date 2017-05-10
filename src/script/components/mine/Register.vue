<template>	
	<div class="m-rg-box">
		<div class="m-rg-back" @click="back"><img src="/static/images/nav_back.png"><span>返回</span></div>
		<div class="m-rg-logo">手机注册</div>
		<div class="m-rg-pd">
			<div class="m-rg-user"><input type="text"  placeholder="手机号" v-model="username"></div>
			<div class="m-rg-code"><input type="text"  placeholder="验证码"><span>发送</span></div>
			<div class="m-rg-pas"><input type="password"  placeholder="请输入6-12位数字或字母密码" v-model="password"></div>
			<div class="m-rg-rg" @click="register">注册</div>
			<div class="m-rg-mm"><img src="/static/images/biz_account_forget_select.png">邮箱注册</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import Axios from '../../utils/axios.js'
	import Qs from 'qs'
export default {
	data(){
		return({
			username:'',
			password: ''
		})
	},
	methods:{
	    back: function(){
	      this.$router.go(-1);
	    },
	    register:function(){
	    	// console.log(this)
	    	console.log(this.username)
	    	let that = this
	    	axios.post('/node/users/registor', Qs.stringify({username: this.username, password:this.password}), {
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded'
	          }
	        }).then((res)=>{
	        	// console.log(res)
	        	if(res.data=='2'){
	          		that.$router.push('./login')
	        	}else{
	        		console.log('登录失败')
	        	}
	        })
		}
	}
}


</script>