<template>
    <div id="marketOrder" class="mg_top">
        <headerOrder></headerOrder>
        <div class="total_num" style="text-align:left;"><span style="text-align:left;font-size:.3rem;" v-html="'总数量：'+count"></span></div>
        <mt-tab-container  class="mui-scroll-wrapper main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }" style="z-index: 0;padding-top:.89rem;overflow-y:auto;background-color:#fff;margin-top:.85rem">
            <mt-tab-container-item >
                <!-- 下拉刷新容器 -->
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">                            
                    <!-- 数据列表 -->
                    <sheet-list v-for='(item,index) in marketArray' :item="item" :key="index"></sheet-list>
                </mt-loadmore>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import containerComponent from './containterComponent.vue'
import headerOrderComponent from '../../header/headOrderOver.vue'
import {Indicator} from 'mint-ui';
export default {
   name:"marketOrder",
   components:{
        "sheet-list":containerComponent,
        'headerOrder':headerOrderComponent,
   },
   data(){
       return{
            marketArray:[{
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
            popupVisible:false,

       }
   },
   created:function(){
     //部门名称
     this.MarketFechData();
   },
   methods:{
            letMaskShow:function(){
                this.popupVisible=true;
                this.maskShow=!this.maskShow;
            },
            routerback(){
                this.$router.push({path: '/CustomManageViewPage'});
            },
            mounted() {
                // 父控件要加上高度，否则会出现上拉不动的情况
                this.wrapperHeight =document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            },
            MarketFechData(){
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
                    pageNow:_this.courrentPage
                });
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                _this.marketArray[0].OrderList=[];
                this.$http.post(url,setData).then((res)=>{
                    _this.allLoaded = false; // 可以进行上拉
                    _this.courrentPage = 1;
                    //_this.$refs.loadmore.onTopLoaded();
                    _this.count=res.data[0].count
                    Indicator.close()
                    _.forEach(res.data[0].result,(value, key) => {
                        _this.marketArray[0].OrderList.push(value);
                        _this.marketArray[0].count=res.data[0].count
                    });
                    console.log(_this.marketArray[0].OrderList) 
                }).then((err)=>{
                    // console.log(err)
                })
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
                    pageNow:_this.courrentPage
                });
                this.$http.post(url,setData).then((res)=>{
                    _.forEach(res.data[0].result,(value, key) => {
                            _this.marketArray[0].OrderList.push(value)
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
   beforeRouteEnter (to, from, next) {
            next(vm => {
                // vm.$router.push('/orderAllDepartmentListView')
                // console.log(vm);  //vm为vue的实例
                // console.log('组件路由钩子beforeRouteEnter的next');
                });
        }
   
}
</script>

<style scoped>
.total_num{
    text-align: left;
    position: fixed;
    width: 92%;
    height: .89rem;
    line-height: .89rem;
    top: .85rem;
    background: #fff;
    z-index: 1;
    border-bottom: 1px solid #f2f2f2;
    padding: 0 .3rem;
}
</style>
