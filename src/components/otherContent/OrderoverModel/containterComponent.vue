<template>
    <div id="departmentOrderList">
        <div v-for="(item,index) in data_item.OrderList">
            <div class="big_box"  style="width:93%;" @click="DifferentDetail(item.orderId,item.order.flag)">
                <div class="left_time" style="width: 100%!important;">
                    <p class="time_sty"><span class="photo"></span>订单号：{{item.orderId}}</p>
                    <p class="name_st" v-html="item.order.cust_name"></p>
                    <!-- <p class="no_styreb">待操作</p> -->
                </div>
                <div class="center_cont">
                    <span class="word_sty" v-html="item.order.project_name"></span>
                </div>
                <div class="address_place">
                    <span class="word_sty" v-html="'区域:'+item.order.area_name"></span>
                    <span class="" style="float: right; color:#444" v-html="'咨询师:'+item.order.main_teacher"> </span>
                </div>
                <div class="address_place">
                    <span class="style_type" v-html="item.currentTaskName"></span>
                    <p class="name_style" v-html="'&yen;'+item.order.amount"></p>
                </div>
                <div>
                    <span class="" style="float: right;font-size: .2rem;color:#999;!important;" v-html="item.order.insert_time"></span>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:"departmentOrderList",
    props:{
        item:{
            type:Object
        }
    },
    data(){
        return{
            data_item:{}
        }
    },
    created(){
        this.data_item = this.item;
    },
    methods:{
           DifferentDetail(orderId,flag){
               const getOrderId=Number(orderId);
               const newflag=Number(flag);
               if(newflag==1){

                    this.$router.push({path: '/readOnlyConsultantOrderDetailView',query: {orderid: getOrderId}});

               }else if(newflag==2||newflag==6||newflag==8||newflag==12){

                    this.$router.push({path: '/readOnlyDesignerOrderDetailView',query: {orderid: getOrderId}});

               }else if(newflag==3||newflag==7||newflag==10){

                    this.$router.push({path: '/readOnlyFinanceOrderDetailView',query: {orderid: getOrderId}});

               }else if(newflag==4||newflag==13){

                    this.$router.push({path: '/readOnlyMedicalOrderDetailView',query: {orderid: getOrderId}});

               }else if(newflag==5||newflag==14){
                   
                    this.$router.push({path: '/readOnlyServiceOrderDetailView',query: {orderid: getOrderId}});
               }
             
           }
    },
   
}
</script>

<style scoped>
@import '../../../../static/StyleModel/unMadeOrder/UnmadeOrderList.css';

</style>
