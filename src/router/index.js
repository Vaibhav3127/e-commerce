import Home from "../components/home.vue";
import SignUp from "../components/signup.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/login.vue";
const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
