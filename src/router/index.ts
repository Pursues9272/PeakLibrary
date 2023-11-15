import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCounterStore } from '@/stores/counter'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/first-page',
          name: 'FirstPageView',
          meta: {
            title: '首页'
          },
          component: () => import('../views/firstPage_module/FirstPageView.vue')
        },
        {
          path: '/detection-data',
          name: 'DetectionDataView',
          meta: {
            title: '检测数据'
          },
          component: () => import('../views/detectionData_module/DetectionDataView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/logo-view',
      name: 'LogonView',
      component: () => import('../views/logon_module/LogonView.vue')
    },
    {
      path: '/system-header',
      name: 'SystemHeader',
      component: () => import('../components/common/SystemHeader.vue')
    },
    {
      path: '/system-navLeft',
      name: 'SystemNavLeft',
      component: () => import('../components/common/SystemNavLeft.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const counterStore = useCounterStore()
  console.log('路由信息1=>', counterStore.headCount)
  counterStore.increment()
  next()
})

// router.beforeResolve((to, from, next) => {
//   console.log("路由信息1.5=>", to, from, next);
//   next();
// })

// router.afterEach((to, from) => {
//   console.log("路由信息2=>", to, from);
// })

export default router
