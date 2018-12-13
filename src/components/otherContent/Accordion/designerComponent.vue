<template>
    <div id="templateDesigner" style="margin:.2rem 0;background:#efeff4;">
         <div class="went_to_store" style="background:#fff;margin-bottom:.2rem;">
            <label style="float: left" class="icon_com_pic"></label>
            <span href="###" style="float: left">下店设计师：{{data_item.storeDesigner}}</span>
         </div>
        <div class="sheet-header" @click="toggleSheet" style="background:#fff;">
            <!-- 意向项目 -->
            <div v-if="data_item.distinguish==='Designer'">
                <div v-show="true" class="item">
                    <span class="transB servicer"></span>
                    <span class="sheet-header-span">{{data_item.manageName}}</span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                     <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
            <div v-else-if="data_item.distinguish==='Finance'">
                <div v-show="true" class="item">
                <span class="transB servicer"></span>
                    <span class="sheet-header-span">{{data_item.manageName}}</span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                    <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
            <div v-else-if="data_item.distinguish==='Medical'">
                <div v-show="true" class="item">
                    <span class="transB servicer"></span>
                    <span class="sheet-header-span">{{data_item.manageName}}</span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                    <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
            <div v-else-if="data_item.distinguish==='Service'">
                <div v-show="true" class="item">
                   <span class="transB servicer"></span>
                    <span class="sheet-header-span">{{data_item.manageName}}</span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                     <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
        </div>

        <div v-if="showSheets" style="background:#fff;">
            <div class="notice">
                <div class="item">
                    <span class="transB designer_write"></span>设计师备注
                </div>
                <div class="noticeBox">
                    <p class="remark" v-html="data_item.remark"></p>
                </div>
            </div>
            <div class="backAdvice">
                <div class="item"><span class="transB backAdvice-tit"></span>设计师建议</div>
                <div class="seggestion">
                    <p class="designAdvise" v-html="data_item.adviceDesigner"></p>
                </div>
            </div>
            <div class="extrBox">
                <imgview :getPhoto="getData.imagePhotoObj"></imgview>
            </div>
            <div v-show="data_item.isShow==='show'">
                <div class="item" style="padding: 0 .2rem">
                    <span class="transB designerAssistant_name" style="float: left;"></span>设计师助理:{{data_item.designerAssistant_name}}
                </div>
                <div class="item" style="padding: 0 .2rem">
                    <span class="transB servicer" style="float: left;"></span>客服人员:{{data_item.beforeCustomerServiceStaff_name}}
                </div>
            </div>
             
        </div>
</div>
</template>
<script>
import AccordionModel from '../Accordion/accordion.vue'
import EnlargeImageView from '../DifferentConponent/enlargeImage.vue'
export default {
    name:"templateDesigner",
    components:{
        "imgview":EnlargeImageView,
        "sheet-list":AccordionModel,
    },
    data(){
        return{
            showSheets:false,
            data_item:{}
        }
    },
    props:{
        getData:{
            type:Object
        }
    },
    methods:{
        //向右的小图标动画
        toggleSheet(index){
            this.$refs.toggleicon.style.transform = !this.showSheets ? 'rotate(90deg)' : 'rotate(0)'
            this.showSheets = !this.showSheets//开关，是否折叠
        },
    },
    created(){
        const _this=this;
        _this.data_item=this.getData;
    }
}
</script>
<style>
@import '../../../../static/IconFont/iconfont.css';
@import '../../../../static/StyleModel/allOrderStyle/ordernewmodification.css';
@import '../../../../static/StyleModel/unMadeOrder/orderDistributionDetails.css';
</style>
