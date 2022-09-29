import { CaseOfStudy2 } from "@interfaces/home-data/home.interface";
import { IconNameType } from "@type/components/Icons.type";

export type ServicePropsTypes = {
  icon: IconNameType | string;
  name?: string;
  description: string;
  dark?: boolean;
  onDetailClick: () => any;
}

export type DetailHighlightsProps = {
  cases: CaseOfStudy2[]
}
