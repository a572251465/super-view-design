import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import navInfo, { INavInfo } from "./modules/navInfo";

export interface IRootState {
  navInfo: INavInfo;
}

export default createStore({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  modules: {
    navInfo: { namespaced: true, ...navInfo },
  },
});
