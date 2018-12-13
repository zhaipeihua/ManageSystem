<template>
    <div id="addProject">
         <div class="line_box" style="padding:.1rem .2rem" v-for="(item,index) in receiveProject" :key="index"> 
             <div v-if="item.remark===''">
                <div class="flex-item little"> 
                    <div style="float: left;width: 100%"> 
                        <span class="transB" @click="deleteProject(index,item.project_id)">
                            <img src="../../../../src/assets/iconAll/img/prj.png">
                        </span> 
                    <div class="color_name" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.label}}</div> 
                        <div class="icon_text" @click="toggleTextArea(index)"></div> 
                    </div> 
                    <div class="set_mon"><a class="red">  &yen;  </a> 
                        <span class="buy">  {{item.price}}  </span> 
                    </div> 
                    <div class="right mui-numbox" > 
                        <span class="deleteNum mui-btn mui-btn-numbox-minus" @click="reduceProjectNumber(index,item.number)">
                            <img src="../../../../src/assets/iconAll/img/shanjian.png">
                        </span> 
                        <input type="number" class="mui-input-numbox pay_num" :value="item.number"   readonly="readonly" onfocus="this.blur()"> 
                        <span class="mui-btn mui-btn-numbox-plus addNum" @click="addProjectNumber(index,item.number)">
                            <img src="../../../../src/assets/iconAll/img/tianPr.png">
                        </span> 
                    </div>
                </div>
                <textarea class="editbox" v-show="activeIndex===index"  placeholder="输入备注" style="display:none"></textarea> 
                <div class="get_Money">金额：<span style="color: #f00">&yen;</span> 
                    <input type="number"  class="color_place" :value="item.design_price" placeholder="请输入所修改金额"> 
                </div>
             </div>
             <div v-else>
                <div class="flex-item little"> 
                    <div style="float: left;width: 100%"> 
                        <span class="transB" @click="deleteProject(index,item.project_id)">
                            <img src="../../../../src/assets/iconAll/img/prj.png">
                        </span> 
                    <div class="color_name" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.label}}</div> 
                        <div class="icon_text" @click="toggleTextArea(index)"></div> 
                    </div> 
                    <div class="set_mon"><a class="red">  &yen;  </a> 
                        <span class="buy">  {{item.price}}  </span> 
                    </div> 
                    <div class="right mui-numbox"> 
                        <span class="deleteNum mui-btn mui-btn-numbox-minus" @click="reduceProjectNumber(index,item.number)">
                            <img src="../../../../src/assets/iconAll/img/shanjian.png">
                        </span> 
                        <input type="number" class="mui-input-numbox pay_num" :value="item.number"    readonly="readonly" onfocus="this.blur()"> 
                        <span class="mui-btn mui-btn-numbox-plus addNum" @click="addProjectNumber(index,item.number)">
                            <img src="../../../../src/assets/iconAll/img/tianPr.png">
                        </span> 
                    </div>
                </div>
                <textarea class="editbox" v-show="activeIndex===index" placeholder="输入备注" :value='item.remark'></textarea> 
                <div class="get_Money">金额：<span style="color: #f00">&yen;</span> 
                    <input type="number"  class="color_place" :value="item.design_price" placeholder="请输入所修改金额"> 
                </div>
             </div>
        </div>
    </div>
</template>
<script>

import { Toast } from 'mint-ui';
export default {
    name:"addProject",
    data(){
        return{
            receiveProject:[],
            textareaShow:false,
            activeIndex:-1,
            newNumber:1
        }
    },
    props:{
        linkProject:{
            type:Array
        }
    },
    created(){
        this.receiveProject=this.linkProject;

    },
    methods:{
        toggleTextArea(index){
           this.activeIndex = index;
        },
        deleteProject(index,id){
         console.log(id)//当前id
         this.receiveProject.splice(index,1); //删除当前行
        },
        addProjectNumber(index,number){
            if(this.receiveProject[index].number<10){
                this.receiveProject[index].number++
            }else{
                Toast(`单个项目添加不能超过10个`);
                return
            }
        },
        reduceProjectNumber(index,number){
            if(this.receiveProject[index].number>1){
                this.receiveProject[index].number--
            }else{
                Toast(`单个项目添加不能少于1个`);
                return
            }
        }
    }
}
</script>

<style scoped>
@import '../../../../static/IconFont/iconfont.css';
@import '../../../../static/StyleModel/allOrderStyle/addintentionorder.css';

</style>
