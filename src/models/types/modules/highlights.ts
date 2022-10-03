import { Daum } from '@interfaces/home-data/home.interface';

export type HighlightsPhonePorps = {
  projects: Array<Daum>;
  title: string;
};
export type HighlightsTabletPorps = {
  project: Daum;
  title: string;
  handlePrevious: () => void;
  handleNext: () => void;
};
export type HighlightsDesktopPorps = {
  project: Daum;
  title: string;
  handlePrevious: () => void;
  handleNext: () => void;
};
