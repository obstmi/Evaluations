<template>
    <router-link :to="{ name: 'ChampionInfo', params: { id: champion.id }}">
      <div class="card">
        <h2 class="card-title">{{ champion.name }}</h2>
        <img class="overviewImage" :src="baseURL + props.champion.id + imgExtension" :alt="props.champion.name">
      </div>
    </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Champion } from '../types/Champion'

const baseURL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
const imgExtension = '_0.jpg'

const props = defineProps({
  champion: {
    type: Object as PropType<Champion>,
    required: true
  }
})
</script>
