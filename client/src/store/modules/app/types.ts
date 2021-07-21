import {
  AppStateTypes,
  AppMutationTypes,
  AppGetterTypes,
  AppActionTypes
} from '@/store/interfaces'

import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

export type AppStoreModuleTypes<S = AppStateTypes> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof AppMutationTypes,
    P extends Parameters<AppMutationTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AppMutationTypes[K]>
} & {
  getters: {
    [K in keyof AppGetterTypes]: ReturnType<AppGetterTypes[K]>
  }
} & {
  dispatch<K extends keyof AppActionTypes>(
    key: K,
    payload?: Parameters<AppActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AppActionTypes[K]>
}
