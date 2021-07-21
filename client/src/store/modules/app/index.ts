import { Module } from 'vuex'
import { AppStateTypes, IRootState } from '@/store/interfaces'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { state } from './state'

const app: Module<AppStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
}

export default app
