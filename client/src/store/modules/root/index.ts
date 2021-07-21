import { Module, ModuleTree } from 'vuex'
import { IRootState } from '@/store/interfaces'
import app from '../app/index'

const modules: ModuleTree<IRootState> = {
  app
}

const root: Module<IRootState, IRootState> = {
  modules
}

export default root
