<template>
    <div id="AllDepartment">
        <headerOrder></headerOrder>
        <mt-navbar v-model="selected" :fixed=true style="margin-top:.85rem;margin-bottom: .2rem;">
            <mt-tab-item v-for="(name,index) in DepartmentName" :id="index+1" :key="index" @click.native='FechData(index+1)'>{{name.department}}</mt-tab-item>
            <div class="total_num" style="text-align:left;"><span style="text-align:left;">总数量：</span><span class="set_all_num">{{count}}</span></div>
        </mt-navbar>
        <mt-tab-container v-model="selected" class="mui-scroll-wrapper main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }" style="z-index: 0;padding-top:2rem;overflow-y:auto;background-color:#fff;margin-top:.85rem">
            <mt-tab-container-item v-for="(n,i) in DepartmentName" :id='i+1' :key="i" >
                <!--下拉刷新容器-->
                    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">                            
                        <!--数据列表-->
                        <sheet-list v-for='(item,index) in OrderArray' :item="item" :key="index"></sheet-list>
                    </mt-loadmore>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import headerOrderComponent from '../../header/headOrderOver.vue'
import containerComponent from './containterComponent.vue'
import {Indicator} from 'mint-ui';
import mtTabItem from './mt-tab-item'//tab汉字JSON
export default {
   name:"AllDepartment",
   components:{
        'headerOrder':headerOrderComponent,
        "sheet-list":containerComponent,
   },
   data(){
       return{
            selected:1,
            DepartmentName:[],
            OrderArray:[{
                count:'',
                OrderList:[]
            }],
            count:"",
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            courrentPage:1,

       }
   },
   created:function(){
     const _this=this;
     //部门名称
     this.DepartmentName=mtTabItem;
     const departmentId=localStorage.getItem('id_depart')=="" || localStorage.getItem('id_depart')=='null' || localStorage.getItem('id_depart')=='undefined'? 1: localStorage.getItem('id_depart');
     this.selected=Number(departmentId);
     this.FechData(departmentId);
   },
   methods:{
            mounted() {
                // 父控件要加上高度，否则会出现上拉不动的情况
                this.wrapperHeight =document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            },
            FechData(id_depart){
                const _this=this;
                const $userid=localStorage.getItem('userid');
                const $roleid=localStorage.getItem("roleid");
                const url=this.$Url.domainName + this.$Url.ports.getOrderListPort;
                const rank="";
                const areaid="";
                const setData=this.$qs.stringify({
                    userid:$userid,
                    roleid:$roleid,
                    areaid:areaid,
                    rank:rank,
                    departmentid:id_depart,
                    pageNow:_this.courrentPage
                });
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                _this.OrderArray[0].OrderList=[];
                this.$http.post(url,setData).then((res)=>{
                    _this.allLoaded = false; // 可以进行上拉
                    _this.courrentPage = 1;
                    //_this.$refs.loadmore.onTopLoaded();
                    _this.count=res.data[0].count
                    Indicator.close()
                    _.forEach(res.data[0].result,(value, key) => {
                        switch (Number(id_depart)){
                            case 1: {
                                    _this.OrderArray[0].OrderList.push(value);
                                    _this.OrderArray[0].count=res.data[0].count
                                };
                            break;
                            case 2:{
                                    _this.OrderArray[0].OrderList.push(value);
                                    _this.OrderArray[0].count=res.data[0].count
                                };
                            break;
                            case 3:{
                                    _this.OrderArray[0].OrderList.push(value);
                                    _this.OrderArray[0].count=res.data[0].count
                                };
                            break;
                            case 4:{
                                    _this.OrderArray[0].OrderList.push(value);
                                    _this.OrderArray[0].count=res.data[0].count
                                };
                            break;
                            case 5:{
                                    _this.OrderArray[0].OrderList.push(value);
                                    _this.OrderArray[0].count=res.data[0].count
                                }
                            break;
                        }
                        
                    });
                }).then((err)=>{
                    // console.log(err)
                })
                localStorage.setItem('id_depart',id_depart)
                _this.departmentid=id_depart;
            },
            //下拉刷新
            loadTop() {
                 this.loadMore();
                
            },
            // 上拉加载
            loadBottom() {
                this.loadMore();
            },
            // 加载更多
            loadMore() {
                const _this=this;
                const $userid=localStorage.getItem('userid');
                const $roleid=localStorage.getItem("roleid");
                const url=this.$Url.domainName + this.$Url.ports.getOrderListPort;
                const rank="";
                const areaid="";
                const setData=this.$qs.stringify({
                    userid:$userid,
                    roleid:$roleid,
                    areaid:areaid,
                    rank:rank,
                    departmentid:_this.departmentid,
                    pageNow:_this.courrentPage
                });
                this.$http.post(url,setData).then((res)=>{
                    _.forEach(res.data[0].result,(value, key) => {
                        switch (Number(_this.departmentid)){
                            case 1: _this.OrderArray[0].OrderList.push(value);
                            break;
                            case 2:_this.OrderArray[0].OrderList.push(value);
                            break;
                            case 3:_this.OrderArray[0].OrderList.push(value);
                            break;
                            case 4:_this.OrderArray[0].OrderList.push(value);
                            break;
                            case 5:_this.OrderArray[0].OrderList.push(value);
                            break;
                        }
                    });
                    if (res.data[0].result.length==0||res.data[0].result.length==1) {
                        _this.allLoaded = true; // 若数据已全部获取完毕
                    }
                    _this.courrentPage++;
                    _this.$refs.loadmore.onBottomLoaded();

                }).then((err)=>{
                    // console.log(err)
                })
            },
   },

}
</script>
<style scoped>
.total_num{
    text-align: left;
    position: fixed;
    width: 92%;
    height: .89rem;
    line-height: .89rem;
    top: 1.83rem;
    background: #fff;
    z-index: 1;
    /* padding: 0; */
    padding: 0 .3rem;
    border-bottom: 1px solid #f2f2f2;
}
</style>

