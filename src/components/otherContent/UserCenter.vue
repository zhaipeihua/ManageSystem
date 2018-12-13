<template>
    <div id="UserCenter">
	<div class="title">&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <form method="POST" enctype="multipart/form-data" id="iconTitle">
        <div class="head_icon" style="position: relative">
            <img src="../../../src/assets/iconAll/img/headIcon.png" class="picFileIcon" width="100%" alt="">
            <input type="file" name="pic1file" id="headPortrait">
        </div>
    </form>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-color: #fff;">
                <form action="javascript:;" >
                    <div class="user_name same">
                        <label>姓名：</label>
                        <span id="userName"></span>
                    </div>
                    <div class="department same">
                        <label>部门：</label>
                        <span  id="departmentName"></span>
                    </div>
                    <div class="role same" style="position: relative">
                        <label>角色：</label>
                        <span></span>
                        <a class="role_name"></a>
                        <a href="###" class="changeRole">角色切换&emsp;</a>
                    </div>
                    <div class="password same">
                        <label>密码：</label>
                        <span></span>
                        <a href="changePasswd.html"  target=_self>修改密码&emsp;</a>
                    </div>
                    <div class="same about_we">
                        <label>关于我们</label>
                        <span></span>
                        <!--<a href="changePasswd.html"  target=_self>修改密码&emsp;</a>-->
                        <a   target=_self>&emsp;</a>
                        <!--<a href="###" class="about_we"></a>-->
                    </div>
                    <div class="same" style="background-color: #f2f2f2"></div>
                    <div class="exit exit_application">
                        <a>退出登录</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script >
export default {
    name:"UserCenter",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
body{
	background-color:#f2f2f2 ;
}
.title{
	color: #fff;
    text-align: center;
    font-size: .36rem;
    line-height: 0.86rem;
}
.head_icon{
	width: 1.8rem;
	height: 1.8rem;
	line-height: 1.8rem;
	border-radius: 50%;
	border: 0.04rem solid #fff;
	overflow: hidden;
	margin: 0.74rem auto;
	padding: 0 !important;
}
.head_icon>img{
	display: inline-block !important;
	vertical-align: middle;
}
.head_icon>input{
	opacity:0;
	filter:alpha(opacity=0);
	position:absolute;
	top:0;
	left:0;
	width: 90px;
	height: 90px
}
.same {
    height: 1.06rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
}
.self_header{
	width: 100%;
	height: 4.08rem;
	background: -ms-linear-gradient(top, #04a7ff,  #0486fe);/* IE 10 */
	background:-moz-linear-gradient(top, #04a7ff,  #0486fe);/*火狐*/
	background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#04a7ff), to(#0486fe));/*谷歌*/
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#04a7ff), to(#0486fe));      /* Safari 4-5, Chrome 1-9*/
	background: -webkit-linear-gradient(top, #04a7ff, #0486fe);   /*Safari5.1 Chrome 10+*/
	background: -o-linear-gradient(top, #04a7ff, #0486fe);
}
.swiper-container{
	width: 100%;
	position: absolute;
	box-sizing: border-box;
	overflow-y: scroll;
}
form>div{
    background-color:#fff;
    padding: 0 0.2rem;
}
form>div>label{
    background-repeat:no-repeat ;
	background-size:0.3rem 0.3rem ;	
	font-size:0.3rem;
	color: #444;
	padding-left: 0.44rem;
}
#userName{
	font-size: .3rem;
	color:#444;
	width: 4rem;
	height: 1rem;
	line-height: 1rem;
}
#departmentName{
	font-size: .3rem;
	color:#444;
}
.role_name{
	font-size: .3rem;
	color: #444444!important;
}
.user_name>label{
	background-image:url(../../assets/iconAll/img/kehu.png);
}
.department>label{
	background-image:url(../../assets/iconAll/img/bumen.png);
}
.password>label{
	background-image:url(../../assets/iconAll/img/mima.png);
}
.role>label{
	background-image:url(../../assets/iconAll/img/role.png);
}
.about_we label{
	background-image:url(../../assets/iconAll/img/turnBack.png);
}
.password{
	position: relative;
}
.about_we a{
	position: absolute;
	right: 0.22rem;
	height: 1.06rem;
	line-height: 1.06rem;
	font-size: 0.2rem;
	color: #3290f1;
	background-image:url(../../assets/iconAll/img/jiantou.png);
	background-repeat:no-repeat;
	background-size:0.14rem 0.24rem ;
	background-position:right;
}
.password>a{
	position: absolute;
	right: 0.22rem;
	height: 1.06rem;
	line-height: 1.06rem;
	font-size: 0.25rem;
	color: #04a7ff;
	background-image:url(../../assets/iconAll/img/jiantou.png);
	background-repeat:no-repeat;
	background-size:0.14rem 0.24rem ;
	background-position:right;
}
.changeRole{
	position: absolute;
	right: 0.22rem;
	height: 1.06rem;
	line-height: 1.06rem;
	font-size: .25rem;
	color: #04a7ff;
	background-image: url(../../assets/iconAll/img/jiantou.png);
	background-repeat: no-repeat;
	background-size: 0.14rem 0.24rem;
	background-position: right;
}
.exit{
	text-align: center;
	font-weight: bold;
	color: #3290f1!important;
	font-size: .32rem;
	height: .89rem;
	line-height: .89rem;
}
.button{
	padding-top: 1rem;
}
.button a{
	text-decoration: none!important;
	display: block;
	width: 85%;
	text-align: center;
	line-height: .89rem;
	font-size: 0.36rem;
	border-radius: 0.50rem;
	overflow: hidden;
	color: #fff;
	margin: .5rem auto;
	background: -ms-linear-gradient(top, #04a7ff,  #0486fe);/* IE 10 */
	background:-moz-linear-gradient(top, #04a7ff,  #0486fe);/*火狐*/
	background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#04a7ff), to(#0486fe));/*谷歌*/
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#04a7ff), to(#0486fe));      /* Safari 4-5, Chrome 1-9*/
	background: -webkit-linear-gradient(top, #04a7ff, #0486fe);   /*Safari5.1 Chrome 10+*/
	background: -o-linear-gradient(top, #04a7ff, #0486fe);
}
.button .about_we{
	background: #cec1ae;
}
 @import '../../../static/StyleModel/index.css';
</style>
