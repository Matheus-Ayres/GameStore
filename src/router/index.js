import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/homePage.vue';
import LoginPage from '../views/loginPage.vue';
import ResgisterPage from '../views/resgisterPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
        {
            path: '/loginPage',
            name: 'loginPage',
            component: LoginPage
        },
        {
            path:'/registerPage',
            name: 'registerPage',
            component: ResgisterPage
        }
    ],
})

export default router