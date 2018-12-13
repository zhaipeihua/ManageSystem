<template>
    <div id="DetailPreOrder" style="overflow:hidden">
        <mt-header fixed title="跑单详情" style="height:.85rem!important;">
             <div @click="routerback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
            <div class="mui-content">
                <form method="POST" enctype="multipart/form-data" id="form1">
                    <cust-order :getCustNameAndOrderId="setDataCustName"></cust-order>
                    <!-- 意向项目折叠 -->
                    <sheet-list v-for="(item,key) in PayProject" :item="item" :key="item.id"></sheet-list>
                     <!-- 价格 -->
                    <price-list :PriceFromParent="PriceArray"></price-list>
                    <!-- 赠送项目折叠 -->
                    <sheet-list v-for="(item,key) in giveProject" :item="item" :key="item.id"></sheet-list>
                     <!-- 设计部 -->
                    <designer-model :getData="getData"></designer-model>
                    <!--回访建议-->
                    <back-adivice :getAdviceData='backAdviceModel'></back-adivice>
                </form>
            </div>
    </div>
</template>
<script>
import CustNameOrderidModel from '../Accordion/custNameOrderIdComponent.vue'
import AccordionModel from '../Accordion/accordion.vue'
import moneyComponentModel from '../Accordion/moneyComponent.vue'
import EnlargeImageView from '../DifferentConponent/enlargeImage.vue'
import DesignerModel from '../Accordion/designerComponent.vue'
import backAdviceComponentModel from '../Accordion/backAdviceComponent.vue'
//import PickerView from '../EnlargeImageView/picker.vue'

export default {
    name:"DetailPreOrder",
    components:{
        "cust-order":CustNameOrderidModel,
        "price-list":moneyComponentModel,
        "sheet-list":AccordionModel,
        "imgview":EnlargeImageView,
        "designer-model":DesignerModel,
        "back-adivice":backAdviceComponentModel
    },
    data () {
        return {
            amount:"",//金额
            subscription:'',//订金
            totalmoney:0,//合计
            storeDesigner:"",//下店设计师
            remark:"",//备注
            adviceDesigner:"",
            backAdvice:"",
            orderId:"",
            cust_name:'',
            setDataCustName:{
                 orderId:"",
                 cust_name:""
            },
            PriceArray:[
                {
                    name:"合计",
                    money:0
                },
                {
                    name:"金额",
                    money:0
                },
                {
                    name:"订金",
                    money:0
                }
            ],
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
            }],
            getData:{
                manageName:"设计部",
                distinguish:"Designer",
                designerAssistant_name:"",
                beforeCustomerServiceStaff_name:"",
                storeDesigner:"",
                remark:"",
                adviceDesigner:"",
                backAdvice:""
            },
            backAdviceModel:{
                getBackAdvice:[
                        {
                            iconName:"back_from_de",
                            departmentName:"设计部",
                            AdviceContent:""
                        }
                    ]
                }
        }
    },
    created:function(){
        const userId=localStorage.getItem('userid');
        const orderId=this.$route.params.orderid;
        const url=this.$Url.domainName + this.$Url.ports.getOrderDetailPort;
        const QueryData=this.$qs.stringify({
            userId:userId,
            orderId:orderId
        })
        this.FeatchData(url,QueryData)
    },
    methods: {
            FeatchData:function(getUrl,QueryData){
                let _this=this;
                this.$http.post(getUrl,QueryData).then((res)=>{
                    const result=res.data.order;
                    _this.setDataCustName.orderId=res.data.orderId;//订单号
                    _this.setDataCustName.cust_name=result.cust_name;///客户名
                    _this.PayProject[0].getDetail=result.v2PayProject;//意向项目
                    _this.giveProject[0].getDetail=result.v2GiveProject;//赠送项目
                    _this.PayProject[0].numPay=_this.sumProjectNumber(result.v2PayProject);//意向项目数量
                    _this.giveProject[0].numGive=_this.sumProjectNumber(result.v2GiveProject);//赠送项目数量
                    const differPrice=_this.PriceArray
                    _.forEach(_this.PayProject[0].getDetail,element => {
                        differPrice[0].money+=element.original_price;//合计
                    });
                    differPrice[1].money=Number(result.amount);//金额
                    differPrice[2].money=Number(result.subscription);//订金
                    _this.getData.storeDesigner=result.down_shop_designer_name//下店设计师

                    _this.getData.remark=result.remark//备注

                    _this.getData.adviceDesigner=result.design_advise//设计师建议
                    
                    _this.backAdviceModel.getBackAdvice[0].AdviceContent=result.return_visit_advise1//回访建议

                    }).then((err)=>{
                          
                    })
            },
            
            routerback: function () {
                this.$router.back(-1)
            },
    }
}
</script>
<style scoped>
@import '../../../../static/StyleModel/allOrderStyle/ordernewmodification.css';
@import '../../../../static/StyleModel/unMadeOrder/orderDistributionDetails.css';
</style>

