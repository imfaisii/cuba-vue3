import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/register",
        component: () => import("../pages/Guest/Register.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
