import { createApp } from "vue";
import * as echarts from "echarts";
import { ElMessage, ElNotification } from "element-plus";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import installGlobal from "@/plugins/global";

// -- 引入共同的css
import "@/assets/css/common.css";

createApp(App).use(installGlobal).use(store).use(router).mount("#app");

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $echarts: typeof echarts;
    $notify: typeof ElNotification;
    $message: typeof ElMessage;
  }
}
