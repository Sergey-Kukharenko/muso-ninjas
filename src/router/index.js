import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/auth/Login";
import Signup from "@/views/auth/Signup";
import CreatePlaylist from "@/views/playlists/CreatePlaylist";

// routes guard
import {projectAuth} from "@/firebase/config";
import PlayListDetails from "@/views/playlists/PlayListDetails";
import UserPlaylists from "@/views/playlists/UserPlaylists";

const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if (!user) {
        next({name: 'Login'})
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: requireAuth
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/playlists/create',
        name: 'CreatePlaylist',
        component: CreatePlaylist,
        beforeEnter: requireAuth
    },
    {
        path: '/playlists/:id',
        name: 'PlayListDetails',
        component: PlayListDetails,
        beforeEnter: requireAuth,
        props: true
    },
    {
        path: '/playlists/user',
        name: 'UserPlaylists',
        component: UserPlaylists,
        beforeEnter: requireAuth
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
