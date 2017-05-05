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
export default {
  components: { Header, Footer }
}
</script>
