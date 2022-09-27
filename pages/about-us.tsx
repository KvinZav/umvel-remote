import { environment } from "@environments/index";
import useSWR from "swr";
import { get } from "@fetcher/get";
import useScrollOffset from "@hooks/useScrollOffset";
import { useEffect } from "react";
import { FooterMenu } from "@modules/footer";
import { BlockNameEnum } from "@enums/BlockName";
import { HomeDataInterface } from "@interfaces/home-data/home.interface";
import { HeaderAboutUs } from "@modules/aboutUs/HeaderAboutUs";
import { ReadyToTake } from '@modules/aboutUs/ReadyToTake';

export default function AboutUs() {
  const isBrowser = typeof window !== "undefined";

  const { data } = useSWR<HomeDataInterface>(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });

  const { handleScroll } = useScrollOffset();

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0);

  useEffect(() => {
    isBrowser && window.addEventListener("scroll", onScroll);

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    data && (
      <div>
        <HeaderAboutUs
          data={data?.data.attributes.body.find((item) => item.__component === BlockNameEnum.team)}
        />
        <ReadyToTake />
        <FooterMenu
          data={data.data.attributes.body.find((item) => item.__component === BlockNameEnum.menu)}
        />
      </div>
    )
  );
}
