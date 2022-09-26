import { environment } from "@environments/index";
import useSWR from "swr";
import { get } from "@fetcher/get";
import { BlockNameEnum } from "@enums/BlockName";
import useScrollOffset from "@hooks/useScrollOffset";
import { useEffect } from "react";
import { FooterMenu } from "@modules/footer";
import { PrivacyPolicy } from '@elements/PrivacyPolicy/PrivacyPolicy';

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
        <PrivacyPolicy theme="light" />
        <FooterMenu
          data={data.data.attributes.body.find((item) => item.__component === BlockNameEnum.menu)}
        />
      </>
    )
  );
}
