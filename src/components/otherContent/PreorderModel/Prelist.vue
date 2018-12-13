<template>
    <div id="prelist">
        <div v-if="data_item.isPre=='preLeft'">
            <div v-for="(item,index) in data_item.OrderList">
                <div class="big_box" @click="jumpToEditDetail(item.orderid)">
                    <div class="left_time" style="width: 100%!important;">
                        <p class="time_sty"><span class="photo"></span>订单号：{{item.orderid}}</p>
                        <p class="name_st"> {{item.cust_name}} </p>
                        <!-- <p class="no_styreb">待操作</p> -->
                    </div>
                    <div class="center_cont">
                        <span class="word_sty">{{item.project_name}} </span>
                    </div>
                    <div class="address_place">
                        <span class="style_type">意向单</span>
                        <!-- <p class="name_style">￥ {{item.amount}} </p> -->
                    </div>
                    <div class="address_place">
                        <span class="word_sty">区域:{{item.area_name}} </span>
                        <span class="" style="float: right; color:#444">咨询师: {{item.main_teacher}} </span>
                    </div>
                    <div>
                        <span class="" style="float: right;font-size: .2rem;color:#999;!important;">{{item.insert_time}}</span>
                    </div>
                </div>
            </div>
        </div>
         <div v-else="data_item.isPre==''">
            <div v-for="(item,index) in data_item.OrderList">
                <router-link class="big_box"  tag="div" :to="'/DetailPreOrderView/'+item.orderid">
                    <div class="left_time" style="width: 100%!important;">
                        <p class="time_sty"><span class="photo"></span>订单号：{{item.orderid}}</p>
                        <p class="name_st"> {{item.cust_name}} </p>
                        <!-- <p class="no_styreb">待操作</p> -->
                    </div>
                    <div class="center_cont">
                        <span class="word_sty">{{item.project_name}} </span>
                    </div>
                    <div class="address_place">
                        <span class="style_type">意向单</span>
                        <!-- <p class="name_style">￥ {{item.amount}} </p> -->
                    </div>
                    <div class="address_place">
                        <span class="word_sty">区域:{{item.area_name}} </span>
                        <span class="" style="float: right; color:#444">咨询师: {{item.main_teacher}} </span>
                    </div>
                    <div>
                        <span class="" style="float: right;font-size: .2rem;color:#999;!important;">{{item.insert_time}}</span>
                    </div>
                </router-link>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    name:"prelist",
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
    },
    methods:{
         //判断有无权限操作意向单(可编辑页面，只读页面)
         jumpToEditDetail:function(getOrderid){
             //点击请求数据获取（consultant_id是否等于userid）进如不同的组件
             const userid=localStorage.getItem("userid");
             console.log(userid)
             const url=this.$Url.domainName+this.$Url.ports.selectIntentOrderPort;
             const QueryData=this.$qs.stringify({
                orderid:getOrderid
             })
             this.$http.post(url,QueryData).then((res)=>{
                const consultant_id=res.data.consultant_id;
                console.log(consultant_id)
                if(userid===consultant_id){
                    this.$router.push({path:"/EditIntentionOrderView",query:{orderid:getOrderid}})
                }else{
                    this.$router.push({path:"/ReadOnlyIntentionOrderView",query:{orderid:getOrderid}})
                }
             }).then((err)=>{
                   
             })

             
         }
    }
}
</script>

<style>
@import '../../../../static/StyleModel/unMadeOrder/UnmadeOrderList.css';
</style>
