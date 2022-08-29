import React from 'react';

export type HeadingProps = {
  children: string
}

export const HighlightTitle = ({ children }: HeadingProps) => (
  <h1
    className="font-bold leading-tight text-[32px] lg:text-4xl md:text-[34px] mb-2">
    {children}
  </h1>
)

export const HighlightSubtitle = ({ children }: HeadingProps) => (
  <h2
    className="leading-tight text-base h-10 xl:h-auto">
    {children}
  </h2>
)