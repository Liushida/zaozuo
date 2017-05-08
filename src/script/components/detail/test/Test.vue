<template lang="html" id="t1">
    <div class="qwe">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <div class="">
            <component :is="Content1"></component>
        </div>
    </div>
</template>
<!-- <template lang="html" id="con1">
  <div class="">
      我是组件1
  </div>
</template>
<template lang="html" id="con2">
  <div class="">
      我是组件2
  </div>
</template> -->
<script>
    import Vue from "vue"
    import Content1 from "../../detail/test/Content1.vue"
    import Content2 from "../../detail/test/Content2.vue"
    var vm = new Vue({
        el:"#app"
    })
    // Vue.component("Content1",{
    //     template:"#con1",
    //     data: function(){
    //        return{
    //             posts: [
    //                'Vue.js: The Basics',
    //                'Vue.js Components',
    //                'Server Side Rendering with Vue',
    //                'Vue + Firebase'
    //             ]
    //         }
    //     }
    // })
    // Vue.component("Content2",{
    //     template:"#con2"
    // })

    Vue.component("Content1",{
        template:"<div>123</div>"
    })
    Vue.component("Content2",{
        template:"<div>345</div>"
    })
    export default {

    }
</script>

<style lang="css">
    /*ul{
        display: flex;
    }
    li{
        flex:1;
        background: #f99;
        text-align: center;
        border: 1px solid #000;
    }*/
</style>
