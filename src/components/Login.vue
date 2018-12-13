<template>
<div  style="padding: 32% 0;" id="Login">
    <form action="###">
        <div class="logo"></div>
        <div class="customer set_same">
            <label></label>
            <!-- <input type="text" placeholder="请输入账号名" id="username" v-model="getName"> -->
            <mt-field  placeholder="请输入用户名" v-model="getUserid"></mt-field>
        </div>
        <div class="password set_same">
            <label></label>
            <mt-field  placeholder="请输入密码" type="password" v-model="getPassword"></mt-field>
            <!-- <input type="password" placeholder="请输入密码" id="passerword" v-model="getPassword"> -->
        </div>
        <div class="sbmit set_same">
            <div class="box">
                <div class="left"><span class="forgive" @click="">忘记密码</span></div>
                <div class="right"><span class="nowLogin" @click="">立即注册</span></div>
            </div>
        </div>
        <div class="btn" style="margin-top:.5rem">
            <mt-button type="primary" @click="submitfunction" style="margin:0 auto;width:80%;border-radius:.5rem;">登录</mt-button>
            <!-- <a href="###" class="submit" id="send" @click="submitfunction"><router-link to="/CustomManage"><span>登录</span></router-link></a> -->
        </div>
    </form>
</div>
</template>
<script>
import { Field  } from 'mint-ui';
export default {
    name:'Login',
    data(){
        return {
           getUserid: '',
           getPassword:'',
           title:"首页",
        //    rolesJson:{},
           roleidArr:[]
        
        }
    },

     methods:{
            // open4() {
            //         this.$notify({
            //         title: '警告',
            //         message: '"功能未开放，请联系管理员"',
            //         type: 'warning'
            //         });
            //     },
            // open6() {
            //         this.$notify.error({
            //         title: '错误',
            //         message: '请填写用户名和密码'
            //         });
            //     },

            submitfunction:function(){
                    const userid=this.getUserid;
                    const passerword=this.getPassword;
                    localStorage.setItem('userid',userid)
                    if(userid=="" || passerword==""){
                        alert(5555)
                    }else{
                    const canshuQuery=this.$qs.stringify({
                        userid:userid,
                        passwd: passerword     
                    });
                    this.$http.post(this.$Url.domainName + this.$Url.ports.loginPort,canshuQuery).then((res)=>{
                        const _this=this;
                        // Indicator.open({
                        //     text: '正在登录...',
                        //     spinnerType: 'fading-circle'
                        // });
                        
                        if(res.statusText=="OK"&& res.status==200){
                            // indicator.close()
                             console.log(res)
                            _this.roleidArr=res.data.roles
                        console.log(_this.roleidArr)
                            if(_this.roleidArr.length===1){
                                const setRole=res.data.roles[0].roleid;
                                const setNameRole=res.data.roles[0].role_name;
                                localStorage.setItem('roleid',setRole);
					            localStorage.setItem("role_name",setNameRole);
                                _this.$router.push({path: '/CustomManageViewPage'});
                            }else if(_this.roleidArr.length==0||_this.roleidArr==""||_this.roleidArr==null||_this.roleidArr==undefined){
                                localStorage.setItem('roleid',"CON");
                                localStorage.setItem("role_name","通用角色");
                                _this.$router.push({path: '/CustomManageViewPage'});
                            }else{
                                const jsonObj = JSON.stringify(_this.roleidArr);
				                localStorage.setItem("getRoleJson", jsonObj); //存角色权限判断
                                _this.$router.push({path: '/switchingUserRoles'});
                            }
                        }
                    }).then((error)=>{
                        // indicator.open();
                    })
                 }

            }
                
        }
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
body{
    height:100vh;
}
form{
    font-size: .28rem;
    width: 100%;
}
form div{
    display:-ms-flex;
    display:-webkit-flex;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    width: 100%;
}
.el-input__inner{
    height: .4rem!important;
    line-height: .4rem!important;
}
input{
    border: none;
}
input::focus{ border:none; }
.customer,.password{
    /* border-bottom: 1px solid #f2f2f2; */
    height: 1.18rem;
}
.sbmit div{
    height: 1rem;
}
form div input{
    font-size: .28rem;
    margin-left: .2rem;
    width:3.2rem;
}
.customer label{
    width: .4rem;
    height: .4rem;
    margin-right: .2rem;
    background:#fff url(../assets/iconAll/img/me.png) center center no-repeat;
    background-size:.3rem .3rem;
}
.password label{
    width: .4rem;
    height: .4rem;
    margin-right: .2rem;
    background:#fff url(../assets/iconAll/img/passa.png) center center no-repeat;
    background-size:.3rem .3rem;
}
.logo{
    width: 100%;
    height: 1.46rem;
    background: #fff url(../assets/iconAll/img/copy.png) center center no-repeat;
    background-size: 5.36rem 1.46rem;
    margin-bottom: .94rem;
    color: #585858;
}
.logo div{
    justify-content: center;
}
.box{
    width: 100%;
}
.left{
    padding-left: .3rem;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
    width: 2.5rem;
}
.right{
    width: 2.5rem;
    padding-right: .2rem;
    margin-left: 2.2rem;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
}
.submit {
    display: inline-block;
    font-size: .36rem;
    text-align: center;
    width: 70%;
    line-height: .89rem;
    color: #fff;
    margin: 0 auto;
    margin-top: 1rem;
    border-radius: .5rem;
    background-color: #04a7ff;
    text-decoration:none;
     /*! autoprefixer: off */
    background-color: -ms-linear-gradient(top, #04a7ff,  #0486fe);/* IE 10 */
    background-color:-moz-linear-gradient(top, #04a7ff,  #0486fe);/*火狐*/
    /* autoprefixer: on */
    background-color:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#04a7ff), to(#0486fe));/*谷歌*/
    background-color: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#04a7ff), to(#0486fe));      /* Safari 4-5, Chrome 1-9*/
    background-color: -webkit-linear-gradient(top, #04a7ff, #0486fe);   /*Safari5.1 Chrome 10+*/
    background-color: -o-linear-gradient(top, #04a7ff, #0486fe);
    

}
.formtips{
    color:#f00;
}
.set_same{
    width: 70%;
    margin: 0 auto;
}
</style>