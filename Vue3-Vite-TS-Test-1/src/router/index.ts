import { createRouter, createWebHistory } from 'vue-router'
import ChampionOverview from '../views/ChampionOverview.vue'
import ChampionInfo from '../views/ChampionInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ChampionOverview',
      component: ChampionOverview
    },
    {
      path: '/champion/:id',
      name: 'ChampionInfo',
      props: true,
      component: ChampionInfo
    }
  ]
})

export default router
