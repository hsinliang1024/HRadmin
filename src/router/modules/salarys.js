//工资
import layout from '@/layout'
export default {
    path: '/salarys',
    name: 'salarys',
    component: layout,
    children: [{
        path: 'salarys', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/salarys'),
        meta: {
            title: '工资',
            icon: 'salarys'
        }
    }]
}