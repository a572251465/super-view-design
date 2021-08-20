import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {installGlobal} from '@/plugins/global'
import * as echarts from 'echarts'
import {ElNotification} from 'element-plus'

createApp(App).use(installGlobal).use(store).use(router).mount('#app')

// -- 引入共同的css
import '@/assets/css/common.css'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $echarts: typeof echarts
        $notify: typeof ElNotification
    }
}