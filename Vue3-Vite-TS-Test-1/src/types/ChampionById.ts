export interface ChampionById {
  data: {
    [key: string]: {
      id: string,
      stats: {
        [key: string]: number
      }
    }
  }  
}


