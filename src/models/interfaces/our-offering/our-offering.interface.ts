import { CaseOfStudy2 } from "@interfaces/home-data/home.interface"

export interface OurOfferingInterface {
    data: Data
  }
  
  export interface Data {
    offer: Offer[]
    services: Service[]
  }
  
  export interface Offer {
    id: number
    icon: string
    description: string
    name: string
    valuePropositions: string[]
    cases: CaseOfStudy2[]
  }
  
  export interface Service {
    id: number
    text: string
    items: number[]
  }
  