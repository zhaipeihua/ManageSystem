<template>
    <!-- <div class="header" id="header">
        <h1 class="mui-title title" style="font-size: .3rem!important;color: #000!important;">俏佳人云</h1>
    </div> -->
     <mt-header fixed :title=msg style="height:.85rem!important;"></mt-header>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{
            msg:"俏佳人云"
        }
    },
    method:{
        routerback: function () {
            this.$router.back(-1)
        },
    },
   watch:{
        $route(to,from){
            console.log(to.path);
        }
    },
}
</script>
<style>
.header{
    height: .89rem;
    width: 100%!important;
    color: #000;
    /*background-color: #c69450;*/
    position: fixed;
    z-index: 99;
    border-bottom: 1px solid #eee;
    box-shadow: 0 4px 5px -3px #eee;
    background: #fff;
}
.title{
    text-align: center;
    font-size: .36rem;
}
</style>
