const CasesQuote = ({ caseData }) => {
  const { primaryColor, quote } = caseData;

  return (
    <>
      <div
        className="grid md:grid-cols-2 grid-cols-1 bg-cover bg-center bg-none"
        style={{ backgroundImage: 'url(' + quote.photo.data.attributes.url + ')' }}
      >
        <div className="relative aspect-square lg:p-20 md:p-10 p-8 text-primary-white">
          {quote.body && <>
            <div
              className="absolute w-full h-full top-0 left-0 md:opacity-80 opacity-100"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <div className="absolute w-full h-full bg-primary-black opacity-20 top-0 left-0"></div>
            <p className="lg:text-[32px] text-xl lg:leading-10 leading-6 font-normal  relative z-10">
              “{quote.body}”
              <br />
              <br />- {quote?.client?.name} {quote?.client?.title ? ","+ quote?.client?.title: ""}
            </p>
          </>}
        </div>
      </div>
      <div
        className="md:hidden aspect-square bg-center"
        style={{ backgroundImage: 'url(' + quote.photo.data.attributes.url + ')' }}
      ></div>
    </>
  );
};

export default CasesQuote;
