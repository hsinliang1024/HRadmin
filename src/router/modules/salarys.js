//工资
import layout from '@/layout'
export default {
    path: '/salarys',
    component: layout,
    children: [{
            path: '', //当二级路由path为空时，会作为默认
            component: () =>
                import ('@/views/salarys'),
            meta: {
                title: '工资',
                icon: 'salarys'
            }
        },
        {
            path: 'detail/:id',
            hidden: true,
            component: () =>
                import ('@/views/salarys/components/detail.vue')
        }
    ]
}