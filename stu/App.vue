<template >
    <div  id="app" >
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
    </div>
</template>
   
  <script>
    import store from 'src/store.js'
    import index from "./components/index.vue";


    export default {
    name:'app',
    component:{index},
    created: function(){
    this.$router.push('/activePublic');
  },
  }

</script>
<style>
 
</style>
