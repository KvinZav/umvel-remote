import { environment } from '@environments/index';
import useSWR from 'swr';
import { get } from '@fetcher/get';
import ScrollInteraction1 from '@modules/ScrollInteraction1';
import { useAppState } from '@hooks/customHooks';
import { useEffect } from 'react';

// import dynamic from 'next/dynamic';
// const Animator = dynamic(
//   import("react-scroll-motion").then((it) => it.Animator),
//   { ssr: false }
// );
import { Fade, MoveIn } from 'react-scroll-motion';

export default function Home() {
  const isBrowser = typeof window !== "undefined"

  const { data, error } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });

  console.log(data);
  

  const { handleScroll, scrollOffset } = useAppState()

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0)
  
  useEffect(() => {
    isBrowser && window.addEventListener('scroll', onScroll )

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, [])
  
  return data && (
    <div>
      {/* <Highlights
        cases={data?.data?.attributes.body.find(i => i.__component === 'highlights.highlights').cases}
      /> */}
      {/* <div className="h-screen"/> */}
      <ScrollInteraction1
        offsetY={scrollOffset}
      />
      {/* <div className="h-screen"/>
      <div className="h-screen"/> */}
    </div>
  )
}
