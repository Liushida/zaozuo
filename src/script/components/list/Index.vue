<template>
  <div class='m-index'>
    <mHeader/>
    <main>
      <router-view></router-view>
    </main>
    <mFooter />
  </div>
</template>
<script>
import mHeader from '../common/Header.vue'
import mFooter from '../common/Footer.vue'
import axios from '../../utils/axios.js';
export default {
  components: { mHeader, mFooter },
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
