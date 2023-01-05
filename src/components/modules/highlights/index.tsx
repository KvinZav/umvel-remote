import useMediaQuery from '@hooks/useMediaQuery';
import React, { useState } from 'react';
import HighlightsPhone from './phone';
import HighlightsTablet from './tablet';
import HighlightsDesktop from './desktop';
import useSWR from 'swr';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from '@enums/BlockName';
import { Daum } from '@interfaces/home-data/home.interface';

const CasesHighlights: React.FC = (): JSX.Element => {
  const [project, setProject] = useState<Daum>();
  const phone = useMediaQuery('(max-width: 639px)');
  const tablet = useMediaQuery('(max-width: 1024px) and (min-width: 640px)');
  const desktop = useMediaQuery('(min-width: 1024px)');
  const { data: event } = useSWR(environment.HOME_URL);

  if (!event) return null;
  const { caseSelector } = FETCHER(event, BlockNameEnum.portfolio);
  const projects = caseSelector.selector.case_of_studies.data;

  if (project === undefined) {
    setProject(projects[0]);
  }
  const handleNext = () => {
    const currentIndex = projects.findIndex(item => item.id === project.id)
    
    if (currentIndex < projects.length) {
      setProject(projects[currentIndex + 1]);
    }
    if (currentIndex >= projects.length) {
      setProject(projects[0]);
    }
  };
  const handlePrevious = () => {
    const currentProjectIdx = projects.findIndex(item => item.id === project.id);
    if (currentProjectIdx === 0) {
      setProject(projects[projects.length - 1]);
    } else {
      setProject(projects[currentProjectIdx - 1]);
    }
  };

  if (phone) {
    return <HighlightsPhone projects={projects} title={caseSelector.title} />;
  }
  if (tablet) {
    return (
      <HighlightsTablet
        project={project}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        title={caseSelector.title}
      />
    );
  }
  if (desktop) {
    return (
      <HighlightsDesktop
        project={project}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        title={caseSelector.title}
        projects={projects.length}
      />
    );
  }
};

export default CasesHighlights;
