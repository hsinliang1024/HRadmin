//员工导入
import layout from '@/layout'
export default {
    path: '/uploadExcel',
    component: layout,
    children: [{
        path: '', //当二级路由path为空时，会作为默认
        component: () =>
            import ('@/views/uploadExcel')
    }]
}