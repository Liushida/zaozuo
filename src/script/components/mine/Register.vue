<template>	
	<div class="m-rg-box">
		<div class="m-rg-back" @click="back"><img src="/static/images/nav_back.png"><span>返回</span></div>
		<div class="m-rg-logo">手机注册</div>
		<div class="m-rg-pd">
			<div class="m-rg-user"><input type="text"  placeholder="手机号"></div>
			<div class="m-rg-code"><input type="text"  placeholder="验证码"><span>发送</span></div>
			<div class="m-rg-pas"><input type="password"  placeholder="请输入6-12位数字或字母密码"></div>
			<router-link to="/login" tag="div" class="m-rg-rg">注册</router-link>
			<div class="m-rg-mm"><img src="/static/images/biz_account_forget_select.png">邮箱注册</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	
export default {
	methods:{
	    back: function(){
	      this.$router.go(-1);
	    }
	}
}


</script>