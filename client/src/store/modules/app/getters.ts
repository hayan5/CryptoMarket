import { GetterTree } from 'vuex'
import { AppGetterTypes, AppStateTypes, IRootState } from '@/store/interfaces'

export const getters: GetterTree<AppStateTypes, IRootState> & AppGetterTypes = {
  sidebar: (state: AppStateTypes) => {
    return state.sidebar.opened
  }
}
