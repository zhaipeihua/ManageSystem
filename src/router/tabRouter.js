import Login from '@/components/Login'
import CustomManageViewPage from '@/components/otherContent/CustomManage'
import switchingUserRoles from '@/components/otherContent/switchingUserRoles'
import ManageViewPage from '@/components/otherContent/Manage'
import OfficeViewPage from '@/components/otherContent/Office'
import UserCenterViewPage from '@/components/otherContent/UserCenter'
export default[
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    //角色切换
    {
      path: '/switchingUserRoles',
      name: 'switchingUser',
      component: switchingUserRoles
    },
    {
        path: '/CustomManageViewPage',
        component: CustomManageViewPage,
        children: [  //这里就是二级路由的配置
               {
                 path: '/',
                 component: ManageViewPage,
               },
               {
                 path: '/OfficeViewPage',
                 name: 'Office',
                 component: OfficeViewPage
               },
               {
                 path: '/UserCenterViewPage',
                 name: 'UserCenter',
                 component: UserCenterViewPage
               }
           ] 
   },
   {
    path: '*',
    name: 'Login1',
    component: Login
  },
]