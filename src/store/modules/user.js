import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getInfo } from '@/api/user'

const state = {
    token: getToken(), //保存登录状态
    userInfo: {},
}
const mutations = {
        // 设置token
        setToken(state, token) {
            state.token = token
            setToken(token) // vuex和 缓存数据的同步
        },
        // 删除缓存
        removeToken(state) {
            state.token = null
            removeToken() // 清除 vuex和缓存数据
        },
        // 设置用户信息
        setUserInfo(state, userInfo) {
            state.userInfo = {...userInfo } // 用 浅拷贝的方式去赋值对象 因为这样数据更新之后，才会触发组件的更新
                // state.name = userInfo.name
        },
        // 删除用户信息
        reomveUserInfo(state) {
            state.userInfo = {}
        }
    }
    // 执行异步
const actions = {
    // 定义login action 
    async login(context, data) {
        const result = await login(data)
            // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
            // 现在有用户token
        context.commit('setToken', result.token) //提交给mutations设置token
    },
    // 获取用户资料action
    async getInfo(context) {
        const UserToken = getToken()
        const result = await getInfo(UserToken) // 获取返回值
        context.commit('setUserInfo', result.UserInfo) // 因为接口传过来的数据加了一层UserInfo
        return result // 这里为什么要返回 为后面埋下伏笔
    },
    //登出功能
    logout(context) {
        // 删除token
        context.commit('removeToken') // 不仅仅删除了vuex中的 还删除了缓存中的
            // 删除用户资料
        context.commit('removeUserInfo') // 删除用户信息
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}