<template>
  <header class="m-header">
    <div class="cart">
      <router-link to="">
        <img v-if="false" src="/static/images/biz_res_nav_cart_pressed.png" alt="">
        <img v-else src="/static/images/biz_res_nav_cart_normal.png" alt="">
      </router-link>
    </div>
    <div class="me">
      <router-link to="/mine">
        <img v-if="this.$route.fullPath.substr(1) == 'mine'" src="/static/images/biz_res_nav_me_pressed.png" alt="">
        <img v-else src="/static/images/biz_res_nav_me_normal.png" alt="">
      </router-link>
    </div>
    <div class="search">
      <router-link to="/search">
        <img v-if="this.$route.fullPath.substr(1) == 'search'" src="/static/images/biz_res_nav_search_pressed.png" alt="">
        <img v-else src="/static/images/biz_res_nav_search_normal.png" alt="">
      </router-link>
    </div>
    <div class="logo" v-if="!canBack">
      <img src="/static/images/biz_res_nav_icon.png" alt="">
    </div>
    <div class="logo" v-else>
      <div class="backBox">
        <div class="back" @click="back">
          <img src="/static/images/biz_res_back_black.png" alt="">
          <div class="border"></div>
        </div>
        <div class="home" @click="home">
          <img src="/static/images/biz_res_nav_home.png" alt="">
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header",
  props: {
    canBack: {
      type: Boolean,
      required: true
    }
  },
  methods:{
    back: function(){
      this.$router.go(-1);
    },
    home: function(){
      this.$router.push('/home');
    }
  },
  data: function data() {
    return {

    }
  }
}
</script>
