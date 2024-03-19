import Main from "@/pages/Main.vue";
import {createRouter} from "vue-router";
import { createWebHistory } from 'vue-router'
import UserPage from "@/pages/UserPage.vue";

const routes=[
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPage
    }
]

const router = createRouter ({
    routes,
    history: createWebHistory()
}) 

export  default router;