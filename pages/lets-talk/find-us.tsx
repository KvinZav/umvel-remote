import CustomImage from '@elements/image-component/CustomImage';

const FindUs = () => {
  return (
    <>
      <div className="aspect-square lg:p-10 bg-primary-black text-primary-white lg:flex hidden flex-col justify-between">
        <div>
          <p className="text-sm leading-4">Or find us here</p>
          <p className="text-[28px] leading-8 mt-2 font-bold">
            Feel free to reach out directly, either in person, per phone or email.
          </p>
          <div className="flex mt-12">
            <div className="w-1/2 mr-8">
              <p className="text-sm leading-4">Pay us a visit</p>
              <p className="text-lg leading-6 font-bold mt-2">
                Avenida Amsterdam 173, 06100, Condesa,
                <br />
                CDMX, Mexico
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-sm leading-4">Call us</p>
              <p className="text-lg leading-6 font-bold mt-2">(+52) 55 6819 7071</p>
              <p className="text-sm leading-4 mt-12">Email us</p>
              <p className="text-lg leading-6 font-bold mt-2">hello@umvel.com</p>
            </div>
          </div>
        </div>
        <div className="self-end">
          <CustomImage
            src={'/assets/images/umvelLogo.svg'}
            alt={'logo-umvel'}
            className="w-[64px]"
          />
        </div>
      </div>

      <div className="bg-primary-black md:grid grid-cols-3 text-primary-white lg:hidden hidden">
        <div className="aspect-square border-solid border-[#333] border  p-8">
          <p className="text-sm leading-4">Or find us here</p>
          <p className="text-xl leading-6 mt-2 font-bold">
            Feel free to reach out directly, either in person, per phone or email.
          </p>
        </div>
        <div className="aspect-square border-solid border-[#333] border p-8">
          <p className="text-sm leading-4">Pay us a visit</p>
          <p className="text-xl leading-6 mt-2 font-bold">
            Avenida Amsterdam 173, 06100, Condesa,
            <br />
            CDMX, Mexico
          </p>
        </div>
        <div className="aspect-square border-solid border-[#333] border p-8">
          <p className="text-sm leading-4">Email us</p>
          <p className="text-xl leading-6 mt-2 font-bold">hello@umvel.com</p>
          <p className="text-sm leading-4 mt-8">Call us</p>
          <p className="text-xl leading-6 mt-2 font-bold">(+52) 55 6819 7071</p>
        </div>
      </div>

      <div className="bg-primary-black grid grid-cols-2 text-primary-white lg:hidden md:hidden">
        <div className="aspect-square border-solid border-[#333] border p-6">
          <p className="text-sm leading-4">Or find us here</p>
          <p className="text-base mt-2 font-bold">
            Feel free to reach out directly, either in person, per phone or email.
          </p>
        </div>
        <div className="aspect-square border-solid border-[#333] border p-6">
          <p className="text-sm leading-4">Pay us a visit</p>
          <p className="text-base mt-2 font-bold">
            Avenida Amsterdam 173, 06100, Condesa,
            <br />
            CDMX, Mexico
          </p>
        </div>
        <div className="aspect-square border-solid border-[#333] border p-6">
          <p className="text-sm leading-4">Email us</p>
          <p className="text-base mt-2 font-bold">hello@umvel.com</p>
        </div>
        <div className="aspect-square border-solid border-[#333] border p-6">
          <p className="text-sm leading-4">Call us</p>
          <p className="text-base mt-2 font-bold">(+52) 55 6819 7071</p>
        </div>
      </div>
    </>
  );
};

export default FindUs;
