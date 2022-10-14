import Image from '@elements/image-component';

const CasesLearned = ({ caseData }) => {
  const { primaryColor, whatWeLearned } = caseData;

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="aspect-square p-6 md:p-8 lg:p-12 xl:p-14 bg-primary-black text-primary-white">
        <h1 className="text-m3 font-bold">{whatWeLearned.title}</h1>
        <p
          className="mt-2 xl:mt-4 text-s2"
          dangerouslySetInnerHTML={{ __html: whatWeLearned.content }}/>
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
    </section>
  );
};

export default CasesLearned;
