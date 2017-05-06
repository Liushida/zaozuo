<template>
  <div class='m-index'>
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
Vue.component('Header',Header);
Vue.component('Footer',Footer);
export default {
  data: function(){
    return {
    }
  }
}
</script>
