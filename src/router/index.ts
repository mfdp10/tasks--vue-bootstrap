import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TasksView from "../views/TasksView.vue";
import TaskDetailsView from "../views/TaskDetailsView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";

import RegisterView from "../views/RegisterView.vue";
import useAuth from "@/store/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/taskDetails/:id",
    name: "taskDetails",
    component: TaskDetailsView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  const isAuth = auth.token;

  if (to.meta.requireAuth && isAuth == null) {
    next("login");
  } else {
    next();
  }
});

export default router;
