import CustomImage from '@elements/image-component/CustomImage';
import { Feature } from '@interfaces/cases-data/cases.interface';
import { useMemo } from 'react';

const classesByElement = (elements: any[]) => {
  const parent = [];
  const image = [];
  const columns = Math.ceil(elements.length);

  for (let i = 0; i < columns; i++) {
    const classParent = i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row';
    const classImage = i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse';
    parent.push(classParent, classParent);
    image.push(classImage, classImage);
  }
  return { parent, image };
};

export const KeyFeatures = ({ data: { title, keyFeatures } }: { data: Feature }) => {
  const { parent, image } = useMemo(() => classesByElement(keyFeatures), [keyFeatures]);

  return (
    <section className="w-full mb-36 md:mb-40 lg:mb-[200px] xl:mb-60">
      <div className="mt-36 md:mt-40 lg:mt-[200px] xl:mt-60 mb-20">
        <h4 className="text-center font-bold text-b4">{title}</h4>
      </div>
      <div
        className={
          'w-full grid grid-flow-col overflow-x-auto snap-x auto-cols-[90vw] grid-rows-2 md:grid-flow-row ' +
          'md:grid-rows-auto md:grid-cols-1 lg:grid-cols-2'
        }
      >
        {keyFeatures.map((keyFeature, idx) => (
          <div
            key={`key-feature-${idx}`}
            className={`flex ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} ${parent[idx]}`}
          >
            <div className="w-full md:w-1/2 aspect-square flex flex-col justify-center p-6 lg:p-8 border border-[#E6E6E6]">
              <div className="content">
                <h5 className="text-m4 font-bold mb-2">{keyFeature.title}</h5>
                <p className="text-s2">{keyFeature.content}</p>
              </div>
              <CustomImage
                src={keyFeature.icon.data.attributes.url}
                alt={keyFeature.icon.data.attributes.alternativeText}
                className="w-10 md:hidden xl:w-20"
              />
            </div>
            <div
              className={`hidden w-1/2 md:flex items-center md:justify-end ${
                idx % 2 === 0 ? '' : 'md:flex-row-reverse md:flex-start'
              } ${image[idx]}`}
            >
              <CustomImage
                src={keyFeature.icon.data.attributes.url}
                alt={keyFeature.icon.data.attributes.alternativeText}
                className="w-10 xl:w-20"
              />
              <hr style={{ width: 'calc(50% - 1rem)', color: '#B3B3B3' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
