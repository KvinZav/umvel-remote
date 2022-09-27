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
  }
  
  export interface Service {
    id: number
    text: string
    items: number[]
  }
  