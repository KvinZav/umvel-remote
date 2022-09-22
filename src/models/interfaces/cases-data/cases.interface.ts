import { Logo, Meta } from "@interfaces/home-data/home.interface"

export interface CasesDataInterface {
  cases: CaseItem[]
}

export interface CaseItem {
  data: CaseData
  meta: Meta
}

export interface CaseData {
  id: number
  attributes: CaseAttributes
}

export interface CaseAttributes {
  title: string
  caseDescription: string
  primaryColor: string
  secondaryColor: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  portfolioTitle: string
  portfolioDescription: string
  portfolioDataOfInterest: string
  logo: Logo
  image: Logo
  challenge: ChallengeData
  technicalInformation: TechnicalInformation
  deliverValue: DeliverValue
  feature: Feature
  quote: Quote
  whatWeLearned: WhatWeLearned
}

export interface WhatWeLearned {
  title: string
  content: string
  images: Logo[]
}

export interface Quote {
  body: string
  client: Client
}

export interface Client {
  name: string
  title: string
  photo: Logo
}

export interface Feature {
  id: number
  title: string
  keyFeatures: KeyFeature[]
}

export interface KeyFeature {
  id: number
  title: string
  content: string
  icon: Logo
}

export interface DeliverValue {
  id: number
  title: string
  list: Value[]
}

export interface Value {
  id: number
  title: string
  content: string
}

export interface ChallengeData {
  id: number
  title: string
  content: string
  callToAction: CallToAction[]
  images: Logo[]
}

export interface CallToAction {
  id: number,
  action: Action
  title: string
  subtitle: string
}

export interface Action {
  openUrl: string
}

export interface TechnicalInformation {
  title: string
  industry: string
  year: string
  country: string
  platforms: string[],
  services: string[]
}