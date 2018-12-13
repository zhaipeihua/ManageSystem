<template>
    <div id="editOrder" style="margin-top:.89rem;">
        <div class="mainContent" v-if="isMainShow">
           <mt-header fixed title="意向单详情" style="height:.85rem!important;">
                <router-link to="/PreorderViewModel" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
            <div class="" style="background-color: #fff!important;">
                <form method="POST" enctype="multipart/form-data" id="form1">
                    <div class="name same">
                        <label>客户姓名：</label>
                        <a >{{cust_name}}</a>
                    </div>
                    <div class="same" style="border-top: none!important;">
                        <label style="float: left" class="icon_com"></label>
                        <a class="">意向项目</a>
                    </div>

                    <project-list :linkProject="totalproject"></project-list>

                    <div @click="selectProject" class="click" style="color:#999;float: left;width:100%;">
                        <label></label><a>添加项目(可多选)</a>
                    </div>
                    <div class="same">
                        <mt-switch v-model="mt_switch" style=""></mt-switch>
                        <span style="font-size:.2rem!important;margin-left:.2rem">订单完成回访之前是否需要与对应咨询师沟通</span>
                    </div>
                    <div class="money same">
                        <input type="hidden" class="consultant_id"/>
                        <label>金&emsp;&emsp;额：<span style="color: #f00">&yen;&nbsp;</span></label>
                        <input type="number" class="designerPort" style="color:gray;" placeholder="请输入金额" ime-mode:disabled onkeydown="if(event.keyCode==13)event.keyCode=9" onKeypress="if
                                            ((event.keyCode<48 || event.keyCode>57)) event.returnValue=false">
                            </div>
                            <div class="payment same">
                                <label>订&emsp;&emsp;金：<span style="color: #f00">&yen;&nbsp;</span></label>
                                <input type="number" class="subscription" placeholder="请输入订金" style="color:gray" ime-mode:disabled onkeydown="if(event.keyCode==13)event.keyCode=9" onKeypress="if
                                            ((event.keyCode<48 || event.keyCode>57)) event.returnValue=false">
                    </div>
                    <div class="same" style="border-top: none!important;">
                        <label style="float: left" class="icon_com"></label>
                        <a>赠送项目</a>
                    </div>
                    <div class="nPayMoney"></div>
                    <div class="click" style="color:#999;float: left;width:100%;">
                        <label></label><a>添加项目(可多选)</a>
                    </div>
                    <div class="chooseDesinger dffer">
                        <label class="icon_com_pic"></label>
                        <a>下店设计师：</a>
                    </div>
                    <div class="addItem">
                        <div class="send same">
                            <label class="transB" style="float: left;"></label>
                            <a>抄送通知</a>
                        </div>
                        <div>
                            <div class="addIcon">
                                <span id="clickAdd"></span>
                                <p>添加</p>
                            </div>
                        </div>
                    </div>
                    <div class="btns">
                        <mt-button size="normal" type="primary">以往更新记录</mt-button>
                        <mt-button size="normal" type="primary" style="margin: 0 .2rem!important;">更新订单</mt-button>
                        <mt-button size="normal" type="primary">生成订单</mt-button>
                    </div>
                    <router-link to="/slideUpPhotoesView">上传图片</router-link>
                </form>
            </div>
        </div>
        <first-project  v-show="projectModeShow" v-on:addProjectEvent="getAddProject"  :fromParent="sendChild" ref="child"></first-project>
        <!-- <second-project :selectFirstProject="ProjectObj" v-show="mt_switch"></second-project>
        <first-project :selectFirstProject="ProjectObj" v-show="mt_switch"></first-project> -->
    </div>
</template>
<script>
// var storeKey = "projectObj";
// var storage = {
//     fetch:function(){
//         return JSON.parse(sessionStorage.getItem(storeKey) || "[]")
//     },
//     save:function(items){
//         sessionStorage.setItem(storeKey,JSON.stringify(items));
//     }
// }
import bus from '../../../eventBus.js'
import addProjectModel from '../Accordion/addProjectComponent.vue'
import FirstProjectComponent from '../Accordion/selectFirstProjectComponent.vue'
export default {
    name:"editOrder",
    components:{
        "project-list":addProjectModel,
        "first-project":FirstProjectComponent,
    },
    data(){
        return{
            mt_switch:false,
            projectModeShow:false,
            cust_name:"",
            isMainShow:true,
            sendChild:{
                firstShow:true,
                ArrayProject:[]
            },
            addPayProjectObj:[],
            newProjectObj:[],
            totalproject:[],
            //items:storage.fetch(),
            // PayProject:[{
            //     differ:"pay",
            //     name:'意向项目',
            //     id:1,
            //     numPay:"",
            //     getDetail:[],
            // }],
            // giveProject:[{
            //     name:'赠送项目',
            //     differ:"give",
            //     id:2,
            //     numGive:"",
            //     getDetail:[],
            // }]
        }
    },
    created(){
        const getOrderid=this.$route.query.orderid;
        const initUrl=this.$Url.domainName + this.$Url.ports.selectIntentOrderPort;
        this.initFeachData(initUrl,getOrderid);
    },
    methods:{
        initFeachData(url,getOrderid){
            const _this=this;
            const QueryData=this.$qs.stringify({
                  orderid:getOrderid
            })
            this.$http.post(url,QueryData).then((res)=>{
                const result=res.data;
                _this.cust_name=result.cust_name;
                // console.log(result)
                let _self_obj;
                _.forEach(result.v2PayProject,element => {
                    _self_obj=_this.createObjc(element.project_name,element.project_id,element.original_price,element.remark,element.design_price,element.number);
                    _this.addPayProjectObj.push(_self_obj)
                    _this.totalproject.push(_self_obj)
                });
                
            }).then((err)=>{

            })
        },
        selectProject(){
            this.isMainShow=false;

            this.projectModeShow=true;

            // const firstUrl=this.$Url.domainName + this.$Url.ports.selectFirstCategoryListPort;
            this.$refs.child.init

            // const Orderid=this.$route.params.orderid;
            // localStorage.setItem("PreOrderid",Orderid)
            // this.$router.push('/selectFirstProjectComponentTemplate')
        },
        //得到子组件添加回来的项目
        getAddProject(data){
            const _this=this;
            // _this.addPayProjectObj=[]
            // _this.totalproject=[]
            _this.newProjectObj=data.selectArray.length==0?_this.addPayProjectObj[0]:data.selectArray
            _this.totalproject= _.concat(_this.addPayProjectObj,data.selectArray);
            this.isMainShow=data.ShowMain
            console.log(_this.totalproject);
        },
        
    },


}
</script>
<style scoped>
@import '../../../../static/StyleModel/allOrderStyle/addintentionorder.css';
</style>
