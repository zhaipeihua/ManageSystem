<template>
    <div id="modelfinance" style="margin:.2rem 0;background:#efeff4">
        <div class="backAdvice visit">
            <div class="item" @click="toggleSheet">
                <span class="transB finance_icon"></span>财务部
                <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
           </div>
            <div class="arr-visit" v-if="showSheets">
                <div class="mui-collapse-content">
                    <div class="notice_cervice">
                        <div class="item" style="border-top:none!important;">
                            <span class="transB receive_money"></span>收款备注
                        </div>
                        <div class="noticeBox">
                            <textarea type="text" class="collection" readonly="readonly" unselectable="on" onfocus="this.blur()" :value="financeObj.imageInspectionPhotoObj.receiveMoneyRemark"></textarea>
                        </div>
                    </div>
                    <div class="thouhght">
                        <EnlargeImageView :getPhoto="financeObj.imageInspectionPhotoObj"></EnlargeImageView>
                        <div class="item" style="margin-top:.2rem;">
                            <span class="transB consideration"></span>欠单备注
                        </div>
                        <div class="noticeBox">
                            <textarea type="text" class="collection" readonly="readonly" unselectable="on" onfocus="this.blur()" :value="financeObj.imageInspectionPhotoObj.accomodationRemark"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EnlargeImageView from '../DifferentConponent/enlargeImage.vue'
export default {
    name:"modelfinance",
    components:{
        EnlargeImageView:EnlargeImageView
    },
    props:{
        getfinanceData:{
            type:Object
        }
    },
    data(){
        return{
            financeObj:{},
            showSheets:false,
        }
    },
    created(){
       this.financeObj=this.getfinanceData;
       console.log(this.financeObj.imageInspectionPhotoObj)
    },
    methods:{
        //向右的小图标动画
        toggleSheet(index){
            this.$refs.toggleicon.style.transform = !this.showSheets ? 'rotate(90deg)' : 'rotate(0)'
            this.showSheets = !this.showSheets//开关，是否折叠
        }
    }
}
</script>
<style scoped>
@import '../../../../static/IconFont/iconfont.css';
.transB{
    color: #444;
    display: inline-block;
    width: .3rem;
    height: .9rem;
    font-size: .3rem;
}
.finance_icon{
	background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/icon_cwb.png)
}
.receive_money{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/skbz.png)
}
.consideration{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/icon-qkbz.png)
}
.collection{
    width: 94%!important;
    min-height:1.8rem;
    padding-left:.22rem!important;
}
</style>
