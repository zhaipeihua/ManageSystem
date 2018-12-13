
<template>
     <div id="switchRole" style="margin-top:1.5rem;height:100%">
        <mt-header fixed title="选择需要登录的账号角色" style="height:.85rem!important;"></mt-header>
        <div class="mui-content" style="position: relative">
			<ul class="userBtn" >
                <li v-for="(item,index) in json_to_arr">
                    <a @click="RoutesToMenu" ref="a"> {{item.role_name}}</a>
                    <input type="hidden" :value='item.roleid'>
                </li>
            </ul>
			
		</div>
        <div class="cancel">退出登录</div>
     </div>
    
</template>
<script>
export default {
   name:"switchRole",
   data(){
       return{
           json_to_arr:[],
       }
   },
   created:function(){
        const _this=this;
        const roleidArr=localStorage.getItem('getRoleJson');//字符串json数据格式
        _this.json_to_arr = eval(roleidArr)//转换成可解析数据格式
        console.log(_this.json_to_arr)
   },
   methods:{
       RoutesToMenu:function(n){
            const _this=this;
            const get_role_name=n.target.innerHTML
            const get_Roleid=n.target.nextElementSibling.value
            localStorage.setItem('roleid',get_Roleid);
            localStorage.setItem("role_name",get_role_name)
            _this.$router.push({path: '/CustomManageViewPage'});
       }
   }
 
}
</script>

<style>
@import '../../../static/globelStyle/globleIndex.css';
@import '../../../static/StyleModel/switchingUserRoles.css';

</style>
