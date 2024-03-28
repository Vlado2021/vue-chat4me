import Main from "@/pages/Main.vue";
import {createRouter} from "vue-router";
import { createWebHistory } from 'vue-router'
import UserPage from "@/pages/UserPage.vue";
import About from "@/pages/About.vue";
//import PostIdPage from "@/pages/PostIdPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";


const routes=[
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
   
    {
        path: '/store',
        component: PostPageWithStore
    }

    

]

const router = createRouter ({
    routes,
    history: createWebHistory()
}) 

export  default router;