
import allComponentsPortsView from '@/components/otherContent/OrderoverModel/allComponentsPorts'//已成单入口
import orderAllDepartmentListView from '@/components/otherContent/OrderoverModel/orderAllDepartmentList'//所有部门已成单
import orderAllDepartmentListSearchView from '@/components/otherContent/OrderoverModel/orderAllDepartmentListSearch'//所有部门已成单
import OrderListComponentView from '@/components/otherContent/OrderoverModel/OrderListComponent'//所有部门已成单
import marketOrderListView from '@/components/otherContent/OrderoverModel/marketOrderList'//市场部已成单
import searchOrderView from '@/components/otherContent/OrderoverModel/searchOrder'//已成单搜索
import readOnlyConsultantOrderDetailView from '@/components/otherContent/OrderoverModel/readOnlyConsultantOrderDetail'//咨询师订单详情
import readOnlyDesignerOrderDetailView from '@/components/otherContent/OrderoverModel/readOnlyDesignerOrderDetail'//设计师订单详情
import readOnlyFinanceOrderDetailView from '@/components/otherContent/OrderoverModel/readOnlyFinanceOrderDetail'//财务订单详情
import readOnlyMedicalOrderDetailView from '@/components/otherContent/OrderoverModel/readOnlyMedicalOrderDetail'//医疗订单详情
import readOnlyServiceOrderDetailView from '@/components/otherContent/OrderoverModel/readOnlyServiceOrderDetail'//客服订单详情

export default[
    {
        path:'/allComponentsPortsView',
        name:'allComponentsPorts',
        component:allComponentsPortsView,
    },
    {
        path:'/orderAllDepartmentListView',
        name:'orderAllDepartmentList',
        component:orderAllDepartmentListView,
        
    },
    {
        path:'/orderAllDepartmentListSearchView',
        name:'orderAllDepartmentListSearch',
        component:orderAllDepartmentListSearchView
    },
    {
        path:'/OrderListComponentView',
        name:'OrderListComponent',
        component:OrderListComponentView
    },
    {
        path:'/marketOrderListView',
        name:'marketOrderList',
        component:marketOrderListView
    },
    {
        path:'/searchOrderView',
        name:'searchOrder',
        component:searchOrderView
    },
    {
        path:'/readOnlyConsultantOrderDetailView',
        name:'readOnlyConsultantOrderDetail',
        component:readOnlyConsultantOrderDetailView
    },
    {
        path:'/readOnlyDesignerOrderDetailView',
        name:'readOnlyDesignerOrderDetail',
        component:readOnlyDesignerOrderDetailView
    },
    {
        path:'/readOnlyFinanceOrderDetailView',
        name:'readOnlyFinanceOrderDetail',
        component:readOnlyFinanceOrderDetailView
    },
    {
        path:'/readOnlyMedicalOrderDetailView',
        name:'readOnlyMedicalOrderDetail',
        component:readOnlyMedicalOrderDetailView
    },
    {
        path:'/readOnlyServiceOrderDetailView',
        name:'readOnlyServiceOrderDetail',
        component:readOnlyServiceOrderDetailView
    }
]