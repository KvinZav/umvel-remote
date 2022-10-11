import CustomImage from '@elements/image-component/CustomImage';
import { Body } from '@interfaces/home-data/home.interface';
import { CardTeam } from '@elements/card';
import { Sizes } from '@enums/sizes.enum';
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material'

const configNames = [
  { size: Sizes.LG, rows: 7, columns: 7 },
  { size: Sizes.MD, rows: 4, columns: 4 },
  { size: Sizes.SM, rows: 4, columns: 4 },
];

const socialLinks = [{
  name: "instagram",
  icon: <Instagram/>
},{
  name: "facebook",
  icon: <Facebook/>
},{
  name: "linkedin",
  icon: <LinkedIn/>
},{
  name: "medium",
  icon: <img height={24} width={24} src={'/assets/icons/medium.svg'}/>
}]

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
        className="relative border border-secondary-10 border-solid w-full md:w-[50%] aspect-square p-[2vw]"
        names={names}
      >
        <div className="absolute h-full top-0 p-12 md:p-[8%_4vw] lg:p-[10%_5vw] xl:p-[182px]">
          <p className="font-bold text-b3 w-[200px] lg:w-[400px]">{titleLeft}</p>
        </div>
      </CardTeam>
      <article
        className="aspect-square hidden md:flex flex-col justify-between border border-secondary-10 
      border-solid w-[100%] md:w-[50%] p-[15vw] md:p-[8vw_8.5vw_8.5vw_8vw] xl:p-[9.2vw]"
      >
        <div className="self-start">
          <CustomImage
            src="/assets/images/umvelImagoType.svg"
            alt="logo-umvel"
            className="w-[152px] lg:w-[190px]"
          />
          <p className="mt-3 text-m4">{titleRight}</p>
        </div>
        <div className="flex justify-between self-end text-s3 w-[200px]">
          {socialNetworks.map((socialNetwork) => (
            <a
              key={socialNetwork.id}
              href={socialNetwork.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialLinks.find(i => i.name === socialNetwork.name.toLowerCase())?.icon}
            </a>
          ))}
        </div>
      </article>
    </section>
  );
};
