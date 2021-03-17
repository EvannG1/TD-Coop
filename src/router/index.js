import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/Members.vue')
  },
  {
    path: '/member/:id',
    name: 'member',
    component: () => import('../views/Member.vue')
  },
  {
    path: '/conversation/create',
    name: 'CreateConversation',
    component: () => import('../views/CreateConversation.vue')
  },
  {
    path: '/conversation/:id',
    name: 'conversation',
    component: () => import('../views/Conversation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
