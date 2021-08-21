import {App} from 'vue'
import * as echarts from 'echarts'
import {ElIcon, ElMessage, ElNotification, ElScrollbar} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
const components = [
    ElNotification,
    ElIcon,
    ElScrollbar,
    ElMessage
]

/**
 * @author lihh
 * @description 挂载全局内容
 * @param app 
 */
const installGlobal = (app: App) => {
    app.config.globalProperties.$echarts = echarts

    // -- element plus about
    components.forEach(app.use)
}

export {
    installGlobal
}