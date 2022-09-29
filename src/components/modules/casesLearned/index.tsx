import Image from "@elements/image-component";

const CasesLearned = ({ caseData }) => {
  const { primaryColor, whatWeLearned } = caseData;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="aspect-square lg:p-12 md:p-8 p-6 bg-primary-black text-primary-white">
        <p className="md:text-[28px] text-2xl leading-8 font-bold">{whatWeLearned.title}</p>
        <p className="mt-2 text-base">{whatWeLearned.content}</p>
      </div>
      <div className="relative aspect-square" style={{ backgroundColor: primaryColor }}>
        <div className="absolute w-full h-full bg-primary-black opacity-10" />
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          url={whatWeLearned.images[0]?.data.attributes.url}
          alt={whatWeLearned.images[0]?.data.attributes.alternativeText}
        />
      </div>
      <div
        className="relative aspect-square lg:block hidden"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="absolute w-full h-full bg-primary-black opacity-30" />
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          url={whatWeLearned.images[1]?.data.attributes.url}
          alt={whatWeLearned.images[1]?.data.attributes.alternativeText}
        />
      </div>
    </div>
  );
};

export default CasesLearned;
