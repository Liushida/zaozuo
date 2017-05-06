<template>
  <div id="m-user">
  	<mHeader/>
  	<User />		
  </div>
</template>
<script>
import mHeader from '../common/Header.vue'
import User from './user.vue'
export default {
  name: "",
  components: { mHeader,User },
  data: function data() {
    return {
    }
  }
}
</script>
