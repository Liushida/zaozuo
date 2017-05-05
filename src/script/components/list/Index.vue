<template>
  <div class='m-index'>
    <header>header</header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link to="/furniture">Go to furniture</router-link>
      <router-link to="/search">Go to search</router-link>
    </footer>
  </div>
</template>
<script>
export default {
}
</script>
