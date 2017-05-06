<template>
  <div class='m-index'>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
import axios from '../../utils/axios.js';
export default {
  components: { Header, Footer },
  mounted: function(){
    axios.all({
      type: 'get',
      url: 'api/paper/13',
      callback: function(res){
        console.log(res)
      }
    })
  }
}
</script>
