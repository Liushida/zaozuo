<template>	
	<div class="m-lr-box">
		<div class="m-lr-back" @click="back"><img src="/static/images/nav_back.png"><span>返回</span></div>
		<div class="m-lr-logo"><img src="/static/images/biz_account_big_icon_white.png"></div>
		<div class="m-lr-pd">
			<router-link to="/login" class="m-lr-login">用户登录</router-link>
			<div class="m-lr-dl">
				<a>微信登录</a>
				<router-link to="/register">新用户注册</router-link>
			</div>
		</div>
		<div class="m-lr-mm"><img src="/static/images/biz_account_forget_select.png">忘记密码</div>	
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