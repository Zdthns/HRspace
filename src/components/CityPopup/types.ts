export interface District {
  id: string
  name: string
  areas: Region[]
}

export interface Region {
  id: string
  name: string
  areas: City[]
}

export interface City {
  id: string
  name: string
}
