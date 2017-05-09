<template>	
	<div class="m-lg-box">
		<div class="m-lg-back" @click="back"><img src="/static/images/nav_back.png"><span>返回</span></div>
		<div class="m-lg-logo"><img src="/static/images/biz_account_big_icon_white.png"></div>
		<div class="m-lg-pd">
			<div class="m-lg-user"><input type="text"  placeholder="手机号或邮箱"></div>
			<div class="m-lg-pas"><input type="password"  placeholder="请输入密码"></div>
			<router-link to="/mine" tag="div" class="m-lg-lg">登录</router-link>
			<div class="m-lg-mm"><img src="/static/images/biz_account_forget_select.png">忘记密码</div>	
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