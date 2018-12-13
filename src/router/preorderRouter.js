
import PreorderViewModel from '@/components/otherContent/PreorderModel/Preorder'//未成单模块
import LeftPreOrderView from '@/components/otherContent/PreorderModel/LeftPreOrder'//未成单
import RightPreOrderView from '@/components/otherContent/PreorderModel/RightPreOrder'//未成交订单
import SearchPreOrderView from '@/components/otherContent/PreorderModel/SearchPreOrder'//未成交订单搜索
import DetailPreOrderView from '@/components/otherContent/PreorderModel/DetailPreOrder'//未成单详情
import NoDealOrderDetailView from '@/components/otherContent/PreorderModel/NoDealOrderDetail'//未成单详情
import ReadOnlyIntentionOrderView from '@/components/otherContent/PreorderModel/ReadOnlyIntentionOrder'//意向单详情（只读）
import EditIntentionOrderView from '@/components/otherContent/PreorderModel/EditIntentionOrder'//意向单详情（可编辑）

import slideUpPhotoesView from '@/components/otherContent/PreorderModel/slideUpPhotoes'
//<.......................选择项目模块..........................>
// import selectFirstProjectComponentTemplate from '@/components/otherContent/Accordion/selectFirstProjectComponent'//一级项目
// import selectSecondProjectComponentTemplate from '@/components/otherContent/Accordion/selectSecondProjectComponent'//二级项目
// import selectThirdProjectComponentTemplate from '@/components/otherContent/Accordion/selectThirdProjectComponent'//三级项目
// import selectFinallyProjectComponentTemplate from '@/components/otherContent/Accordion/selectFinallyProjectComponent'//最终项目
export default[
 //未成单模块
 {
    path:'/PreorderViewModel',
    component:PreorderViewModel,
    children:[
        {
          path: '/',
          component: LeftPreOrderView,
        },
        {
          path: '/PreorderViewModel/RightPreOrderView',
          name: 'RightPreOrder',
          component: RightPreOrderView
        }
    ],
  },
  {
    path:'/SearchPreOrderView',
    name:'SearchPreOrder',
    component:SearchPreOrderView
  },
  {
    path:'/DetailPreOrderView/:orderid',
    name:'DetailPreOrder',
    component:DetailPreOrderView
  },
  //未成交订单
  {
    path:'/NoDealOrderDetailView/:orderid',
    name:'NoDealOrderDetail',
    component:NoDealOrderDetailView
  },
  {
    path:'/ReadOnlyIntentionOrderView',
    name:'ReadOnlyIntentionOrder',
    component:ReadOnlyIntentionOrderView
  },
  {
    path:'/EditIntentionOrderView',
    name:'EditIntentionOrder',
    component:EditIntentionOrderView
  },
  {
    path:'/slideUpPhotoesView',
    name:'slideUpPhotoes',
    component:slideUpPhotoesView
  },
  // {
  //   path:'/selectFirstProjectComponentTemplate',
  //   name:'selectFirstProjectComponent',
  //   component:selectFirstProjectComponentTemplate
  // },
  // {
  //   path:'/selectSecondProjectComponentTemplate/:id',
  //   name:'selectSecondProjectComponent',
  //   component:selectSecondProjectComponentTemplate
  // },
  // {
  //   path:'/selectThirdProjectComponentTemplate/:id',
  //   name:'selectThirdProjectComponent',
  //   component:selectThirdProjectComponentTemplate
  // },
  // {
  //   path:'/selectFinallyProjectComponentTemplate/:id',
  //   name:'selectFinallyProjectComponent',
  //   component:selectFinallyProjectComponentTemplate
  // },
]