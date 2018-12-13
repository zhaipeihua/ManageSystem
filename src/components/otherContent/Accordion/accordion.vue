<template>
    <div class="sheet-list">
        <div class="sheet-header" @click="toggleSheet" style="border-bottom:1px solid #f2f2f2 !important;">
            <!-- 意向项目 -->
            <div v-if="data_item.differ==='pay'">
                <div v-show="true">
                    <label style="float: left" class="icon_1"></label>
                    <span class="sheet-header-span">{{data_item.name}} <span> ({{data_item.numPay}}) </span></span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                    <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
              <!-- 赠送项目 -->
            <div v-else-if="data_item.differ==='give'">
                 <div v-show="true">
                    <label style="float: left" class="icon_2"></label>
                    <span class="sheet-header-span">{{data_item.name}} <span> ({{data_item.numGive}}) </span></span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                    <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
            <!-- 感兴趣项目 -->
            <div v-else style="border-top:1px solid #F2F2F2;">
                 <div v-show="true">
                    <label style="float: left" class="icon_2"></label>
                    <span class="sheet-header-span">{{data_item.name}} <span> ({{data_item.numInterest}}) </span></span>
                    <!-- <i class="icon iconfont icon-right" ref="toggleicon"></i> -->
                    <i class="sheet-header-i icon iconfont icon-right" ref="toggleicon"></i>
                </div>
            </div>
        </div>
        <div v-if="showSheets" class="sheet-content" v-for="(newItem,index) in data_item.getDetail" style="border-bottom: 1px solid rgb(242, 242, 242);">
            <div v-if="data_item.differ==='pay'" style="width:100%;padding:.2rem 0;">
                <div v-if="newItem.remark===''" style="width:100%;">
                    <div class="flex-item little">
                        <div style="float: left;padding:0 .2rem 0 .45rem;width:85%;">
                            <div class="color_name" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width:80%;">{{newItem.project_name}}</div>
                            <div style="float: right;color: #444!important;height: .5rem;line-height: .5rem;" >X{{newItem.number}}</div>
                        </div>
                        <div class="set_mon" style="padding-left: .5rem!important;"><a class="red">&yen;</a>
                            <span class="buy">{{newItem.original_price}}</span>
                        </div>
                    </div>
                    <textarea class="editbox3" style="display:none" readonly="readonly" onfocus="this.blur()">{{newItem.remark}}</textarea>
                    <div class="get_Money">金额：<span style="color: #f00">&yen;</span>
                        <input type="number"  class="color_place"  readonly="readonly" onfocus="this.blur()" :value='newItem.design_price'>
                    </div>
                </div>
                <div v-else style="width:100%;">
                    <div class="flex-item little">
                        <div style="float: left;padding:0 .2rem 0 .45rem;width:85%;">
                            <div class="color_name" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width:80%;">{{newItem.project_name}}</div>
                            <div style="float: right;color: #444!important;height: .5rem;line-height: .5rem;" >X{{newItem.number}}</div>
                        </div>
                        <div class="set_mon" style="padding-left: .5rem!important;"><a class="red">&yen;</a>
                            <span class="buy">{{newItem.original_price}}</span>
                        </div>
                    </div>
                    <textarea class="editbox3" readonly="readonly" onfocus="this.blur()">{{newItem.remark}}</textarea>
                    <div class="get_Money">金额：<span style="color: #f00">&yen;</span>
                        <input type="number"  class="color_place"  readonly="readonly" onfocus="this.blur()" :value='newItem.design_price'>
                    </div>
                </div>
            </div>
            <div v-else style="width:100%;padding:.2rem 0;">
                <div v-if="newItem.remark===''" style="width:100%;">
                    <div class="flex-item little">
                        <div style="float: left;padding:0 .2rem 0 .45rem;width:85%;">
                            <div class="color_name" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width:80%;">{{newItem.project_name}}</div>
                            <div style="float: right;color: #444!important;height: .5rem;line-height: .5rem;" >X{{newItem.number}}</div>
                        </div>
                        <div class="set_mon" style="padding-left: .5rem!important;"><a class="red">&yen;</a>
                            <span class="buy">{{newItem.original_price}}</span>
                        </div>
                    </div>
                    <textarea class="editbox3" style="display:none" readonly="readonly" onfocus="this.blur()">{{newItem.remark}}</textarea>
                </div>
                <div v-else style="width:100%;">
                    <div class="flex-item little">
                        <div style="float: left;padding:0 .2rem 0 .45rem;width:85%;">
                            <div class="color_name" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width:80%;">{{newItem.project_name}}</div>
                            <div style="float: right;color: #444!important;height: .5rem;line-height: .5rem;" >X{{newItem.number}}</div>
                        </div>
                        <div class="set_mon" style="padding-left: .5rem!important;"><a class="red">&yen;</a>
                            <span class="buy">{{newItem.original_price}}</span>
                        </div>
                    </div>
                    <textarea class="editbox3" readonly="readonly" onfocus="this.blur()">{{newItem.remark}}</textarea>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  components:{},
    props: {
    item:{
            type:Object
        }
    },
    data(){
        return{
            showSheets:false,
            data_item:{}
        }
    },
    methods:{
        //向右的小图标动画
        toggleSheet:function(index){
        this.$refs.toggleicon.style.transform = !this.showSheets ? 'rotate(90deg)' : 'rotate(0)'
        this.showSheets = !this.showSheets//开关，是否折叠
    },
    showSheetMenu:function(){
        alert(1111);
        }
    },
    created(){
        this.data_item = this.item;
        console.log(this.data_item)
    }
}
</script>
<style scoped>
@import '../../../../static/IconFont/iconfont.css';
@import '../../../../static/StyleModel/allOrderStyle/ordernewmodification.css';
@import '../../../../static/StyleModel/unMadeOrder/orderDistributionDetails.css';
.sheet-list{
clear: both;
margin:.2rem 0;
}
.icon-right[data-v-6acfb81e]:before {
    content: "\E7EB";
    color: blue;
}
.sheet-header{
    height: .89rem;
    position: relative;
    background: #fff;
}

.sheet-header i:nth-child(1){
    line-height:.89rem;
    position:absolute;
    left:.2rem;
    color:#666;
    transition:all 0.5s;
}
.sheet-header-i{
    line-height: .89rem;
    position: absolute;
    right:.4rem;
}
.sheet-header-span{
    left:.6rem;
    font-size: .3rem;
    position:absolute;
    line-height: .89rem;
}
.sheet-content{
    position: relative;
    width: 100%;
    display: flex;
    background: #fff;
}
.sheet-content i{
    font-size: 26px;
    position: absolute;
    right:.2rem;
    top: 50%;
    transform:translate(0,-50%);
}
.sheet-content-image{
    width: 1.2rem;
    float: left;
    text-align: center;
}
.sheet-content-middle{
    position: relative;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: .2rem;
    margin-top: .2rem;
    margin-left:.2rem;
}
.sheet-content-middle p{
    font-size: 16px;
    width: 70%;
    color: #666;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow:hidden;
}
</style>
