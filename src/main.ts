import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/global.css";
import * as echarts from "echarts";
import "echarts-gl";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(store).use(router).mount("#app");
