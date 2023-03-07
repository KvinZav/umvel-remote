import CustomImage from '@elements/image-component/CustomImage';
import { Body } from '@interfaces/home-data/home.interface';
import { CardTeam } from '@elements/card';
import { Sizes } from '@enums/sizes.enum';
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material'

const configNames = [
  { size: Sizes.XL, rows: 7, columns: 7 },
  { size: Sizes.LG, rows: 7, columns: 7 },
  { size: Sizes.MD, rows: 4, columns: 4 },
  { size: Sizes.SM, rows: 4, columns: 4 },
];

const socialLinks = [{
  name: "instagram",
  icon: <Instagram fontSize='inherit'/>
},{
  name: "facebook",
  icon: <Facebook fontSize='inherit'/>
},{
  name: "linkedin",
  icon: <LinkedIn fontSize='inherit'/>
},{
  name: "medium",
  icon: <CustomImage
    style={{height: '24px', width: '24px'}}
    className="md:mt-[6px] xl:mt-1.5 xl:h-[34px] xl:w-[34px]"
    src={'/assets/icons/medium.svg'} alt="medium-logo"/>
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
          <p className="font-bold text-m1 lg:text-b3 w-[200px] lg:w-[400px] xl:w-[500px]">{titleLeft}</p>
        </div>
      </CardTeam>
      <article
        className="aspect-square hidden md:flex flex-col justify-between border border-secondary-10 
      border-solid w-[100%] md:w-[50%] p-[15vw] md:p-[8vw_8.5vw_8.5vw_8vw] xl:p-[9.9vw_9.2vw_9.9vw_9.2vw]"
      >
        <div className="self-start">
          <CustomImage
            src="/assets/images/ntt-umvel-logo-text.svg"
            alt="logo-umvel"
            className="w-[155px] h-8 md:w-52 md:h-8 lg:w-[287px] lg:h-[57px]"
          />
          <p className="mt-3 text-m4">{titleRight}</p>
        </div>
        <div className="flex justify-between self-end text-m4 w-[200px] xl:w-[210px]">
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
