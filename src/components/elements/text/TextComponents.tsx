import React from 'react';

type HeadingProps = {
  children: string
}

export const HighlightTitle = ({ children }: HeadingProps) => (
  <h1
    className="font-bold leading-tight text-[32px] lg:text-4xl sm:text-[34px] mb-2">
    {children}
  </h1>
)

export const HighlightSubtitle = ({ children }: HeadingProps) => (
  <h2
    className="leading-tight text-base h-10 xl:h-auto">
    {children}
  </h2>
)

export const ClientsTitle = ({ children }: HeadingProps) => (
  <h1
    className="leading-tight font-bold text-3xl sm:text-5xl lg:text-6xl xl:h-auto">
    {children}
  </h1>
)

export const ClientsSubTitle = ({ children }: HeadingProps) => (
  <h2
    className="leading-tight font-normal text-2xl sm:text-4xl lg:text-4xl xl:h-auto">
    {children}
  </h2>
)

export const ClientsText = ({ children }: HeadingProps) => (
  <h2
    className="leading-tight font-normal text-lg">
    {children}
  </h2>
)