import { createStore } from 'vuex'
import { useStore as VuexStore, Store } from 'vuex'
import { IRootState } from './interfaces'
import root from './modules/root'

export default createStore<IRootState>(root)

export function useStore(): Store<IRootState> {
  return VuexStore()
}
