<template lang="html" id="t1">
    <div class="qwe">

        <ul>
            <li @click="tap">1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <Header />
    </div>
</template>

<script>
    import Vue from "vue"
    import Header from '../common/Header.vue'
    import Footer from '../common/Footer.vue'
    Vue.component('Header',Header);
    Vue.component('Footer',Footer);
    export default {

    }
    var vm = new Vue({
        el:"#app",
        components:{
            Header:Header,
            Footer:Footer
        },
        methods:{
            tap:function(){
                // this.currentView = tabText;
                console.log(1);
            }
        }
    })
</script>

<style lang="css">
</style>
