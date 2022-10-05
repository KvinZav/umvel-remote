import React from 'react';

type HeadingProps = {
  children: string;
};

export const HighlightTitle = ({ children }: HeadingProps) => (
  <h1 className="font-bold text-m1 mb-2">
    {children}
  </h1>
);

export const HighlightSubtitle = ({ children }: HeadingProps) => (
  <h2 className="text-s2 h-10 xl:h-auto">{children}</h2>
);

export const ClientsTitle = ({ children }: HeadingProps) => (
  <h1 className="text-b3 font-bold xl:h-auto">{children}</h1>
);

export const ClientsSubTitle = ({ children }: HeadingProps) => (
  <h2 className="text-b4 font-normal xl:h-auto">
    {children}
  </h2>
);

export const ClientsText = ({ children }: HeadingProps) => (
  <h2 className="text-s1 font-normal">{children}</h2>
);
