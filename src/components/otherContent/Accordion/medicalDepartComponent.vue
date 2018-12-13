<template>
    <div id="medicalDepartment" style="background:#fff;z-index:0">
        <mt-header fixed title="生命体征" v-if="isformShow" style="height:.85rem!important;">
            <div @click="changeShowStyle" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
        <div v-if="vitalSignsShow">
            <div class="item" @click="toggleSheet">
                <span class="transB medicaltreatment"></span>
                <label>医疗部</label>
                <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
            </div>
            <div  v-if="showSheets" style="margin-top: 0 !important;background: #fff;">
                <div class="advice">
                    <div class="item makePage" @click="changeShowStyle">
                        <span class="transB vitalsigns"></span>
                        <label for="">生命体征：</label>
                        <input type="text" readonly="readonly" unselectable="on" onfocus="this.blur()" placeholder="点击查看生命体征信息" style="width:60%"/>
                    </div>
                </div>
                <!-- 知情同意书 -->
               <EnlargeImageView :getPhoto="fromParentData.applyBook"></EnlargeImageView>
                <!-- 化验单 -->
               <EnlargeImageView :getPhoto="fromParentData.inspiration"></EnlargeImageView>
                <div class="medical_wr">
                    <div class="item">
                        <span class="transB ApplyInformation"></span>
                        <label for="">术中情况填写人:</label>
                        <a v-html="fromParentData.after_writer"></a>
                    </div>
                    <div class="item">
                        <span class="transB operation"></span>
                        <label for="">术中情况</label>
                    </div>
                    <div class="seggestion" style="border-bottom: 1px solid #f2f2f2">
                        <textarea type="text"  readonly="readonly" unselectable="on" onfocus="this.blur()" class="after_content suggestion" :value="fromParentData.during_content"></textarea>
                    </div>
                    <div class="item">
                        <span class="transB designecreat"></span>
                        <label>术后情况填写人:</label>
                        <a v-html="fromParentData.after_writer"></a>
                    </div>
                    <div class="item">
                        <span class="transB operation"></span>
                        <label>术后情况</label>
                    </div>
                    <div class="seggestion" style="border-bottom: 1px solid #f2f2f2">
                        <textarea type="text" readonly="readonly" unselectable="on" onfocus="this.blur()" class="after_content suggestion" :value="fromParentData.afer_content"></textarea>
                    </div>
                </div>
                <div class="face_ty item">
                    <span class="transB tupian"></span>
                    <label>手术类型:</label>
                    <a v-html="fromParentData.operationType"></a>
                    </div>
                <div class="notice_con">
                    <div class="item">
                        <span class="transB notice-icon" style="float:left"></span><label for="">注意事项</label>
                        
                    </div>
                    <textarea type="text"  class="medicalRemark suggestion" readonly="readonly" unselectable="on" onfocus="this.blur()" :value="fromParentData.attention"></textarea>
                </div>
                 <div class="item">
                        <span class="transB translationservice"></span><label for="">翻&nbsp;&nbsp;译&nbsp;&nbsp;者:</label>
                        <a v-html="fromParentData.translater"></a>
                </div>
                <div class="modle">

                    <div class="item">
                        <span class="transB doctor"></span>
                        <label>操作医师:</label>
                        <a v-html="fromParentData.doctor_name"></a>
                    </div>
                    <div class="item">
                        <span class="transB narcotize"></span>
                        <label for="">麻&nbsp;&nbsp;醉&nbsp;&nbsp;师:</label>
                        <a v-html="fromParentData.anesthetist_name"></a>
                    </div>
                    <div class="item">
                        <span class="transB normaltime"></span>
                        <label>手术用时:</label>
                        <a v-html="fromParentData.use_time"></a>
                    </div>
                    <div class="item">
                        <span class="transB operation"></span><label>医疗部备注</label>
                    </div>
                    <div class="seggestion" style="border-bottom: 1px solid #eee;">
                        <textarea type="text" class="medicalRemark suggestion" readonly="readonly" unselectable="on" onfocus="this.blur()" :value="fromParentData.medical_remark"></textarea>
                    </div>
                    
                </div>
            </div>
        </div>
        <div v-if="isformShow" style="margin-top:.89rem">
            <ul class="cont content_box mui-input-group">
                <li class="item">
                    <label>T(体温):</label>
                    <a v-html="fromParentData.heat"></a>
                </li>
                <li class="item">
                    <label>P(脉搏):</label>
                    <a v-html="fromParentData.puse"></a>
                </li>
                <li class="item">
                    <label>R(呼吸):</label>
                    <a v-html="fromParentData.breathe"></a>
                </li>
                <li class="item">
                    <label>BP(血压):</label>
                    <a v-html="fromParentData.blood_pressure"></a>

                </li>
                <li class="item">
                    <label>既往史:</label>
                    <a v-html="fromParentData.disease_his"></a>
                </li>
                <li style="height:.89rem" class="item">
                    <label style="float: left">怀&nbsp;&nbsp;&nbsp;&nbsp;孕:</label>
                   <a v-html="fromParentData.fetation_date"></a>
                </li>
                <li style="height:.89rem" class="item">
                    <label style="float: left">末期月经:</label>
                    <a v-html="fromParentData.end_period"></a>

                </li>
                <li  class="item" style="height:2.4rem">
                    <label style="width: 1.8rem;float:left;">药物过敏史:</label>
                    <textarea  class="eat_drug suggestion_extr" readonly="readonly" unselectable="on"
                                onfocus="this.blur()"  :value="fromParentData.allergy"></textarea>
                </li>
                <li  class="item" style="height:2.4rem">
                    <label style="float: left;display: inline-block;width: 1.8rem">近期口服药物、保健品:</label>
                    <textarea class="eat_drug suggestion_extr" readonly="readonly"
                                unselectable="on" onfocus="this.blur()"  :value="fromParentData.eat_drug"></textarea>
                </li>
                <li class="item">
                    <label>上胸围:</label>
                    <a v-html="fromParentData.on_chest"></a>
                </li>
                <li class="item">
                    <label>下胸围:</label>
                    <a v-html="fromParentData.under_chest"></a>
                </li>
                <li class="item">
                    <label>上腹围:</label>
                    <a v-html="fromParentData.on_waist"></a>
                </li>
                <li class="item">
                    <label>中腹围:</label>
                   <a v-html="fromParentData.m_waist"></a>
                </li>
                <li class="item">
                    <label>下腹围:</label>
                    <a v-html="fromParentData.under_waist"></a>
                </li>
                <li class="item">
                    <label>臀&nbsp;&nbsp;&nbsp;&nbsp;围:</label>
                    <a v-html="fromParentData.hipline"></a>
                </li>
                <li class="item">
                    <label>大腿上围:</label>
                    <a v-html="fromParentData.on_leg"></a>
                </li>
                <li class="item">
                    <label>大腿中围:</label>
                    <a v-html="fromParentData.m_leg"></a>
                </li>
                <li class="item">
                    <label>大腿下围:</label>
                    <a v-html="fromParentData.under_leg"></a>
                </li>
                <li style="border-bottom: 1px solid #f2f2f2;height:2.4rem" class="item">
                    <label style="float: left;">术前备注:</label>
                    <textarea type="text" class="suggestion_extr" readonly="readonly" unselectable="on" onfocus="this.blur()" :value="fromParentData.remarks"></textarea>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import EnlargeImageView from '../DifferentConponent/enlargeImage.vue'
export default {
     name:"medicalDepartment",
     components:{
         EnlargeImageView:EnlargeImageView
     },
     props:{
         medicalData:{
             type:Object
         }
     },
     data(){
         return{
               vitalSignsShow:true,
               isformShow:false,
               showSheets:false,
               fromParentData:{}
         }
     },
     methods:{
         changeShowStyle:function(){
             this.vitalSignsShow=!this.vitalSignsShow;
             this.isformShow=!this.isformShow;
             this.$emit('childByValue', !this.isformShow)
         },
        
        //向右的小图标动画
        toggleSheet(index){
            this.$refs.toggleicon.style.transform = !this.showSheets ? 'rotate(90deg)' : 'rotate(0)'
            this.showSheets = !this.showSheets//开关，是否折叠
        }
     },
     created(){
        this.fromParentData=this.medicalData;
     }
}
</script>

<style scoped>
label{
    float: left;
}
.suggestion{
    height: 2rem; 
    width:85%;
    margin-left:.5rem;
    padding: .1rem!important;
    color:#444; 
}
.suggestion_extr{
    height: 2rem; 
    width:65%;
    margin-left:.5rem;
    padding-top: .3rem!important;
    color:#444; 
}
a{
    display: inline-block;
    height: .98rem;
    line-height: .98rem;
    width: 50%;
}
.cont>li {
    height: .89rem;
    line-height: 0.89rem!important;
    border-bottom: 1px solid #f2f2f2;
}
.medicaltreatment{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/medicaltreatment.png)
}
.vitalsigns{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/vitalsigns.png)
}
.informedconsent{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/informedconsent.png)
}
.inspection{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/inspection.png)
}
.inspection{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/inspection.png)
}
.designecreat{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/designecreat.png)
}
.tupian{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/tupian.png)
}
.notice-icon{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/notice.png)
}
.translationservice{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/translationservice.png)
}
.doctor{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/doctor.png)
}
.narcotize{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/narcotize.png)
}
.normaltime{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/normaltime.png)
}
.ApplyInformation{
  background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
  background-image: url(../../../../src/assets/iconAll/img/ApplyInformation.png)
}
.operation{
    background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
    background-image: url(../../../../src/assets/iconAll/img/operation.png)
}
</style>
