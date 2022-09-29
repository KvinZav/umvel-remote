import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import useScrollOffset from '@hooks/useScrollOffset';
import { useEffect } from 'react';
import { BlockNameEnum } from '@enums/BlockName';
import { HomeDataInterface } from '@interfaces/home-data/home.interface';
import { HeaderAboutUs, ReadyToTake, AboutUsTeam } from '@modules/aboutUs';
import { AboutUsInterface } from '@interfaces/about-us-data/about-us.interface';
import Head from 'next/head';

export default function AboutUs() {
  const isBrowser = typeof window !== 'undefined';

  const { data } = useSWR<HomeDataInterface>(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });

  const { data: dataAboutUs } = useSWR<AboutUsInterface>(environment.ABOUT_US, get, {
    revalidateOnFocus: false,
  });

  const { handleScroll } = useScrollOffset();

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0);

  useEffect(() => {
    isBrowser && window.addEventListener('scroll', onScroll);

    return () => isBrowser && window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    data &&
    dataAboutUs && (
      <div>
        <Head>
          <title>Umvel - A dedicated team helping you transform your business</title>
          <meta name="keywords" content="our teams, digital transformation talent" />
          <meta
            name="description"
            content="An integral team of 150+ Engineers, Researchers, Strategists and Designers. We're ready to take on any challenge, no matter the complexity."
          />
        </Head>
        <HeaderAboutUs
          data={data?.data.attributes.body.find((item) => item.__component === BlockNameEnum.team)}
        />
        <ReadyToTake />
        <AboutUsTeam data={dataAboutUs?.data.attributes.team} />
      </div>
    )
  );
}
