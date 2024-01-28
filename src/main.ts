import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
import { createI18n } from "vue-i18n";
import { enLogin } from "./lang/enLogin";
import { esLogin } from "./lang/esLogin";
import { enRegister } from "./lang/enRegister";
import { esRegister } from "./lang/esRegister";
import { enTask } from "./lang/enTask";
import { esTask } from "./lang/esTask";

const mess = {
  en: { ...enLogin, ...enRegister, ...enTask },
  es: { ...esLogin, ...esRegister, ...esTask },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: mess,
});

addIcons(FaFlag, RiZhihuFill);

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.component("v-icon", OhVueIcon);
app.use(i18n);

app.use(router).use(pinia).mount("#app");
