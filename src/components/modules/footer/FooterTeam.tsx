import CustomImage from '@elements/image-component/CustomImage';
import { Body } from '@interfaces/home-data/home.interface';
import { CardTeam } from '@elements/card';
import { Sizes } from '@enums/sizes.enum';

const configNames = [
  { size: Sizes.LG, rows: 7, columns: 7 },
  { size: Sizes.MD, rows: 4, columns: 4 },
];

export const FooterTeam = ({ data }: { data: Body }) => {
  const {
    names,
    socialNetworks,
    leftFooterTeam: { title: titleLeft },
    rightFooterTeam: { title: titleRight },
  } = data;

  return (
    <section className="flex">
      <CardTeam
        config={configNames}
        className="relative border border-secondary-10 border-solid hidden md:block w-[50%] p-[2vw]"
        names={names}
      >
        <div className="absolute w-[200px] lg:w-[400px] top-[8vw] left-[8vw]">
          <p className="font-bold text-[31px] lg:text-[58px]">{titleLeft}</p>
        </div>
      </CardTeam>
      <article
        className="aspect-square flex flex-col justify-between border border-secondary-10 
      border-solid w-[100%] md:w-[50%] p-[15vw] md:p-[8vw_8.5vw_8.5vw_8vw]"
      >
        <div className="self-start">
          <CustomImage
            src="/assets/images/umvelImagoType.svg"
            alt="logo-umvel"
            className="w-[152px] lg:w-[190px]"
          />
          <p className="mt-3 text-[18px] lg:text-[24px]">{titleRight}</p>
        </div>
        <div className="flex justify-between self-end text-[14px] w-[260px]">
          {socialNetworks.map((socialNetwork) => (
            <a
              key={socialNetwork.id}
              href={socialNetwork.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialNetwork.name}
            </a>
          ))}
        </div>
      </article>
    </section>
  );
};
