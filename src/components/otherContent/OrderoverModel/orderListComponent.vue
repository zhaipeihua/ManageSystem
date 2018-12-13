<template>
    <div id="OrderList" style="width:100%!important;">
        <div v-for="(n,i) in orderArr">
            <div v-if="item.processName==='stayOperate'">
                <router-link class="big_box"  tag="div" to='/' style="width:93%!important">
                    <div class="left_time" style="width: 100%!important;">
                        <p class="time_sty"><span class="photo"></span>订单号：{{item.orderId}}</p>
                        <p class="name_st"> {{n.cust_name}} </p>
                        <p class="no_styreb">待操作</p>
                    </div>
                    <div class="center_cont">
                        <span class="word_sty">{{n.project_name}} </span>
                    </div>
                    <div class="address_place">
                        <p class="name_style">￥ {{n.amount}} </p>
                    </div>
                    <div class="address_place">
                        <span class="word_sty">区域:{{n.area_name}} </span>
                        <span class="" style="float: right; color:#444">咨询师: {{n.main_teacher}} </span>
                    </div>
                    <div>
                        <span class="" style="float: right;font-size: .2rem;color:#999;!important;">{{n.insert_time}}</span>
                    </div>
                    </router-link>
            </div>
            <div v-else>
                <router-link class="big_box"  tag="div" to='/' style="width:93%!important">
                    <div class="left_time" style="width: 100%!important;">
                        <p class="time_sty"><span class="photo"></span>订单号：{{item.orderId}}</p>
                        <p class="name_st"> {{n.cust_name}} </p>
                    </div>
                    <div class="center_cont">
                        <span class="word_sty">{{n.operation}} </span>
                    </div>
                    <div class="address_place">
                        <p class="name_style">￥ {{n.amount}} </p>
                    </div>
                    <div class="address_place">
                        <span class="word_sty">区域:{{n.area_name}} </span>
                        <span class="" style="float: right; color:#444">咨询师: {{n.main_teacher}} </span>
                    </div>
                    <div>
                        <span class="" style="float: right;font-size: .2rem;color:#999;!important;">{{n.insert_time}}</span>
                    </div>
                </router-link>
            </div>
        </div> 

        </div>
</template>
<script>
import {Indicator } from 'mint-ui';
export default {
    name:"OrderList",
    props:{
        item:{
            type:Object
        }
    },
    data(){
        return{
            showSheets:false,
            data_item:{}
        }
    },
    created(){
        this.data_item = this.item;
    }
}
</script>
<style scoped>
@import '../../../../static/StyleModel/unMadeOrder/UnmadeOrderList.css';
*{
    font-size: .2rem!important;
}
</style>