<template>
    <div id="medicalOrder" style="position:relative;background:#efeff4">
        <div v-if="mainContentShow">
            <mt-header fixed :title=title style="height:.85rem!important;">
                <div slot="left" @click="routerBack">
                    <mt-button icon="back">返回</mt-button>
                </div>
            </mt-header>
            <div class="mui-content">
                <form method="POST">
                    <cust-order :getCustNameAndOrderId="setDataCustName"></cust-order>
                    <!-- 意向项目折叠 -->
                    <sheet-list v-for="(item,key) in PayProject" :item="item" :key="item.id"></sheet-list>
                    <!-- 价格 -->
                    <price-list :PriceFromParent="PriceArray"></price-list>
                    <!-- 赠送项目折叠 -->
                    <sheet-list v-for="(item,key) in giveProject" :item="item" :key="item.id"></sheet-list>
                    <!-- 设计部 -->
                    <designer-model :getData="getData"></designer-model>
                    <!--感兴趣项目折叠 -->
                    <sheet-list v-for="(n,i) in interestProject" :item="n" :key="n.id"></sheet-list>
                    <!--回访建议-->
                    <back-adivice :getAdviceData='backAdviceModel'></back-adivice>
                    <!-- 财务部 -->
                    <finance-model :getfinanceData="getData"></finance-model>
                </form>
            </div>
        </div>
         <!-- 医疗部 -->
        <medical-model v-on:childByValue="childByValue" style="position:relative;" :medicalData="medicalModel"></medical-model>
        <div class="item" style="background:#fff;margin-top:.2rem;" v-if="mainContentShow">
            <span class="transB time_from_medical"></span>财务部提交时间:{{submitTime}}
        </div>
    </div>
</template>
<script>
import CustNameOrderidModel from '../Accordion/custNameOrderIdComponent.vue'
import moneyComponentModel from '../Accordion/moneyComponent.vue'
import AccordionModel from '../Accordion/accordion.vue'
import DesignerModel from '../Accordion/designerComponent.vue'
import backAdviceComponentModel from '../Accordion/backAdviceComponent.vue'
import financeDepartComponentModel from '../Accordion/financeDepartComponent.vue'
import medicalDepartComponentModel from '../Accordion/medicalDepartComponent.vue'
export default {
    name:"medicalOrder",
    components:{
        "cust-order":CustNameOrderidModel,
        "price-list":moneyComponentModel,
        "sheet-list":AccordionModel,
        "designer-model":DesignerModel,
        "back-adivice":backAdviceComponentModel,
        "finance-model":financeDepartComponentModel,
        "medical-model":medicalDepartComponentModel
    },
    data(){
        return{
            title:"医疗订单详情",
            storeDesigner:"",//下店设计师
            remark:"",//备注
            adviceDesigner:"",
            backAdvice:"",
			submitTime:"",//财务部提交时间
            mainContentShow:"true",//生命体征显示，主页面隐藏
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
                },
                {
                    name:"实际支付",
                    money:0
                },
            ],
            PayProject:[{
                differ:"pay",
                name:'意向项目',
                id:1,
                numPay:0,
                getDetail:[],
            }],
            giveProject:[{
                name:'赠送项目',
                differ:"give",
                id:2,
                numGive:0,
                getDetail:[],
            }],
            interestProject:[{
                name:'感兴趣项目',
                id:3,
                numInterest:0,
                getDetail:[],
            }],
            getData:{
                manageName:"设计部",
                distinguish:"Service",
                designerAssistant_name:"",
                beforeCustomerServiceStaff_name:"",
                storeDesigner:"",
                remark:"",
                adviceDesigner:"",
                backAdvice:"",
                isShow:"show",
                imagePhotoObj:{
                    iconName:"medical_photo",
                    chineaseName:"术前照",
                    photoArrlist:[]
                },
                imageInspectionPhotoObj:{
                    iconName:"inspection-icon",
                    chineaseName:"欠条上传",
                    receiveMoneyRemark:"",
                    accomodationRemark:"",
                    photoArrlist:[]
                },
            },
            backAdviceModel:{
                getBackAdvice:[
                    {
                        iconName:"back_from_de",
                        departmentName:"设计部",
                        AdviceContent:""
                    },
                    {
                        iconName:"all_back_medical",
                        departmentName:"医疗部",
                        AdviceContent:""
                    },
                    {
                        iconName:"all_back_service",
                        departmentName:"客服部",
                        AdviceContent:""
                    },
                ]
            },
            medicalModel:{
                applyBook:{
                    iconName:"ApplyInformation",
                    chineaseName:"知情同意书",
                    photoArrlist:[]
                },
                inspiration:{//化验单
                    iconName:"inspection-icon",
                    chineaseName:"化验单",
                    photoArrlist:[]
                },
                during_writer:"",//术中填写人
                during_content:"",//术中情况
                after_writer:"",//术后填写人
                afer_content:"",//术后情况
                attention:"",//注意事项
                translater:"",//翻译者
                use_time:"",//手术用时
                anesthetist_name:"",//麻醉师
                doctor_name:"",//操作医师
                heat:"",//体温   以下是生命体征表字段
                puse:"",//	脉搏
                breathe:"",//	呼吸
                blood_pressure:"",//	血压
                disease_his:"",//	既往史
                fetation_date:"",//	怀孕
                end_period:"",//	末期月经
                allergy:"",//	药物过敏史
                eat_drug:"",//	近期口服药物，保健品
                on_chest:"",//	上胸围
                under_chest:"",//	下胸围
                on_waist:"",//	上腹围
                m_waist:"",//	中腹围
                under_waist:"",//	下腹围
                hipline:"",//	臀围
                on_leg:"",//	大腿上围
                m_leg:"",//	大腿中围
                under_leg:"",//	大腿下围
                remarks:"",//	术前备注
                medical_remark:""//医疗备注
            }
        }
    },
    created:function(){
        const orderid=this.$route.query.orderid;
        const userId=localStorage.getItem("userid")
        const url=this.$Url.domainName + this.$Url.ports.getOrderDetailPort;
        const QueryData=this.$qs.stringify({
            orderId:orderid,
            userId:userId
        })
        this.FetchData(url,QueryData)
    },
    methods:{
        FetchData(url,QueryData){
            const _this=this;
            this.$http.post(url,QueryData).then((res)=>{
                        console.log(res)
						const result=res.data.order;
						_this.submitTime=res.data.up_finishtime//财务部提交时间
                        _this.setDataCustName.orderId=res.data.orderId;//订单号
                        _this.setDataCustName.cust_name=result.cust_name;//客户名
                        //<...............项目模块...................>
                        _this.PayProject[0].getDetail=result.v2PayProject;//意向项目
                        _this.giveProject[0].getDetail=result.v2GiveProject;//赠送项目
                        _this.interestProject[0].getDetail=result.v2NextProject;//感兴趣项目
                        _this.PayProject[0].numPay=_this.sumProjectNumber(result.v2PayProject);//意向项目数量
                        _this.giveProject[0].numGive=_this.sumProjectNumber(result.v2GiveProject);//赠送项目数量
                        _this.interestProject[0].numInterest=_this.sumProjectNumber(result.v2NextProject);//感兴趣项目数量


                        //<.................金额模块...................>
                        const differPrice=_this.PriceArray
                        _.forEach(_this.PayProject[0].getDetail,element => {
                            differPrice[0].money+=element.original_price;//合计
                        });
                        differPrice[1].money=Number(result.amount);//金额
                        differPrice[2].money=Number(result.subscription);//订金
                        differPrice[3].money=Number(result.fact_pay);//实际支付
                        //<...................设计部模块...................>
                        const designerRoot=_this.getData;
                        designerRoot.storeDesigner=result.down_shop_designer_name;//下店设计师
                        designerRoot.remark=result.remark;//备注
                        designerRoot.adviceDesigner=result.design_advise;//设计师建议
                        designerRoot.designerAssistant_name=result.designerAssistant_name;//设计师助理
                        designerRoot.beforeCustomerServiceStaff_name=result.beforeCustomerServiceStaff_name;//客服人员
                        //<...................财务部模块...................>
                        designerRoot.imageInspectionPhotoObj.receiveMoneyRemark=result.rec_remark//收款备注
                        designerRoot.imageInspectionPhotoObj.accomodationRemark=result.rec_remark//欠单备注
                        designerRoot.imageInspectionPhotoObj.photoArrlist.push(result.orderPic)//欠条上传图片显示
                        //<...................医疗部模块...................>
                        const medicalRoot=_this.medicalModel;
                        medicalRoot.during_writer=result.during_writer
                        medicalRoot.during_content=result.during_content
                        medicalRoot.after_writer=result.after_writer
                        medicalRoot.afer_content=result.afer_content
                        medicalRoot.attention=result.attention
                        medicalRoot.translater=result.translater
                        medicalRoot.use_time=result.use_time
                        medicalRoot.anesthetist_name=result.anesthetist_name
                        medicalRoot.doctor_name=result.doctor_name
                        medicalRoot.heat=result.heat
                        medicalRoot.puse=result.puse
                        medicalRoot.breathe=result.breathe
                        medicalRoot.blood_pressure=result.blood_pressure
                        medicalRoot.disease_his=result.disease_his
                        medicalRoot.fetation_date=result.fetation_date
                        medicalRoot.end_period=result.end_period
                        medicalRoot.allergy=result.allergy
                        medicalRoot.eat_drug=result.eat_drug
                        medicalRoot.on_chest=result.on_chest
                        medicalRoot.under_chest=result.under_chest
                        medicalRoot.on_waist=result.on_waist
                        medicalRoot.m_waist=result.m_waist
                        medicalRoot.under_waist=result.under_waist
                        medicalRoot.hipline=result.hipline
                        medicalRoot.on_leg=result.on_leg
                        medicalRoot.m_leg=result.m_leg
                        medicalRoot.under_leg=result.under_leg
                        medicalRoot.remarks=result.remarks
                        medicalRoot.medical_remark=res.data.medical_remark//医疗备注
                        //<......................回访建议模块...................>
                        _this.backAdviceModel.getBackAdvice[0].AdviceContent=result.return_visit_advise1;//设计部建议
                        _this.backAdviceModel.getBackAdvice[1].AdviceContent=result.return_visit_advise2;//医疗部建议
                        _this.backAdviceModel.getBackAdvice[2].AdviceContent=result.return_visit_advise3;//客服部建议



              }).then((err)=>{

              })
        },
        routerBack(){
            this.$router.back(-1)
        },
        //控制生命体征显示后、主页面显示隐藏
        childByValue: function (childValue) {
            //childValue就是子组件传过来的值
            this.mainContentShow = childValue;
      }
    }
}
</script>

<style scoped>
@import '../../../../static/StyleModel/allOrderStyle/ordernewmodification.css';
@import '../../../../static/StyleModel/unMadeOrder/orderDistributionDetails.css';
</style>
