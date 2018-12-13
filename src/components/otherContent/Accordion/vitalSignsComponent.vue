<template>
    <div class="vitalSigns">
        
    </div>
</template>

<script>
export default {
    name:"vitalSigns",
    data(){
        return{

        }
    },
    methods:{
        routerback(){
            this.$router.back(-1)
        }    
    }
}
</script>

<style scoped>
@import '../../../../static/IconFont/iconfont.css';
.mui-input-group .mui-input-row {
    height:.89rem;
}
.mui-input-row {
    clear: left;
    overflow: hidden;
}
.cont>li {
    position: relative;
    width: 100%;
    height: .89rem;
    line-height: 0.89rem!important;
    border-bottom: 1px solid #f2f2f2;
}
</style>
