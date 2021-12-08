//员工路由
import layout from '@/layout'
export default {
    path: '/setup',
    // name: 'Setup',
    component: layout,
    children: [{
        path: '', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/setup'),
        meta: {
            title: '角色管理',
            icon: 'jsgl'
        }
    }]
}