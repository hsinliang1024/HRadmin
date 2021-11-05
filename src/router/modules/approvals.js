//审计报表
import layout from '@/layout'
export default {
    path: '/approvals',
    name: 'Approvals',
    component: layout,
    children: [{
        path: 'approvals', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/approvals'),
        meta: {
            title: '审计报表',
            icon: 'approvals'
        }
    }]
}