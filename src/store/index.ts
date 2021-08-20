import { createStore } from 'vuex'
import navInfo, {INavInfo} from './modules/navInfo'
import createPersistedState from "vuex-persistedstate"

export interface IRootState {
  navInfo: INavInfo
}

export default createStore({
  plugins: [
    createPersistedState({storage: window.sessionStorage})
  ],
  modules: {
    navInfo: {namespaced: true, ...navInfo}
  }
})
