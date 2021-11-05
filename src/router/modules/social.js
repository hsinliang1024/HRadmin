//员工路由
import layout from '@/layout'
export default {
    path: '/social',
    name: 'social',
    component: layout,
    children: [{
        path: 'social', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/social'),
        meta: {
            title: '社保',
            icon: 'social'
        }
    }]
}