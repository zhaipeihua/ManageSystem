<template>
    <div id="firstProject" style="margin-top:.89rem">
        <mt-header fixed :title=title style="height:.85rem!important;">
            <router-link to="###" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
             <router-link to="###" slot="right">
                <mt-button @click="filterSameProject">确定</mt-button>
            </router-link>
        </mt-header>

        <div class="mui-content finally">
            <mt-checklist 
                v-model="value" 
                align="left"
                :options="options" @change="checkon($event)">
            </mt-checklist>
        </div>
    </div>
</template>
<script>
import bus from '../../../eventBus.js'
export default {
    name:"finallyProject",
    data(){
        return{
            title:"选择项目",
            isShowModel:true,
            initFromThirdProject:[],
            //存放所选选项
			value:[],
			//checklist设置
            options : [],
            sendProjectObj:{
                selectArray:[]
            }
        }
    },
      created(){
        const first_id=this.$route.params.id;
        this.ThirdFeatchData(first_id)
    },
    methods:{
        ThirdFeatchData(id){
            const _this=this;
            _this.isThirdShow=!_this.isThirdShow;
            const QueryData=this.$qs.stringify({
                third_id : id
            })
            _this.finallyProject=[]
            const url=this.$Url.domainName + this.$Url.ports.getProjectListByThirdIdPort;
            this.$http.post(url,QueryData).then((res)=>{
                _.forEach(res.data,(element,index)=>{
                    console.log(element)
                    const _selfObj=_this.createObjc(element.project_name,element.project_id,element.price)
                    _this.options.push(_selfObj)
                });
                // console.log(res.data)
                console.log(_this.options)
            })
            
        },
        checkon: function(item){
            console.log(item)
        },
        filterSameProject(){
            this.sendProjectObj.selectArray=[]
            _.forEach(this.options,element=>{
                _.forEach(this.value,n=>{
                    if(element.value===n){
                        this.sendProjectObj.selectArray.push(element)
                        return this.sendProjectObj.selectArray;
                    }
                })
            })
           

            const first_id=this.$route.params.id;
            //const Orderid=localStorage.getItem('PreOrderid')
            //console.log(Orderid)
            // this.$router.go(-8)
            this.$router.push({path:'/selectSecondProjectComponentTemplate',params:{id:first_id}})
            bus.$emit('addProjectEvent',this.sendProjectObj);
        },
    },
  
}
</script>

<style>

</style>
