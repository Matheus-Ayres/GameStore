import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/homePage.vue';
import LoginPage from '../views/loginPage.vue';
import ResgisterPage from '../views/resgisterPage.vue';
import CartPage from '../views/cartPage.vue';
import ProfilePage from '../views/profilePage.vue';

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
        },
        {
            path: '/cartPage',
            name: 'cartPage',
            component: CartPage
        },
        {
            path: '/profilePage',
            name: 'profilePage',
            component: ProfilePage
        }
    ],
})

export default router