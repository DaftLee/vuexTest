/**
 * vuex的核心管理模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 0
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }

}

const actions = {
  increment ({commit}) { // commit执行mutations中的方法
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  },
  incrementIfeven ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('increment')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

// 计算属性
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个getter计算属性函数的对象
})
