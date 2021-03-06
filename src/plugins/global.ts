import { App } from 'vue'
import * as echarts from 'echarts'
import { ElCollapse, ElCollapseItem, ElIcon, ElMessage, ElNotification, ElScrollbar } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const components = [ElNotification, ElIcon, ElScrollbar, ElMessage, ElCollapse, ElCollapseItem]

/**
 * @author lihh
 * @description 挂载全局内容
 * @param app
 */
const installGlobal = (app: App): void => {
  /* eslint-disable no-param-reassign */
  app.config.globalProperties.$echarts = echarts

  // -- element plus about
  components.forEach(app.use)
}

export default installGlobal
