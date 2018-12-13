import Vue from 'vue'
import Router from 'vue-router'
//客户管理路由
import preorder from './preorderRouter'//未成单
import agent from './agentRouter'//代理商
import clientele from './clienteleRouter'//客户
import assignement from './assignementRouter'//任务
import development from './developmentRouter'//开发
import investgation from './investigationRouter'//调查
import itemsurelist from './itemSureListRouter'//项目确认单
import orderoverlist from './orderoverListRouter'//已成单
import payvisit from './payVisitRouter'//回访
import performance from './perFormanceRouter'//业绩
import storeRoute from './storeRouter'//店铺
import tab from './tabRouter'//客户管理、办公自动化、个人中心
import taskdistribut from './taskDistributRouter'//任务分发

Vue.use(Router)

export default new Router({
  mode: 'history',//（使用history模式）
  routes: [
    ...preorder,
    ...agent,
    ...clientele,
    ...assignement,
    ...development,
    ...investgation,
    ...itemsurelist,
    ...orderoverlist,
    ...payvisit,
    ...performance,
    ...storeRoute,
    ...tab,
    ...taskdistribut
  ]
})



