
<template>
<div id="collapse">
    <v-header></v-header>
        <router-view class="router-view"></router-view>
    <v-footer></v-footer>
</div>
</template>
<script>
import Header from '../../components/header/header.vue'
import Footer from '../../components/footer/footer.vue'
export default {
  name: 'App',
  components:{
    "v-header":Header,
    "v-footer":Footer,
  }
}
</script>
<style>
 @import '../../../static/globelStyle/globleIndex.css';
</style>

