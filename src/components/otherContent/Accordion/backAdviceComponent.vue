<template>
    <div id="modelAdvice">
        <div class="backAdvice visit">
            <div class="item visit-title" @click="toggleSheet" style="border-bottom:1px solid #eee !important;">
                <span class="transB back_adivice"></span>回访建议
                <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
           </div>
            <div class="arr-visit" v-if="showSheets">
                <div class="design" v-for="(item,index) in adviceObj.getBackAdvice" :key="index">
                    <div class="back_to_advice design-line">
                        <span :class="item.iconName"></span>
                        <a class="set_word" v-html="item.departmentName"></a>
                    </div>
                    <div class="visit-box">
                        <div class="visit-content">
                            <p class="returnVisitAdvise" v-html="item.AdviceContent"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"modelAdvice",
    props:{
        getAdviceData:{
            type:Object
        }
    },
    data(){
        return{
            adviceObj:{},
            showSheets:false,
        }
    },
    created(){
       this.adviceObj=this.getAdviceData
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
.item{
    color: #444;
    font-size: .3rem;
    line-height: .98rem;
    height: .98rem;
    padding: 0 .2rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.all_back_advise{
	background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/huif2.png)
}

.all_back_medical{
	background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/medicaltreatment.png)
}
.all_back_service{
	background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/serv.png)
}
.design-line span{
	color: #444;
    display: inline-block;
    width: .3rem;
    height: .9rem;
    font-size: .3rem;
    float: left;
    margin-right: .1rem;
}
</style>
