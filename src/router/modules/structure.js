//员工路由
import layout from '@/layout'
export default {
    path: '/structure',
    name: 'Structure',
    component: layout,
    children: [{
        path: 'structure', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/structure'),
        meta: {
            title: '公司结构',
            icon: 'structure'
        }
    }]
}