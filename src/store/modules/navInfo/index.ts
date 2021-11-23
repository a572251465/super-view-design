import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { IRootState } from '@/store'
import SETTING_CURRENT_NAV from './method-types'

export interface IRouteDetail {
  label: string
  path: string
}
export interface INavInfo {
  navList: { label: string; value: string }[]
  navDetailInfo: { [value: string]: IRouteDetail[] }
  currentNav: string
}

// -- 表示状态
const navInfoState: INavInfo = {
  navList: [
    { label: 'Vue', value: '1' },
    { label: 'JavaScript', value: '2' },
    { label: '可视化', value: '3' },
    { label: 'Css', value: '4' },
    { label: 'Git', value: '6' },
    { label: 'linux', value: '7' },
    { label: '知识文章', value: '8' },
    { label: '其他作品', value: '5' }
  ],
  navDetailInfo: {
    '1': [{ label: '走进vue', path: 'vue-world' }],
    '2': [{ label: 'JavaScript之子', path: 'javascript-world' }],
    '3': [
      { label: '半仪表盘', path: 'half-hashboard' },
      { label: '简单柱状图', path: 'simple-bar' },
      { label: '简单折线图', path: 'simple-line' },
      { label: '刻度饼状图', path: 'scale-pie' }
    ],
    '4': [{ label: 'css的世界', path: 'css-world' }],
    '6': [{ label: '常用命令', path: 'commonCommandGit' }],
    '7': [{ label: '常用命令', path: 'commonCommandLinux' }],
    '8': [{ label: '常用地址', path: 'commonly-address' }],
    '5': [{ label: '其他作品', path: 'http://lihh-core.top/' }]
  },
  currentNav: '1'
}

// -- getters
const getters: GetterTree<INavInfo, IRootState> = {
  navList: (state) => state.navList,
  navDetailInfo: (state) => state.navDetailInfo
}

// -- mutations
const mutations: MutationTree<INavInfo> = {
  /**
   * @author lihh
   * @description 点击设置当前导航
   * @param state 数据状态中心
   * @param nav 当前导航信息
   */
  [SETTING_CURRENT_NAV](state, nav) {
    // eslint-disable-next-line no-param-reassign
    state.currentNav = nav
  }
}

// -- actions
const actions: ActionTree<INavInfo, IRootState> = {
  /**
   * @author lihh
   * @description 设置当前导航
   * @param commit 提交mutation事件
   * @param nav 表示导航信息
   */
  [SETTING_CURRENT_NAV]({ commit }, nav: string) {
    commit(SETTING_CURRENT_NAV, nav)
  }
}

const navInfo = {
  state: navInfoState,
  getters,
  mutations,
  actions
}
export default navInfo
