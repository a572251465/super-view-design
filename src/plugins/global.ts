import {App} from 'vue'
import * as echarts from 'echarts'

/**
 * @author lihh
 * @description 挂载全局内容
 * @param app 
 */
const installGlobal = (app: App) => {
    app.config.globalProperties.$echarts = echarts
}

export {
    installGlobal
}