<template>
    <div id="orderOnlyRead" style="margin-top:.89rem;background-color:#efeff4">
        <mt-header fixed title="意向单详情" style="height:.85rem!important;">
             <router-link to="/PreorderViewModel" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="mui-content contentBox num2" style="padding-bottom:2rem;overflow-y: auto;">
            <form method="POST" enctype="multipart/form-data">
                <div class="name same">
                    <label>客户姓名：</label>
                    <span>{{cust_name}}</span>
                </div>
                <div>
                    <!-- 意向项目折叠 -->
                    <sheet-list v-for="(item,key) in PayProject" :item="item" :key="key"></sheet-list>
                </div>
                <div class="same suggest">
                    <mt-switch v-model="mt_switch" disabled style=""></mt-switch>
                    <span style="font-size:.2rem!important;margin-left:.2rem">订单完成回访之前是否需要与对应咨询师沟通</span>
                </div>
                <div class="money same">
                    <input type="hidden" class="consultant_id"/>
                    <label>金&emsp;&emsp;额：<span style="color: #f00">&yen;&nbsp;</span></label>
                    <input type="number" style="color: #444!important" :value="amount" readonly="readonly" unselectable="on" onfocus="this.blur()">
                </div>
                <div class="payment same">
                    <label>订&emsp;&emsp;金：<span style="color: #f00">&yen;&nbsp;</span></label>
                    <input type="number" style="color: #444!important" :value="subscription" readonly="readonly" unselectable="on" onfocus="this.blur()">
                </div>
                <div class="chooseDesinger readOnlydiffer" style="padding:0 .2rem;border-bottom: 1px solid #f2f2f2;">
                    <label class="icon_com_pic"></label>
                    <span href="###" style="float: left">下店设计师：{{storeDesigner}}</span>
                </div>
                <div>
                    <!-- 赠送项目折叠 -->
                    <sheet-list v-for="(item,key) in giveProject" :item="item" :key="key"></sheet-list>
                </div>
            </form>
          

            <div class="btns" style="margin-top: 2.2rem">
                <mt-button size="normal" type="primary">以往更新记录</mt-button>
                <mt-button size="normal" type="primary" class="btnDisabled" style="margin: 0 .2rem!important;">更新订单</mt-button>
                <mt-button size="normal" type="primary" class="btnDisabled" >生成订单</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import AccordionModel from '../Accordion/accordion.vue'

export default {
    name:"orderOnlyRead",
    components:{
        "sheet-list":AccordionModel
    },
    data(){
        return{
            mt_switch:false,
            amount:"",//金额
            subscription:'',//订金
            storeDesigner:"",//下店设计师
            remark:"",//备注
            cust_name:'',
            PayProject:[{
                differ:"pay",
                name:'意向项目',
                id:1,
                numPay:"",
                getDetail:[],
            }],
            giveProject:[{
                name:'赠送项目',
                differ:"give",
                id:2,
                numGive:"",
                getDetail:[],
            }]
        }
    },
    created:function(){
        const orderid=this.$route.query.orderid;
        const $baseUrl=localStorage.getItem("baseUrl");
        const url = this.$Url.domainName + this.$Url.ports.selectIntentOrderPort;
        const QueryData=this.$qs.stringify({
            orderid:orderid
        })
        this.FetchData(url,QueryData)
    },
    methods:{
        FetchData:function(url,QueryData){
            const _this=this;
            this.$http.post(url,QueryData).then((res)=>{
                const result=res.data
                _this.amount=result.amount//金额
                _this.subscription=result.subscription//订金
                _this.cust_name=result.cust_name//客户姓名
                _this.storeDesigner=result.down_shop_designer_name//下店设计师
                _this.PayProject[0].getDetail=result.v2PayProject;//意向项目
                _this.giveProject[0].getDetail=result.v2GiveProject;//赠送项目
                _this.PayProject[0].numPay=_this.sumProjectNumber(result.v2PayProject);//意向项目数量
                _this.giveProject[0].numGive=_this.sumProjectNumber(result.v2GiveProject);//赠送项目数量
                _this.mt_switch=Number(result.is_talk)==1?true:false;
                
              }).then((err)=>{

              })
        }
    }
}
</script>
<style scoped>
@import '../../../../static/StyleModel/allOrderStyle/addintentionorder.css';

.btnDisabled{
    pointer-events: none;
    opacity: 0.3;
}
</style>
