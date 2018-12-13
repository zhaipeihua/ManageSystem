<template>
    <div id="custName">
        <div class="firstBox">
            <div style="position: relative;" class="item">
                <span class="transB orderid">
                </span>订单号：{{custNameAndOrderId.orderId}}
                <router-link tag="a" to="/" class="orderSchedule">查看订单进度</router-link>
            </div>
            <div style="border-bottom:1px solid #f2f2f2" class="item">
                <span class="transB cust_name_getname">
                </span>客&emsp;户：{{custNameAndOrderId.cust_name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"custName",
    data(){
        return{
            custNameAndOrderId:{},
        }
    },
    props:{
        getCustNameAndOrderId:{
            type:Object
        }
    },
    created(){
        this.custNameAndOrderId=this.getCustNameAndOrderId;
        console.log(this.custNameAndOrderId)
    }

}
</script>

<style>

</style>
