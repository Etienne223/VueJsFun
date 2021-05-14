import Vue from "vue";
import Router from "vue-router";
import LoginPage from "../views/Login.vue";
import GamePage from "../views/Game.vue";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/game",
      name: "GameStart",
      component: GamePage,
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
    },
  ],
});
