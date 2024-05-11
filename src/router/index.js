import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import ylHome from '@/views/ylHome/index.vue'
// import ylWe from '@/views/ylWe/index.vue'
// import ylIntro from '@/views/ylIntro/index.vue'
// import ylBaoMing from '@/views/ylBaoMing/index.vue'
// import ylYangben from '@/views/ylYangben/index.vue'
// import ylOnline from '@/views/ylOnline/index.vue'
// import ylContent from '@/views/ylContent/index.vue'
// import ylImg from '@/views/ylImg/index.vue'
// import ylSearch from '@/views/ylSearch/index.vue'
// import stuZs from '@/views/stuZs/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: ylHome,
    meta: {
      type: true,
      title: '职业技能培训学校'
    }
  },
  {
    path: '/ylWe',
    component: () => import('@/views/ylWe/index.vue'),
    meta: {
      type: true,
      title: '联系我们'
    }
  },
  {
    path: '/ylIntro',
    component: () => import('@/views/ylIntro/index.vue'),
    meta: {
      type: true,
      title: '学校介绍'
    }
  },
  {
    path: '/ylContent',
    component: () => import('@/views/ylContent/index.vue'),
    meta: {
      type: true,
      title: '职业技能培训学校'
    }
  },
  {
    path: '/ylBaoMing',
    component: () => import('@/views/ylBaoMing/index.vue'),
    meta: {
      type: true,
      title: '职业技能培训学校'
    }
  },
  {
    path: '/ylYangben',
    component: () => import('@/views/ylYangben/index.vue'),
    meta: {
      type: true,
      title: '职业技能培训学校'
    }
  },
  {
    path: '/ylOnline',
    component: () => import('@/views/ylOnline/index.vue'),
    meta: {
      type: true,
      title: '在线报名'
    }
  },
  {
    path: '/ylImg',
    component: () => import('@/views/ylImg/index.vue'),
    meta: {
      type: true
    }
  },
  {
    path: '/ylSearch',
    component: () => import('@/views/ylSearch/index.vue'),
    meta: {
      type: true,
      title: '证书查询'
    }
  },
  {
    path: '/stuZs',
    component: () => import('@/views/stuZs/index.vue'),
    meta: {
      type: false,
      title: '证书结果查询'
    }
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.asideFlag) {
    store.commit('upAsideFlag', true)
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
