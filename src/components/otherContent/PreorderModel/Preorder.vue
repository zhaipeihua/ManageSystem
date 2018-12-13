<template>
    <div id="preorder">
        <mt-header fixed title="未成单列表" style="height:.85rem!important;">
            <div @click="routerback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
            <router-link to="/SearchPreOrderView" slot="right" style="margin-right:.3rem">
                <mt-button class="mintui mintui-search">&nbsp;</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="letMaskShow">&nbsp;</mt-button>
        </mt-header>
        <div id="sliderSegmentedControl" style="position:fixed;width:100%;z-index:1;">
            <!--tab-->
            <div class="myTabNav">
                <router-link tag="a" class="myTab" to="/PreorderViewModel">
                    意向单
                </router-link>
                <router-link tag="a" class="myTab" id="department" to="/PreorderViewModel/RightPreOrderView">
                    跑单
                </router-link>
            </div>
        </div>
        
        <keep-alive>
           <router-view></router-view>
            <!-- <transition :name="transitionName">
                <router-view class="Router"></router-view>
            </transition> -->
            
        </keep-alive>


        <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade"
            position="right">
            <!-- <child></child> -->
               <SideBarComponent></SideBarComponent>
        </mt-popup>
    </div>
</template>
<script>

import LeftPreOrderView from './LeftPreOrder.vue'

import RightPreOrderView from './RightPreOrder.vue'

import SideBarComponent from '../SideBar/SideChoose.vue'
// import SearchPreOrderView from './SearchPreOrder.vue'
export default {
    name: 'preorder',
    data(){
        return{
            title:"",
            popupVisible:false,
            transitionName: 'slide-left'
        }
        
    },
    components:{
        LeftPreOrderView,
        RightPreOrderView,
        SideBarComponent
    },
    methods:{
        letMaskShow:function(){
            this.popupVisible=true;
            this.maskShow=!this.maskShow;
        },
        routerback: function () {
            this.$router.push({path: '/CustomManageViewPage'});
        },
    },
    watch: {
        '$route' (to, from) {
            console.log(to.path)
            if(to.path=="/PreorderViewModel"){
                sessionStorage.setItem("currentFlag",0)
                sessionStorage.setItem("isPre","preLeft")
            }else if(to.path=="/PreorderViewModel/RightPreOrderView"){
                sessionStorage.setItem("currentFlag",15)
                sessionStorage.setItem("isPre","")
            }
            // const toDepth = to.path.split('/').length
            // const fromDepth = from.path.split('/').length
            // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
}
</script>
<style scoped>

@import '../../../../static/StyleModel/unMadeOrder/UnmadeOrderList.css';
@import '../../../../static/IconFont/iconfont.css';
.Router {
    transition: all .5s ease;
    width: 100%;
}

.slide-left-enter,
 .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
.router-link-exact-active{
    background: -ms-linear-gradient(top, #04a7ff, #0486fe);
    background: -moz-linear-gradient(top, #04a7ff, #0486fe);
    background: -webkit-gradient(linear, 0% 0%, 0% 100%,from(#04a7ff), to(#0486fe));
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#04a7ff), to(#0486fe));
    background: -webkit-linear-gradient(top, #04a7ff, #0486fe);
}
</style>

