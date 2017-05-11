<template>
  <div id="">

  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
      title: this.$store.state.title
    }
  },
  methods: {

  },
  mounted: function(){
    console.log(localStorage.getItem("jlj"));
  }
}
</script>
<style>
</style>
