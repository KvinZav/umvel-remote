import React from 'react';
import { HighlightSubtitle, HighlightTitle } from '../modules/TextComponents';

type CaseOfStudyType = {
  data: {
    attributes: {
      caseDescription: string
      createdAt: string
      portfolioDataOfInterest: string
      portfolioDescription: string
      portfolioTitle: string
      primaryColor: string
      publishedAt: string
      secondaryColor: string
      title: string
      updatedAt: string
    }
  }
}

type CaseType = {
  id: number
  Title: string
  Subtitle: string
  case_of_study: CaseOfStudyType
}

type HighlightProps = {
  cases: Array<CaseType>
}

const Highlights = ({cases} : HighlightProps) => {  
  
  return(
    <section className="flex md:grid md:grid-cols-1 lg:grid-cols-3 md:justify-center overflow-x-scroll md:overflow-auto">
      {cases.map((i, n) => (
        <section className={`min-w-[84vw] md:min-w-full md:flex ${n%2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} lg:flex-col pt-0`} key={i.id+''}>
          <div className="p-6 lg:p-8 lg:pt-0 box-border md:flex-1 md:basis-1/2 lg:flex-auto lg:basis-auto">
            <HighlightTitle>{i.Title}</HighlightTitle>
            <HighlightSubtitle>{i.Subtitle}</HighlightSubtitle>
          </div>
          {/* Card */}
          <div
            className={`md:flex-1 md:basis-1/2 lg:flex-auto lg:basis-auto aspect-square bg-red-500`}
          />
        </section>
      ))}
    </section>
  )
}

export default Highlights;