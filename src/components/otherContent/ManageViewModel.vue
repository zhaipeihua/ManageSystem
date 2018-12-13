<template>
    <div id="manageViewModel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="contentBox">
                        <ul class="contentBox_part1">
                            <li>
                                <a href="###" id="dailyPaper"><label ></label><span>日报</span></a>
                            </li>
                            <li>
                                <a href="###" id="addressList"><label ></label><span>通讯录</span></a>
                            </li>
                            <li style="position: relative;">
                                <span id="msg_number" style="display: inline-block;position: absolute;padding:.05rem;
                                    background-color: #f00;color:#fff;border-radius: 30%;font-size: .2rem;top: -.25rem;right: 4px;"></span>
                                <a href="###" id="Massage"><label ></label><span>消息</span></a>
                            </li>
                            <li>
                                <a href="###" id="finace"><label ></label><span>FAQ</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="contentBox_part2">
                        <ul class="part2_content">
                            <li v-for="(item,index) in  arr" >
                                <router-link :to='{path:item.self_route}' tag='a'>  
                                        <label :class="SetClass(index+1)"></label>
                                        <span>{{item.chinese}}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import routerJson from '../../router/routerManage'
import axios from 'axios';
import qs from 'qs';
export default {
    name:"collapse",
    data() {
      return {
        activeName: '1',
        itemsArr:[],
        arr:[],
        itemName:[]
            
      };
    },
    created:function(){
         this.FetchData();
         this.itemName=routerJson
    },
    mounted:function(){
        this.ChangeName()
    },
    methods:{
        Routerback: function () {
        this.$router.back(-1)
        },
        FetchData:function(){
           let _this=this;
           let $baseUrl=localStorage.getItem("baseUrl")
           let selectMenuItemListUrl = $baseUrl+"/order/qJRSelectMenuItemList.do";
           let roleid="DES"
           let mainList=qs.stringify({
                roleid:roleid
            });
           axios.post(selectMenuItemListUrl,mainList).then((res)=>{
            //console.log(res);
               let content=""
               $.each(res.data,function(i,n){
                    _this.itemsArr.push(n);
               });
               $.each(_this.itemsArr,function(i,n){
                   let item=n;
                   for(const key in _this.itemName){
                           if(_this.itemName[key].English==item){
                               _this.arr.push(_this.itemName[key])
                           }
                       }
               })
            console.log(_this.arr) 
           }).then((err)=>{
               
           })
        },
        //将属性名class与css类结合起来渲染页面
        SetClass(key) {
            let obj = {icon: true}
            obj[`icon${key}`]= true
            return obj
        },
        SetName(name){
            let objName = {name: true}
            objName[`${name}`]= true
            return objName
        },
        ChangeName(){
           $('.clientele').html('开发')
        }
    }
  }
</script>

