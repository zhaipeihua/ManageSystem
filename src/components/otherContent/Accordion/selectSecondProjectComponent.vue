<template>
    <div id="secondProject" style="margin-top:.89rem">
        <mt-header fixed :title=title style="height:.85rem!important;">
             <router-link to="###" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="mui-content second">
            <router-link tag="div" :to="'/selectThirdProjectComponentTemplate/'+n.id" v-for="(n,i) in SecondProjectArray[0]" :key="n.id">
                <div>{{n.name}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"secondProject",
    components:{
        "third-project":ThirdProjectComponent,
    },
    data(){
        return{
            title:"选择项目类型",
            SecondProjectArray:[],
        }
    },
    methods:{
         //第一级列表点击过后得到第二级项目
        feachData(getId){
            const _this=this;
            _this.isFirstShow=!_this.isFirstShow;
            const QueryData=this.$qs.stringify({
                first_id : getId
            })
            _this.SecondProjectArray=[];
            const url=this.$Url.domainName + this.$Url.ports.selectSecondCategoryListPort;
            this.$http.post(url,QueryData).then((res)=>{
                _this.SecondProjectArray.push(res.data)
                console.log(_this.SecondProjectArray)
            })
        },
    },
    created(){
        const first_id=this.$route.params.id;
        this.feachData(first_id)
    }
}
</script>

<style>

</style>
