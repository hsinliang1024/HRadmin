//员工路由
import layout from '@/layout'
export default {
    path: '/attendances',
    name: 'Attendances',
    component: layout,
    children: [{
        path: 'attendances', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/attendances'),
        meta: {
            title: '考勤',
            icon: 'attendances'
        }
    }]
}