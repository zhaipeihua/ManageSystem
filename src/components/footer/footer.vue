<template>
    <!-- <div class="footer">{{msg}}</div> -->
    <footer class="footer">
        <router-link class="f1" to="/CustomManageViewPage" tag='div' router-link-exact-active="bgActiv">
            <a href="javascript:;" > 
                <span>客户管理</span>
            </a>
        </router-link>
        <router-link class="f2" to='/OfficeViewPage' tag='div'>
            <a href="javascript:;">
                <span>办公自动化</span>
            </a>
        </router-link>
        <router-link class="f3" to="/UserCenterViewPage" tag='div'>
            <a href="javascript:;">
                <span>用户中心</span>
            </a>
        </router-link>
    </footer>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return{
            msg:"This is Footer!!"
        }
    }
}
</script>
<style>
.footer{
    position: fixed;
    bottom: -1px;
    left: 50%;
    z-index: 9999;
    transform: translateX(-50%);
    width: 7.5rem;
    height: 1rem;
    border-top: .01rem solid #e1e1e1;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.footer>div{
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height:1rem;
    margin-top: .1rem;
    display: flex;
    justify-content: center;display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-top: -.25rem;
}
.footer a{
    display: block;
    height: 0;
    text-align: center;
    padding-top: .56rem;
    font-size: .2rem;
    font-family: '微软雅黑';
    color: #d4d4d4;
    border-radius: .1rem;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: .5rem;
}

.footer>div:nth-child(1)>a{
    background-image: url(../../assets/iconAll/img/index.png);
}
.footer>div:nth-child(2)>a{
    background-image: url(../../assets/iconAll/img/ty2.png);
}
.footer>div:nth-child(3)>a{
    background-image: url(../../assets/iconAll/img/ty3.png);
}
.bgActiv{
    color: #c69450;
    background-image: url(../../assets/iconAll/img/ty1.png);
}
.footer>div:nth-child(2)>.bgActiv{
    color: #c69450;
    background-image: url(../../assets/iconAll/img/index-1.png);
}
.footer>div:nth-child(3)>.bgActiv{
    color: #c69450;
    background-image: url(../../assets/iconAll/img/index-2.png);
}
a{
    text-decoration: none!important;
}
</style>