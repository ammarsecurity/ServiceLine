import { createApp } from "vue";

import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router";
import { MotionPlugin } from "@vueuse/motion";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./style.css";
import { defineRule } from "vee-validate";
import * as _ from "lodash";

defineRule("required", (value: any) => {
  if (!value || !value.length) {
    return "هذا الحقل مطلوب";
  }
  return true;
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});
app.use(VueSweetalert2);
app.use(pinia);
app.mount("#app");
