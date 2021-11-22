//员工路由
import layout from '@/layout'
export default {
    path: '/staff',
    component: layout,
    children: [{
        path: '', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/staff/index'),
        meta: {
            title: '员工管理',
            icon: 'staff'
        }
    }]
}