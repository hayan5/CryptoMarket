import { ActionTree } from 'vuex'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { AppActionTypes, AppStateTypes, IRootState } from '@/store/interfaces'
import { getters } from './getters'

export const actions: ActionTree<AppStateTypes, IRootState> & AppActionTypes = {
  [ActionTypes.CLOSE_SIDEBAR]({ commit }) {
    commit(MutationTypes.CLOSE_SIDEBAR)
  },
  [ActionTypes.TOGGLE_SIDEBAR]({ commit }) {
    commit(MutationTypes.TOGGLE_SIDEBAR)
  }
}
