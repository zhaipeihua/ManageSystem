<template>
    <div id="getNewMoney" class="moneyTotal" style="background:#fff;">
        <div v-for="(item,index) in PriceArr" :key="index" >
            <p style="font-size:.3rem;">{{item.name+'：'}}<a style="color:red;display:inline-block;width:1.5rem;font-size:.3rem;">&yen;{{item.money}}</a></p>
        </div>
    </div>
</template>
<script>
export default {
   name:"getNewMoney",
   props:{
       PriceFromParent:{
           type:Array
       }
   },
   data(){
       return{
            PriceArr:[]
       }
   },
   created(){
       this.PriceArr=this.PriceFromParent
       console.log(this.PriceArr)
   }
}
</script>

<style scoped>
#getNewMoney p a{
    font-size: .3rem;
}
</style>
