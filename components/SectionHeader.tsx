import React from 'react';
import { B1, M1, S2 } from './TextComponents';

export type HeaderProps = {
  title: string;
  subtitle: string;
}

const SectionHeader = ({title, subtitle} : HeaderProps) => {
  return(
    <header>
      <M1 bold>{title}</M1>
      <S2>{subtitle}</S2>
    </header>
  )
}

export default SectionHeader;