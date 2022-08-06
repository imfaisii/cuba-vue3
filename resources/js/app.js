import { createApp } from "vue/dist/vue.esm-bundler.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import router from "./router";
import "./bootstrap";

const app = createApp({});

app.use(router);

app.mount("#app");
