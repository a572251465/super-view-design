import {IRootState} from '@/store'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { SETTING_CURRENT_NAV } from './method-types'

export interface IRouteDetail {
    label: string,
    path: string
}
export interface INavInfo {
    navList: {label: string, value: string}[],
    navDetailInfo: {[value: string]: IRouteDetail[]},
    currentNav: string
}

// -- 表示状态
const state: INavInfo = {
    navList: [
        {label: '可视化', value: '1'},
        {label: 'Css', value: '2'},
        {label: 'JavaScript', value: '3'},
        {label: 'Html', value: '4'},
        {label: 'Vue', value: '5'},
        {label: 'Git', value: '6'},
        {label: 'linux', value: '7'},
        {label: '常用地址', value: '8'}
    ],
    navDetailInfo: {
        '1': [
            {label: '半仪表盘', path: 'half-hashboard'},
            {label: '简单柱状图', path: 'simple-bar'},
            {label: '简单折线图', path: 'simple-line'},
            {label: '刻度饼状图', path: 'scale-pie'}
        ],
        '2': [
            {label: '两列布局', path: 'twoLayout'},
            {label: '三列布局', path: 'threeLayout'},
            {label: '圣杯布局', path: 'grailLayout'},
            {label: '双飞翼布局', path: 'dobuleWingsLayout'}
        ],
        '6': [
            {label: '常用命令', path: 'commonCommandGit'}
        ],
        '7': [
            {label: '常用命令', path: 'commonCommandLinux'}
        ],
        '8': [
            {label: '常用地址', path: 'commonly-address'}
        ]
    },
    currentNav: '1'
}

// -- getters
const getters: GetterTree<INavInfo, IRootState> = {
    navList: state => state.navList,
    navDetailInfo: state => state.navDetailInfo
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
    [SETTING_CURRENT_NAV]({commit}, nav: string) {
        commit(SETTING_CURRENT_NAV, nav)
    }
}

const navInfo = {
    state,
    getters,
    mutations,
    actions
}
export default navInfo
