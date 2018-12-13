<template>
    <div id="firstProject" style="margin-top:.89rem;">
        <mt-header fixed :title=title style="height:.85rem!important;" v-if="headerShow">
            <router-link to="###" slot="left" @click="changeShowStyle">
                <mt-button icon="back">返回</mt-button>
            </router-link>
             <router-link to="###" slot="right" v-show="sureButton">
                <mt-button @click="filterSameProject">确定</mt-button>
            </router-link>
        </mt-header>
        <!-- <div>{{init}}</div> -->

        <div class="mui-content first" v-if="isFirstShow">
            <div v-for="(item,index) in FirstProjectArray[0]" :key="item.id"  @click="feachData(item.id)">
                <div>{{item.name}}</div>
            </div>
        </div>
        <!-- <div class="mui-content first" v-show="isFirstShow">
            <div v-for="(item,index) in items[0]" :key="item.id"  @click="feachData(item.id)">
                <div>{{item.name}}</div>
            </div>
        </div>  -->
         <!-- <div class="mui-content first">
            <router-link tag='div' :to="'/selectSecondProjectComponentTemplate/'+item.id" v-for="(item,index) in FirstProjectArray[0]" :key="item.id">
                <div>{{item.name}}</div>
            </router-link>
        </div>  -->

       <div class="mui-content second" v-if="isSecondShow">
            <div v-for="(n,i) in SecondProjectArray[0]" :key="n.id" @click="secondFeatchData(n.id)">
                <div>{{n.name}}</div>
            </div>
        </div>
        <div class="mui-content third" v-if="isThirdShow">
            <div v-for="(x,y) in ThirdProjectArray[0]" :key="x.id" @click="ThirdFeatchData(x.id)">
                <div>{{x.name}}</div>
            </div>
        </div>
        <div class="mui-content finally" v-if="finallyShow">
            <mt-checklist 
                v-model="value" 
                align="left"
                :options="options" @change="checkon($event)">
            </mt-checklist>
        </div> 
    </div>
</template>

<script>
// var storeKey = "projectObj";
// var storage = {
//     fetch:function(){
//         return JSON.parse(sessionStorage.getItem(storeKey) || "[]")
//     },
//     save:function(items){
//         sessionStorage.setItem(storeKey,JSON.stringify(items));
//     }
// }
export default {
    name:"firstProject",
    props:{
        fromParent:{
            type:Object
        }
    },
    data(){
        return{
            title:"选择项目类型",
            isFirstShow:true,
            sureButton:false,
            isSecondShow:true,
            isThirdShow:true,
            finallyShow:true,
            headerShow:true,
            backIcon:"",
            FirstProjectArray:[],
            SecondProjectArray:[],
            ThirdProjectArray:[],
            sendProjectObj:{
                ShowMain:true,//控制父组件显示
                selectArray:[]
            },
            //存放所选选项
			value:[],
			//checklist设置
            options:[],
            finallyProject:[],
        }
    },
    computed:{
        init:function(){
            this.isFirstShow= this.fromParent.firstShow;
            this.headerShow= this.fromParent.firstShow
            const url=this.$Url.domainName + this.$Url.ports.selectFirstCategoryListPort
            console.log(this.isFirstShow)
            console.log(this.headerShow)
            console.log(url)
            this.getFirstProject(url)
        },
    },
    methods:{
         getFirstProject(getUrl){
            const  _this=this;
            _this.backIcon="first"
            _this.items=[]
            this.$http.post(getUrl).then((res)=>{
                console.log(res)
                _this.FirstProjectArray.push(res.data)
            })
        },
       //获取第一级项目
        feachData(getId){
            const _this=this;
            _this.isFirstShow=!_this.isFirstShow;
            _this.isSecondShow=true
            _this.backIcon="second"
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
        //第二级列表点击过后得到第三级项目
        secondFeatchData(getSecond_id){
            const _this=this;
            _this.isSecondShow=!_this.isSecondShow;
            _this.isThirdShow=true;
            _this.backIcon="third"
            const QueryData=this.$qs.stringify({
                second_id : getSecond_id
            })
            _this.ThirdProjectArray=[]
            const url=this.$Url.domainName + this.$Url.ports.selectThirdCategoryListPort;
            this.$http.post(url,QueryData).then((res)=>{
                console.log(res)
                _this.ThirdProjectArray.push(res.data)
            })
        },
        //第三级列表项目点击过后得到最终的项目列表
        ThirdFeatchData(id){
            const _this=this;
            _this.sureButton=true;//确定按钮显示出来
            _this.isThirdShow=!_this.isThirdShow;
            _this.finallyShow=true;
            _this.backIcon="finally"
            const QueryData=this.$qs.stringify({
                third_id : id
            })
            _this.finallyProject=[]
            _this.options.length=0
            _this.title="选择项目"
            const url=this.$Url.domainName + this.$Url.ports.getProjectListByThirdIdPort;
            this.$http.post(url,QueryData).then((res)=>{
                _.forEach(res.data,(element,index)=>{
                    const _selfObj=_this.createObjc(element.project_name,element.project_id,element.price,"","",1)
                    //创建符合选中项目的对象
                    _this.options.push(_selfObj)
                });
            })
        },

        changeShowStyle(){
            this.finallyShow=false;
            this.isThirdShow=true;
        },
        checkon: function(item){
            console.log(item)
        },
        //将选中的项目传递到父组件
        filterSameProject(){
            const _this=this;
            _this.sendProjectObj.selectArray=[]
            _.forEach(_this.options,element=>{
                _.forEach(_this.value,n=>{
                    if(element.value===n){
                        _this.sendProjectObj.selectArray.push(element)
                        return _this.sendProjectObj.selectArray;
                    }
                })
            })
            _this.finallyShow=!_this.finallyShow;
            _this.headerShow=false;
            _this.sureButton=false//确定按钮隐藏
            _this.$emit('addProjectEvent',_this.sendProjectObj)
        },
    },

    //<...................通过监听的方法也能实现二次添加，项目列表渲染............................>
    // watch:{
    //     //监听items的变化
    //     isFirstShow:{
    //         handler:function(isFirstShow){
    //             console.log(isFirstShow)
    //         },
    //         deep:true
    //     }
    // }
}
</script>

<style scoped>

 .first div,.second div,.third div{
     height: .89rem;
     line-height: .89rem;
     padding: 0 .2rem;
     border-bottom: 1px solid #f2f2f2;
 }

</style>
