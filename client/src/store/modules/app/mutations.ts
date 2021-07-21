import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { AppStateTypes, AppMutationTypes } from '@/store/interfaces'

export const mutations: MutationTree<AppStateTypes> & AppMutationTypes = {
  [MutationTypes.CLOSE_SIDEBAR](state: AppStateTypes) {
    state.sidebar.opened = false
  },
  [MutationTypes.TOGGLE_SIDEBAR](state: AppStateTypes) {
    state.sidebar.opened = !state.sidebar.opened
  }
}
