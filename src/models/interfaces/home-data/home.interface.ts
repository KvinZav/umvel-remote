export interface HomeDataInterface {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  header: Header;
  body: Body[];
  footer: any;
}

export interface Header {
  id: number;
  logo: Logo;
  links: Link[];
}

export interface Logo {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Link {
  id: number;
  name: string;
  link: string;
  type: string;
}

export interface Body {
  id: number;
  __component: string;
  caseOfStudy?: CaseOfStudy[];
  block?: Block;
  cases?: Case[];
  ScrollInteraction: any;
  step?: Step[];
  caseSelector?: CaseSelector;
  quote?: Quote[];
  title?: string;
  subtitle?: string;
  clients?: Clients;
  right?: Right2;
  left?: Left2;
  leftFooterTeam?: LeftFooterTeam;
  rightFooterTeam?: RightFooterTeam;
  names?: string[];
  socialNetworks?: SocialNetWork[];
  links?: Link[];
}

export interface CaseOfStudy {
  id: number;
  Title: string;
  Subtitle: any;
  case_of_study: CaseOfStudy2;
}

export interface CaseOfStudy2 {
  data: Data3;
}

export interface Data3 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  title: string;
  caseDescription: string;
  primaryColor: string;
  secondaryColor: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  portfolioTitle: any;
  portfolioDescription: any;
  portfolioDataOfInterest: any;
  image: Logo;
}

export interface Block {
  id: number;
  subtitle: any;
  textOrientation: any;
  title: string;
  contentType: any;
  primaryColor: any;
  secondaryColor: any;
  featured: any;
  displayName: string;
}

export interface Case {
  id: number;
  Title: string;
  Subtitle: string;
  case_of_study: CaseOfStudy3;
}

export interface CaseOfStudy3 {
  data: Data4;
}

export interface Data4 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  title: string;
  caseDescription: string;
  primaryColor: any;
  secondaryColor: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  portfolioTitle: any;
  portfolioDescription: any;
  portfolioDataOfInterest: any;
  image: Logo;  
  altText?: string;
}

export interface Step {
  id: number;
  right: Right;
  left: Left;
  center?: Center;
}

export interface Right {
  id: number;
  identifier: string;
  text: string;
}

export interface Left {
  id: number;
  identifier?: string;
  text?: string;
}

export interface Center {
  id: number;
  identifier: any;
  text: string;
}

export interface CaseSelector {
  id: number;
  title: string;
  selector: Selector;
}

export interface Selector {
  id: number;
  case_of_studies: CaseOfStudies;
}

export interface CaseOfStudies {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes5;
}

export interface Attributes5 {
  title: string;
  caseDescription: string;
  primaryColor: any;
  secondaryColor: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  portfolioTitle?: string;
  portfolioDescription?: string;
  portfolioDataOfInterest?: string;
  image?: Logo;
}

export interface Quote {
  id: number;
  title: string;
  hoverDescription?: string;
  hoverClientName?: string;
  hoverClientHeading?: string;
  callToAction?: CallToAction;
  backgroundColor: any;
  primaryColor: string;
}

export interface CallToAction {
  openUrl: string;
  title: string;
}

export interface Clients {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes6;
}

export interface Attributes6 {
  name: string;
  backgroundColor: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  image: Logo;
}

export interface Right2 {
  component: string;
}

export interface Left2 {
  id: number;
  action: Action;
  title: string;
  subtitle: string;
}

export interface Action {
  openUrl: string;
  title: string;
}

export interface LeftFooterTeam {
  id: number;
  title: string;
}

export interface RightFooterTeam {
  id: number;
  title: string;
}

export interface Meta {
  title: string;
}

export interface SocialNetWork {
  id: string;
  name: string;
  link: string;
}
