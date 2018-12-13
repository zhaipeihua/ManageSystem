<template>
     <div id="orderOverHead">
        <mt-header fixed :title=msg style="height:.85rem!important;">
            <div @click="routerback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
             <router-link to="/searchOrderView" slot="right" style="margin-right:.3rem">
                <mt-button class="mintui mintui-search">&nbsp;</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="letMaskShow">&nbsp;</mt-button>
        </mt-header>


    <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade"
        position="right">
            <sideBar></sideBar>
    </mt-popup>
     </div>

</template>
<script>
import SideBarComponent from '../otherContent/SideBar/SideChoose.vue'
export default {
    name:"orderOverHead",
    components:{
         'sideBar':SideBarComponent
    },
    data(){
         return{
            msg:"已成单列表",
            popupVisible:false,
        }
    },
    methods:{
        routerback(){
            this.$router.push({path: '/CustomManageViewPage'});
        },
        letMaskShow:function(){
            this.popupVisible=true;
            this.maskShow=!this.maskShow;
        },
    }
}
</script>

<style>

</style>
