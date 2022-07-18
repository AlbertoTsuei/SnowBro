import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'course',
        component: () => import('../views/front/CourseView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'cartrecipient',
        component: () => import('../views/front/CartRecipient.vue')
      },
      {
        path: 'cartfinish',
        component: () => import('../views/front/CartFinish.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/admin/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'order',
        component: () => import('../views/admin/AdminOrder.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/AdminCoupon.vue')
      },
      {
        path: 'article',
        component: () => import('../views/admin/AdminArticle.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  linkActiveClass: 'active'
})

export default router
