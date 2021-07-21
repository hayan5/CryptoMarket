import { createStore } from 'vuex'
import { IRootState } from './interfaces'
import { AppStoreModuleTypes } from './modules/app/types'

import root from './modules/root'

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })

export default createStore<IRootState>(root)

// type StoreModules = {
//   appModule: AppStoreModuleTypes
// }

// export type Store = AppStoreModuleTypes<Pick<StoreModules, 'appModule'>>
