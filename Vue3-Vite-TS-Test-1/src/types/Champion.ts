export interface Champion {
  data: {
    [key: string]: {
      id: string,
      stats: {
        [key: string]: number
      }
    }
  }  
}
