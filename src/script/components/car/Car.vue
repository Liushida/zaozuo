<template>
  <div id="">
    {{title}}
  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
      title: this.$store.state.title
    }
  }
}
</script>
<style>
</style>
