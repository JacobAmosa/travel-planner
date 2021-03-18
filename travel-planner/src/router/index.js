import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Preplanned from "../views/Preplanned"
import Trips from "../views/Trips"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/preplanned",
    name: "Preplanned",
    component: Preplanned,
  },
  {
    path: "/Trips",
    name: "trips",
    component: Trips,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
