<template>
    <div id="RightPreOrder">
        <!--主界面部分-->
        <div class="mui-inner-wrap">
            <div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper" style="margin-top: 0;">
                <div class="total_num" style="text-align:left;"><span style="text-align:left;">总数量：</span><span class="set_all_num">{{count}}</span></div>
                <!--下拉刷新容器-->
                <div id="pullrefresh" class="mui-scroll-wrapper main-body" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }" style="z-index: 0;padding-top:2rem;overflow-y:auto;background-color:#fff;margin-top:.85rem">
                    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">                            
                        <!--数据列表-->
                        <div class="oUl mui-table-view mui-table-view-chevron">
                            <sheet-list v-for="(item,index) in ListArr" :item="item" :key="index"></sheet-list>
                        </div>
                    </mt-loadmore>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PrelistComponent from './Prelist.vue'
import {Indicator} from 'mint-ui';
export default {
    name:"RightPreOrder",
    components:{
         "sheet-list":PrelistComponent
    },
    data(){
        return{
            count:"",
            ListArr:[{
                isPre:"",
                OrderList:[]
            }],
            //可以进行上拉
            allLoaded: false,
            //是否自动触发上拉函数
            isAutoFill: false,
            wrapperHeight: 0,
            courrentPage:1,
        }
    },

    created:function(){
            const $userid=localStorage.getItem('userid');
            const $roleid=localStorage.getItem("roleid");
            const url=this.$Url.domainName + this.$Url.ports.preOrderPort;
            const rank="";
            const flag=15;
            const areaid="";
            const setData=this.$qs.stringify({
                userID:$userid,
                roleID:$roleid,
                areaid:areaid,
                flag:flag,
                pageNow:this.courrentPage
            });
            this.FechData(url,setData);
    },
    mounted() {
        // 父控件要加上高度，否则会出现上拉不动的情况
        this.wrapperHeight =
        document.documentElement.clientHeight -
        this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods:{
            FechData:function(url,setData){
                const _this=this;
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                this.$http.post(url,setData).then((res)=>{
                    _this.allLoaded = false; // 可以进行上拉
                    _this.courrentPage = 1;
                    // _this.$refs.loadmore.onTopLoaded();
                    _this.count=res.data[0].count//总数量
                    Indicator.close()
                    _.forEach(res.data[0].result,(value, key) => {
                        _this.ListArr[0].OrderList.push(value)
                    });
                    console.log(_this.ListArr[0].OrderList) 
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
                const $baseUrl=localStorage.getItem("baseUrl");
                const url=$baseUrl+'/v2_order/selectIntentOrders.do';
                const rank="";
                const flag=15;
                const areaid="";
                const setData=this.$qs.stringify({
                    userID:$userid,
                    roleID:$roleid,
                    areaid:areaid,
                    flag:flag,
                    pageNow:_this.courrentPage,
                });
                this.$http.post(url,setData).then((res)=>{
                    _.forEach(res.data[0].result,(value, key) => {
                        _this.ListArr[0].OrderList.push(value);
                    });
                    //console.log( _this.OrderListArr);
                    if (res.data[0].result.length==0||res.data[0].result.length==1) {
                        _this.allLoaded = true; // 若数据已全部获取完毕
                    }
                    _this.courrentPage++;
                    _this.$refs.loadmore.onBottomLoaded();

                }).then((err)=>{
                    // console.log(err)
                })
            }
        }
    }
</script>