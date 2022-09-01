import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/scss/bootstrap.scss";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
