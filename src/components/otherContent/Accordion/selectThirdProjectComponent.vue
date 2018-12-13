<template>
    <div id="thirdProject" style="margin-top:.89rem;">
        <mt-header fixed :title=title style="height:.85rem!important;">
             <router-link to="###" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="mui-content third">
            <router-link tag="div" :to="'/selectFinallyProjectComponentTemplate/'+x.id"  v-for="(x,y) in ThirdProjectArray[0]" :key="x.id" >
                <div>{{x.name}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"thirdProject",
    data(){
        return{
            title:"选择项目",
            ThirdProjectArray:[],
        }
    },
    created(){
        const first_id=this.$route.params.id;
        this.secondFeatchData(first_id)
    },
    methods:{
        //第二级列表点击过后得到第三级项目
        secondFeatchData(getSecond_id){
            const _this=this;
            _this.isSecondShow=!_this.isSecondShow;
            const QueryData=this.$qs.stringify({
                second_id : getSecond_id
            })
            _this.ThirdProjectArray=[]
            const url=this.$Url.domainName + this.$Url.ports.selectThirdCategoryListPort;
            this.$http.post(url,QueryData).then((res)=>{
                _this.ThirdProjectArray.push(res.data)
            })
        },
         
    }
}
</script>

<style>

</style>
