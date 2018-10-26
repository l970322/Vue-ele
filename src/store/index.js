import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
 	state,
  mutations
})


//组件调用action，action调用mutations,mutations去改变数据