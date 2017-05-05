<template>
  <div class='m-index'>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <footer class="m-footer">
      <router-link to="/home">Go to home</router-link>
      <router-link to="/furniture">Go to furniture</router-link>
      <router-link to="/search">Go to search</router-link>
    </footer>
  </div>
</template>
<script>
import Header from '../common/Header.vue'
export default {
  components: { Header }
}
</script>
