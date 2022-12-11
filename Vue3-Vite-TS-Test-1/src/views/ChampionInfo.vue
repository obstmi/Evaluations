<template>
  <div class="card">
    <div class="goBack">
      <button
          rel="noopener noreferrer"
          @click.prevent.stop="goBack"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </svg>
      </button>
    </div>
    <h1>{{ championName }}</h1>
    <img :src="imageURL" :alt="championName">
    <div class="statTable">
      <table>
        <tr v-for="(value, stat, index) in championAttributes " :key="index">
          <th>
            {{ stat }}
          </th>
          <td>
            {{ value }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import ChampionService from '../services/ChampionService'
import type { Ref } from 'vue'
import type { ChampionById } from '../types/ChampionById'

const baseURL = 'https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/'
const imgExtension = '.png'
let champion: Ref<ChampionById> = {} as Ref<ChampionById>
let championName = "" 
let imageURL = ""
let championAttributes = ref({})

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

function getChampionById(id: string) {
  ChampionService.getChampionById (id)
    .then((response: { data: ChampionById }) => {
      champion.value = response.data
      fetchChampionProperties (Object.keys(champion.value.data)[0])
    })
    .catch((error: any) => {
      console.log(error)
    })
}

function fetchChampionProperties (championKey: string) {
  championName = champion.value.data[championKey].id
  imageURL = baseURL + championName + imgExtension
  championAttributes.value = champion.value.data[championKey].stats
}

function goBack () {
  return window.history.back()
}

onBeforeMount(() => {
  getChampionById(props.id)
})

</script>
