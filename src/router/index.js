import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from "../views/Books"
import Login from "../views/Login"
import Logout from "../views/Logout"
import SignUp from "../views/SignUp"
import Words from "../views/Words"
import Profile from "../views/Profile"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
