import { Logo } from "@interfaces/home-data/home.interface"

export interface AboutUsInterface {
  data: AboutUsData
}

interface AboutUsData {
  id: number
  attributes: AboutUsAttributes
}

interface AboutUsAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  header: AboutUsHeader
  quotes: Quotes
  team: Team
}

interface Team {
  id: number
  title: string
  subtitle: string
  teamMembers: TeamMember[]
}

interface TeamMember {
  id: number
  name: string
  position: string
  photo: Logo
}

interface Quotes {
  id: number
  title: string
  subtitle: string
  philosophy: Philosophy
}

interface Philosophy {
  title: string
  body: string
  bulletPoints: PhilosophyBulletPoint[]
}

interface PhilosophyBulletPoint {
  id: number
  body: string
}

interface AboutUsHeader {
  id: number
  title: string
  subtitle: string
  highlightText: HighlightText[]
}

interface HighlightText {
  id: number
  title: string
}