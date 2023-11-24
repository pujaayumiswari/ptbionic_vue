import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

createApp(App).component("pulse-loader", PulseLoader).mount("#app");
