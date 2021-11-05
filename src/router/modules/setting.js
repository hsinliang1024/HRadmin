//员工路由
import layout from '@/layout'
export default {
    path: '/setting',
    name: 'setting',
    component: layout,
    children: [{
        path: 'setting', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/setting'),
        meta: {
            title: '员工管理'
        }
    }]
}