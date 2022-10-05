import Image from "@elements/image-component";

const CasesApp = ({ caseData }) => {
  const { primaryColor, mainGraphic } = caseData;

  return (
    <div className="grid grid-cols-1">
      <div
        className="md:aspect-square flex justify-center items-center md:h-auto h-[926px]"
        style={{ backgroundColor: primaryColor }}
      >
        {!!mainGraphic ? 
          <div className="w-full h-full relative">
            <Image
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
              url={mainGraphic.data.attributes.url}
              alt={mainGraphic.data.attributes.alternativeText}
              priority
            />
          </div>:
          <>
            <div
              className="lg:w-[265px] md:w-[223px] w-[120px] lg:h-[566px] md:h-[476px] h-[294px] rounded-l-2xl"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            />
            <div
              className="lg:w-[438px] md:w-[368px] w-[200px] lg:h-[704px] md:h-[592px] h-[366px] rounded-2xl"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            />
          </>
        }
      </div>
    </div>
  );
};

export default CasesApp;
