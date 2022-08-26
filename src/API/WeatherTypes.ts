type Location = {
   country: string,
   localtime: string,
   name: string,
   region: string
}
type Current = {
   last_update: string,
   temp_c: number
   condition: {
      icon: string
      text: string,
   }
}

export interface WeatherType {
   location: Location,
   current: Current
}