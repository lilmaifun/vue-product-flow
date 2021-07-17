import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import CreateReview from '../views/CreateReview'
import ViewReviews from '../views/ViewReviews'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/createreview',
        name: 'CreateReview',
        component: CreateReview,
    },
    {
        path: '/viewreviews',
        name: 'ViewReviews',
        component: ViewReviews,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router