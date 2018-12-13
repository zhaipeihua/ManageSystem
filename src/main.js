// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import qs from 'qs';
//第三方组件
import PopUp from 'vc-popup'
import 'vc-popup/lib/style.css'
import 'mint-ui/lib/style.css'
import '../static/all_js/mobleRem.js'
import jsonUrl from '../manageUrl/jsonUrl'


import Mint from 'mint-ui'
//引入第三方js处理数据
import lodash from 'lodash'
import VueLodash from 'vue-lodash' 
//点击查看大图
import VcPopupImgViewer from 'vc-popup-img-viewer'

Vue.use(VcPopupImgViewer)

Vue.use(Mint);

Vue.use(VueLodash, lodash)

Vue.use(PopUp)

Vue.prototype.$http=axios;
Vue.prototype.$qs=qs;
Vue.prototype.$Url=jsonUrl;


//计算项目的数量(意向项目，赠送项目，感兴趣项目)
Vue.prototype.sumProjectNumber=function(projectArr){
  let getNumber=0;
  _.forEach(projectArr,e=>{
      getNumber +=e.number//感兴趣项目数量
  });
  return getNumber
}
//创建自己的项目对象(项目添加与项目列表显示的数据格式统一)
Vue.prototype.createObjc=function(project_name,project_id,price,remark,design_price,number){
  let obj = new Object();
  obj.label = project_name;
  obj.value=project_id;
  obj.project_id = project_id;
  obj.price = price;
  obj.remark = remark;
  obj.design_price=design_price;
  obj.number=number
  return obj;
},

// Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  components: { App },
  template: '<App/>'
})
