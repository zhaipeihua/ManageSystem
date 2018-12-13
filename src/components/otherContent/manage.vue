<template>
    <div class="bigBox" id="collapse">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="contentBox">
                    <ul class="contentBox_part1">
                        <li>
                            <router-link id="dailyPaper" to='./Office'>
                                    <label></label><span>日报</span>
                            </router-link>
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
    <router-view></router-view>
</div>
</template>
<script>
import linkEngAndChineseJson from './linkEngAndChinese'
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
        this.itemName=linkEngAndChineseJson;
        const selectMenuItemListUrl = this.$Url.domainName + this.$Url.ports.qJRSelectMenuItemListPort;
        var roleid=localStorage.getItem('roleid');
        this.FechData(roleid,selectMenuItemListUrl);
    },
    methods:{
        Routerback: function () {
        this.$router.back(-1);
        },
        FechData:function(roleid,selectMenuItemListUrl){
           var _this=this;
           let mainList=this.$qs.stringify({
                roleid:roleid
            });
           this.$http.post(selectMenuItemListUrl,mainList).then((res)=>{
               var content="";
                _.forEach(res.data,n=>{
                    _this.itemsArr.push(n);
                })
               _.forEach(_this.itemsArr,val=>{
                   let item=val;
                   _.forEach(_this.itemName,get=>{
                       if(get.English==item){
                           _this.arr.push(get);
                       }
                   })
               })
            console.log(_this.arr);
           }).then((err)=>{
               
           })
        },
        //将属性名class与css类结合起来渲染页面
        SetClass(key) {
            let obj = {icon: true};
            obj[`icon${key}`]= true;
            return obj;
        },
        SetName(name){
            let objName = {name: true};
            objName[`${name}`]= true;
            return objName;
        }
       
    },

  }
</script>



