<template>
  <h1>League of Legends Champion Overview</h1>
  <h4>For more information click on a picture</h4>
  <div class="card-container">
    <ChampionCard v-for="(champion, index) in champions.data" :key="index" :champion="champion"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChampionService from '../services/ChampionService'
import type { Ref } from 'vue'
import type { Champions } from '../types/Champions'
import ChampionCard from '../components/ChampionCard.vue'

let champions = ref({}) as Ref<Champions>

function getAllChampions() {
  ChampionService.getAllChampions()
    .then((response: { data: Champions }) => {
      champions.value = response.data
    })
    .catch((error: any) => {
      console.log(error)
    })
}

onMounted(() => {
   getAllChampions()
})

</script>