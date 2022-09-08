import CustomImage from "@elements/image-component/CustomImage";
import useMediaQuery from "@hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { Body } from '@interfaces/home-data/home.interface';

const FooterTeam = ({data}: {data: Body}) => {
  const {
    names,
    socialNetworks,
    leftFooterTeam: { title: titleLeft },
    rightFooterTeam: { title: titleRight },
  } = data;

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [totalGrid, setTotalGrid] = useState(4)

  useEffect(() => {
    const total = isDesktop ? 7: 4;
    setTotalGrid(total);
  }, [isDesktop]);

  return (
    <section className="flex">
      <article className="aspect-square relative border border-secondary-10 border-solid hidden md:block w-[50%] p-[2vw]">
        <div
          className="grid gap-[5px] h-[100%]"
          style={{ gridTemplateColumns: `repeat(${totalGrid}, minmax(0, 1fr))` }}
        >
          {names.slice(0, totalGrid ** 2).map((name: string, index: number) => (
            <div
              key={"name-" + index}
              className="aspect-square flex justify-center items-center text-secondary-30 text-[14px]"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="absolute w-[200px] lg:w-[400px] top-[8vw] left-[8vw]">
          <p className="font-bold text-[31px] lg:text-[58px]">{titleLeft}</p>
        </div>
      </article>
      <article className="aspect-square flex flex-col justify-between border border-secondary-10 border-solid w-[100%] md:w-[50%] p-[15vw] md:p-[8vw_8.5vw_8.5vw_8vw]">
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
            <a key={socialNetwork.id} href={socialNetwork.link}>
              {socialNetwork.name}
            </a>
          ))}
        </div>
      </article>
    </section>
  );
};

export default FooterTeam;



