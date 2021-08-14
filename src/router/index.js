import Vue from "vue";
import VueRouter from "vue-router";
import Favourites from "@/pages/Favourites";
import HistorySearch from "@/pages/HistorySearch";
import Main from "@/pages/Main";
import GridItem from "@/components/GridItem";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    name: 'main'
  },
  {
    path: '/grid',
    component: GridItem,
    name: 'gridItem'
  },
  {
    path: "/favourites",
    component: Favourites,
    name: "favourites",
  },
  {
    path: "histories",
    component: HistorySearch,
    name: "histories",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
