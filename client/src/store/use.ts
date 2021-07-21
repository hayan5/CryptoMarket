// import { Store } from '@/store'

import { useStore as VuexStore, Store } from 'vuex'
import { IRootState } from './interfaces'
/**
 * Returns Whole Store Object
 */
export function useStore(): Store<IRootState> {
  return VuexStore()
}
