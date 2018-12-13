<template>
        <div class="mint-popup" id="mint-popup" style="width:100%;height:100%;">
             <div  style="height:100%;width:100%;bacground-color:#fff;">
                <!--侧滑菜单部分-->
                    <div id="offCanvasSideScroll" class="mui-scroll-wrapper" style="padding:.2rem 0;">
                        <div class="mui-scroll" style="padding:0 .2rem;">
                            <!--<div class="title"></div>-->
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell mui-collapse">
                                    <a class="mui-navigate-right change_val" href="#">级别</a>
                                    <ul class="mui-table-view mui-collapse-content list_down">
                                        <li class="mui-table-view-cell">
                                            <a href="javascript:;" class="dropDownIcon market">全部级别</a>
                                            <input type="hidden" value="" />
                                        </li>
                                        <li class="mui-table-view-cell">
                                            <a href="javascript:;" class="dropDownIcon duty">级别A</a>
                                            <input type="hidden" value="A" />
                                        </li>
                                        <li class="mui-table-view-cell">
                                            <a href="javascript:;" class="dropDownIcon work">级别B</a>
                                            <input type="hidden" value="B" />
                                        </li>
                                        <li class="mui-table-view-cell">
                                            <a href="javascript:;" class="dropDownIcon last">级别C</a>
                                            <input type="hidden" value="C" />
                                        </li>
                                    </ul>
                                </li>
                                <li class="mui-table-view-cell mui-collapse">
                                    <a class="mui-navigate-right change_val1">
                                        区域
                                    </a>
                                    <input type="hidden" class="area_name">
                                    <ul class="mui-table-view  mui-collapse-content area_sel"></ul>
                                </li>
                                <li class="mui-table-view-cell mui-collapse">
                                    <!--<a class="mui-navigate-right change_val2">-->
                                    <!--项目-->
                                    <!--</a>-->
                                    <!--<ul class="mui-table-view mui-collapse-content get_item"></ul>-->
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="butn">
                        <div class="reset">重置</div>
                        <div class="surpport">提交</div>
                    </div>
                </aside>
            </div>
    </div>
</template>

<script>
export default {
   name:"mint-popup",
   data(){
       return{
          
       }
   },
   props:{

   },
   methods:{

   }
}
</script>

<style scoped>
ul{
    list-style: none;
}
*{
    font-size: .3rem;
}
.dropDownIcon {
    color: #444 !important;
    font-size: 0.3rem;
    padding-left: .8rem !important;
    background-repeat: no-repeat;
    background-size: 0.35rem 0.35rem;
    background-position: 0.25rem 45%;
}
.select{
    color:#ccc!important;
    padding-left:.8rem !important;
}
.market {
    background-image: url(../../../../src/assets/iconAll/img/ycd_x.png);
}
.duty {
    background-image: url(../../../../src/assets/iconAll/img/ycd_a.png);
}
.work {
    background-image: url(../../../../src/assets/iconAll/img/ycd_b.png);
}
.last{
    background-image: url(../../../../src/assets/iconAll/img/ycd_c.png);
}
.butn{
    width: 100%!important;
    color: #444!important;
    position: absolute;
    bottom:1rem;
}
.butn div{
    height:.89rem;
    line-height:.89rem;
    text-align: center;
    width: 49%;
    font-size: .3rem;
    display: inline-block;
    float: left;
    color: #000;
}
.butn div:nth-child(1){
    border-top:1px solid #f2f2f2;
    border-right:1px solid #f2f2f2;
    color: #f00;;
}
.butn div:nth-child(2){
    border-top:1px solid #f2f2f2;
    color: #C69351;
}
</style>
