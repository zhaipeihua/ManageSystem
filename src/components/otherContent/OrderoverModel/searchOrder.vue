<template>
    <div id="searchOrder" style="background:#fff;">
            <div class="mint-searchbar" style="position:fixed;width:100%;top:0;height:auto;z-index:1">
                <div class="mint-searchbar-inner">
                    <i class="mintui mintui-search"></i>
                    <input
                    @input="FeachData"
                    @click="searchRecordShow"
                    type="search"
                    v-model="currentValue"
                    :placeholder="placeholder"
                    class="mint-searchbar-core">
                </div>
                <a
                    class="mint-searchbar-cancel"
                    @click="searchCancel"
                    v-show="visible"
                    v-text="cancelText">
                </a>
            </div>
            <!-- <mt-search v-model="currentValue" v-on:input="FeachData" style="position:fixed;width:100%;top:0;height:auto;z-index:1" placeholder="请输入订单号或姓名搜索"></mt-search> -->
            <div id="pullrefresh" class="mui-scroll-wrapper main-body" ref="wrapper" :style="{ height: (wrapperHeight-100) + 'px' }"  style="z-index: 0;overflow-y:auto;background-color:#fff;margin-top:.85rem">
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                    <!--数据列表-->
                    <div class="oUl mui-table-view mui-table-view-chevron">
                        <sheet-list v-for="(item,index) in ListArr" :item="item" :key="index"></sheet-list>
                    </div>
                </mt-loadmore>
           </div>
    </div>
</template>
<script>
import PrelistComponent from '../PreorderModel/Prelist.vue'
export default {
    name:"searchOrder",
    components:{
          "sheet-list":PrelistComponent
    },
    created(){
        this.ListArr[0].isPre=sessionStorage.getItem("isPre")
        console.log(this.ListArr[0].isPre)
    },
    data(){
        return{
            currentValue:"",
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
            searchShow:true,
            visible:false,
            placeholder:"请输入订单号或姓名搜索",
            cancelText:"取消"
        }
    },
    methods:{
        FeachData(){
                const _this=this;
                const rank="";
                const flag=sessionStorage.getItem("currentFlag");
                const areaid="";
                const $userid=localStorage.getItem('userid')
                const $baseUrl=localStorage.getItem("baseUrl");
                const url=$baseUrl+'/v2_order/selectIntentOrders.do';
                const $roleid=localStorage.getItem('roleid');
                const setData=this.$qs.stringify({
                    userID:$userid,
                    roleID:$roleid,
                    areaid:areaid,
                    flag:flag,
                    searchCondition:_this.currentValue,
                    pageNow:_this.courrentPage,
                    isSearch:'isSearch'
                });
        
                _this.ListArr[0].OrderList=[]//搜索清空数组
                this.$http.post(url,setData).then((res)=>{
                    _this.allLoaded = false; // 可以进行上拉
                    _this.courrentPage = 1;
                    // _this.$refs.loadmore.onTopLoaded();
                    if(res.data==""||res.data==null||res.data==undefined){
                        return;
                    }else{
                        _.forEach(res.data[0].result,(value, key) => {
                            _this.ListArr[0].OrderList.push(value)
                        });
                    }
                }).then((err)=>{
                    // console.log(err)
                })
                
         },
         searchRecordShow(){
            let _this=this;
             _this.visible=true;
         },
         searchCancel(){
            let _this=this;
            _this.visible=false;
            this.$router.back(-1)
        },
        mounted() {
            // 父控件要加上高度，否则会出现上拉不动的情况
            this.wrapperHeight =document.documentElement.clientHeight -this.$refs.wrapper.getBoundingClientRect().top;
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
            const rank="";
            const flag=sessionStorage.getItem("currentFlag");
            const areaid="";
            const $userid=localStorage.getItem('userid')
            const $baseUrl=localStorage.getItem("baseUrl");
            const url=$baseUrl+'/v2_order/selectIntentOrders.do';
            const $roleid=localStorage.getItem('roleid');
            const setData=this.$qs.stringify({
                userID:$userid,
                roleID:$roleid,
                areaid:areaid,
                flag:flag,
                searchCondition:_this.currentValue,
                pageNow:_this.courrentPage,
                isSearch:'isSearch'
            });
            this.$http.post(url,setData).then((res)=>{
                    if(res.data==""||res.data==null||res.data==undefined){
                        return
                    }else{
                         _.forEach(res.data[0].result,(value, key) => {
                                _this.ListArr[0].OrderList.push(value)
                            });
                    }
                    if (res.data[0].result.length==1||res.data[0].result.length==0) {
                        _this.allLoaded = true; // 若数据已全部获取完毕
                    }
                _this.courrentPage++;
                _this.$refs.loadmore.onBottomLoaded();

            }).then((err)=>{
                // console.log(err)
            })
        }
    },
}
</script>

