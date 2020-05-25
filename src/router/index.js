import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/home.vue');
const Cart = () =>
    import ('../views/cart/cart.vue');
const Classify = () =>
    import ('../views/classify/classify.vue');
const Mine = () =>
    import ('../views/mine/mine.vue');

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [{
    path: '',
    redirect: '/home',
    //name: 'Home',
    //component: Home
}, {
    path: '/home',
    component: Home
        // name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.

}, {
    path: '/cart',
    component: Cart
}, {
    path: '/classify',
    component: Classify
}, {
    path: '/mine',
    component: Mine
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router