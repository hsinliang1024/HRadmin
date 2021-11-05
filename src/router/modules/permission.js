//员工路由
import layout from '@/layout'
export default {
    path: '/permission',
    name: 'permission',
    component: layout,
    children: [{
        path: 'permission', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/permission'),
        meta: {
            title: '员工管理'
        }
    }]
}