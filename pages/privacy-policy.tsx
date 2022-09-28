import { environment } from "@environments/index";
import useSWR from "swr";
import { get } from "@fetcher/get";
import useScrollOffset from "@hooks/useScrollOffset";
import { useEffect } from "react";
import { PrivacyPolicy } from '@elements/PrivacyPolicy/PrivacyPolicy';
import { FooterMenu } from '@modules/footer';
import { BlockNameEnum } from '@enums/BlockName';

export default function OurWork() {
  const isBrowser = typeof window !== "undefined";
  const { handleScroll } = useScrollOffset();

  const onScroll = () => handleScroll(isBrowser ? window.pageYOffset : 0);

  useEffect(() => {
    isBrowser && window.addEventListener("scroll", onScroll);

    return () => isBrowser && window.removeEventListener("scroll", onScroll);
  }, []);

  const { data } = useSWR(environment.OUR_WORK_URL, get, {
    revalidateOnFocus: false,
  });

  return (
    data && (
      <>
        <PrivacyPolicy />
        <FooterMenu
          data={data.data.attributes.body.find((item) => item.__component === BlockNameEnum.menu)}
        />
      </>
    )
  );
}
