import PrismButton from '@elements/square-colors';
import { HighlightsPhonePorps } from '@type/modules/highlights';
import Image from '@elements/image-component';
import { Attributes2 } from '@interfaces/home-data/home.interface';
import Link from 'next/link';
import BasicButton from '@elements/button';

const HighlightsPhone: React.FC<HighlightsPhonePorps> = ({ projects }): JSX.Element => {
  if (projects) {
    return (
      <>
        <hr className="mx-12 text-secondary-10 mb-[104px]"></hr>
        <div className="h-full aspect-[2/1] flex justify-center items-center">
          <h3 className="text-m3 font-bold">
            If you can dream it,
            <br /> we can make it.
          </h3>
        </div>
        <div className="w-full h-[180vw] overflow-hidden overflow-x-scroll snap-x">
          <div className="h-full flex flex-row">
            {projects.map((project) => {
              return (
                <ProjectCard
                  title={project.attributes.title}
                  portfolioDataOfInterest={project.attributes.portfolioDataOfInterest}
                  portfolioDescription={project.attributes.portfolioDescription}
                  description={project.attributes.caseDescription}
                  key={project.id}
                  button={true}
                  imgAttributes={project?.attributes?.image?.data?.attributes}
                  backgroundColor={project.attributes.primaryColor}
                  url={`/cases/${project.id}`}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="min-h-[128px] flex justify-center items-center my-[104px]">
            <Link href="/our-work">
              <PrismButton>View all cases</PrismButton>
            </Link>
          </div>
        </div>
        <hr className="mx-12 text-secondary-10"></hr>
      </>
    );
  }
};
type PorjectsCardPropsTypes = {
  title: string;
  description?: string;
  portfolioDataOfInterest?: string;
  portfolioDescription?: string;
  button?: boolean;
  imgAttributes?: Attributes2;
  handleClick?: () => void;
  backgroundColor?: string;
  url: string;
};
const ProjectCard: React.FC<PorjectsCardPropsTypes> = ({
  title,
  description,
  backgroundColor,
  button = false,
  imgAttributes,
  portfolioDataOfInterest,
  portfolioDescription,
  url,
}): JSX.Element => {
  return (
    <article
      className={`w-full aspect-[1/2] h-full grid grid-rows-2 snap-center`}
      style={{
        backgroundColor
      }}
    >
      <div className="row-start-1 row-span-1">
        <div className="h-full p-8 bg-[rgba(0,0,0,0.5)]">
          <h3 className="text-m3 font-bold text-primary-white mb-4">{title}</h3>
          {portfolioDataOfInterest && (
            <p className="text-s1 font-bold text-primary-white mb-4">{portfolioDataOfInterest}</p>
          )}
          {portfolioDescription && (
            <p className="text-s2 font-bold text-primary-white mb-4">{portfolioDescription}</p>
          )}
          {description && <p className="text-s2 text-primary-white mb-4">{description}</p>}
          {button && (
            <Link href={url} >
              <a>
                <BasicButton theme="dark">View Case</BasicButton>
              </a>
            </Link>
          )}
        </div>
      </div>
      {imgAttributes.url && (
        <div className="row-start-2 row-span-1 flex justify-center items-center">
          <Image
            url={imgAttributes.url}
            alt="project"
            layout="intrinsic"
            width={imgAttributes.width}
            height={imgAttributes.height}
            previewUrl={imgAttributes.previewUrl}
          />
        </div>
      )}
    </article>
  );
};
export default HighlightsPhone;
