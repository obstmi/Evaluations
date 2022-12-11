import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getAllChampions () {
    return await apiClient.get('/12.22.1/data/en_US/champion.json')
  },
  async getChampionById (id: string) {
    return await apiClient.get('/12.22.1/data/en_US/champion/' + id + '.json')
  }
}
