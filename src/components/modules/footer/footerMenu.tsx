import Link from 'next/link';
import CustomImage from '@elements/image-component/CustomImage';
import BasicButton from '@elements/button';
import useSWR from 'swr';
import { environment } from '@environments/index';
import { get } from '@fetcher/get';
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from '@enums/BlockName';
import Logo from '@elements/LogoNavBar/LogoNavBar';

export const FooterMenu = () => {
  const { data: event } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });
  if (!event) return null;

  const { socialNetworks, links } = FETCHER(event, BlockNameEnum.menu);
  const logo = event.data.attributes.header.logo.data.attributes;

  return (
    <section className="px-[15%] py-20 md:pb-[152px] lg:px-[10%] lg:py-32 xl:px-[9.5%] xl:py-[170px]">
      <div className="flex flex-col">
        <div className="flex w-full justify-between flex-col lg:flex-row mb-14 lg:mb-8 xl:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Logo/>
            <p className="font-bold text-s3">We deliver what we promise.</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:items-center flex-col lg:flex-row my-6 lg:m-0">
              {links.map((menuItem, index) => (
                <Link href={`/${menuItem.link}`} key={`menu-item-footer-${index}`}>
                  <a className="cursor-pointer justify-self-center transform transition duration-150 hover:scale-105 hover:font-semibold text-s2 py-4 lg:px-6 xl:px-7">{menuItem.name}</a>
                </Link>
              ))}
            </div>
            <Link href={'/lets-talk'}>
              <a>
                <BasicButton>
                  {"Let's Talk!"}
                </BasicButton>
              </a>
            </Link>
          </div>
        </div>
        <hr className="text-[#E6E6E6] hidden lg:block mb-8 xl:mb-10" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex gap-8 lg:justify-around flex-col md:flex-row border-t border-[#E6E6E6] lg:border-0 py-8 lg:py-0 lg:min-w-[336px] xl:min-w-[521px]">
            {socialNetworks.map((socialNetwork, index) => (
              <a
                className="text-s3 leading-tight transform transition duration-150 hover:scale-105 hover:font-semibold"
                key={`menu-item-footer-${index}`}
                href={socialNetwork.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Umvel's ${socialNetwork.name}`}
              >
                {socialNetwork.name}
              </a>
            ))}
          </div>
          <div className="flex text-s3 flex-col md:flex-row gap-8 xl:gap-10 border-t border-[#E6E6E6] lg:border-0 pt-14 lg:py-0">
            <Link href="privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <p>© 2022 Umvel Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
