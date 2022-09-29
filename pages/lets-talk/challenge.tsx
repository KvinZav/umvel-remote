import BasicButton from '@elements/button';

const Challenge = () => {
  return (
    <div className="aspect-square lg:p-10 md:p-32 px-[72px] pt-7 pb-[132px] md:border-solid md:border-[#e6e6e6] md:border">
      <p className="md:text-[28px] text-2xl font-bold leading-8">We’re up for the challenge</p>
      <p className="text-base mt-2">
        Provide your details and we’ll get in touch as soon as humanly possible.
      </p>
      <form className="lg:mt-10 md:mt-12 mt-10">
        <input
          type="text"
          className="w-full pl-0 pr-0 pb-2 h-[32px] border-solid border-b-[#e6e6e6] border-b placeholder:text-[#000] focus:border-b-[#000]"
          placeholder="Name"
        />
        <div className="md:flex mt-10">
          <input
            type="text"
            className="md:w-1/2 w-full md:mr-8 mr-0 pl-0 pr-0 pb-2 h-[32px] border-solid border-b-[#e6e6e6] border-b placeholder:text-[#000] focus:border-b-[#000]"
            placeholder="Email"
          />
          <input
            type="text"
            className="md:w-1/2 w-full md:mt-0 mt-10 pl-0 pr-0 pb-2 h-[32px] border-solid border-b-[#e6e6e6] border-b placeholder:text-[#000] focus:border-b-[#000]"
            placeholder="Phone (optional)"
          />
        </div>
        <input
          type="text"
          className="w-full mt-10 pl-0 pr-0 pb-2 h-[32px] border-solid border-b-[#e6e6e6] border-b placeholder:text-[#000] focus:border-b-[#000]"
          placeholder="Tell us about your project, question or comment. (optional)"
        />
        <div className="lg:mt-10 md:mt-12 mt-10 flex justify-end">
          <BasicButton theme="light">
            <p>Send!</p>
          </BasicButton>
        </div>
      </form>
    </div>
  );
};

export default Challenge;
