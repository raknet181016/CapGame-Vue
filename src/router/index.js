import { createRouter, createWebHistory } from "vue-router"
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Recover from '../views/Recover.vue'
import Home from '../views/Home.vue'
import HomeLayout from '../views/HomeLayout.vue'
import Faq from '../views/Faq.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/recover',
        name: 'Recover',
        component: Recover,
    },
    {
        path: '/',
        name: 'HomeLayout',
        component: HomeLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/faq',
                name: 'Faq',
                component: Faq,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router