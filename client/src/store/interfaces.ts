import { ActionContext } from 'vuex'
import { MutationTypes as AppMTypes } from './modules/app/mutation-types'
import { ActionTypes as AppATypes } from './modules/app/action-types'

export interface IRootState {
  app: AppStateTypes
}

export interface AppStateTypes {
  sidebar: {
    opened: Boolean
    withoutAnimation?: boolean
  }
  size?: string
}

export interface AppGetterTypes {
  sidebar(state: AppStateTypes): Boolean
}

export type AppMutationTypes<S = AppStateTypes> = {
  [AppMTypes.CLOSE_SIDEBAR](state: S): void
  [AppMTypes.TOGGLE_SIDEBAR](state: S): void
}

type AugmentedActionContextApp = {
  commit<K extends keyof AppMutationTypes>(
    key: K,
    payload?: Parameters<AppMutationTypes[K]>[1]
  ): ReturnType<AppMutationTypes[K]>
} & Omit<ActionContext<AppStateTypes, IRootState>, 'commit'>

export interface AppActionTypes {
  [AppATypes.CLOSE_SIDEBAR]({ commit }: AugmentedActionContextApp): void
  [AppATypes.TOGGLE_SIDEBAR]({ commit }: AugmentedActionContextApp): void
}
