<<<<<<< HEAD
import MainPageController from "@/controllers/MainPageController"
import ItemPageController from "@/controllers/ItemPageController"

export const routes = [
    {
        path: "/air-recipes",
        component: MainPageController
    },
    {
        path: "/air-recipes/:id",
        component: ItemPageController
    }
]
=======
import {createRouter, createWebHistory} from "vue-router"
import { routes } from "@/router/routes"

export default createRouter({
    routes,
    history: createWebHistory()
})
>>>>>>> recipes-5-refactoring
