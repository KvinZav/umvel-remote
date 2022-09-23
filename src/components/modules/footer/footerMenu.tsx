import Link from 'next/link';
import CustomImage from '@elements/image-component/CustomImage';
import BasicButton from '@elements/button';
import { Body } from '@interfaces/home-data/home.interface';

export const FooterMenu = ({data: {socialNetworks, links}}: {data: Body}) => {
  
  return (
    <section className="p-[15%] lg:p-[10%]">
      <div className="flex flex-col">
        <div className="flex w-full justify-between flex-col lg:flex-row mb-14 lg:mb-8">
          <div className="flex items-center gap-4">
            <CustomImage
              src={"assets/images/umvelLogoDark.svg"}
              alt={"logo-umvel"}
              className="w-8"
            />
            <p className="font-bold text-base">We deliver what we promise.</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:items-center flex-col lg:flex-row my-6 lg:m-0">
              {links.map((menuItem, index) => (
                <Link href={menuItem.link} key={`menu-item-footer-${index}`}>
                  <a className="text-base leading-tight py-4 lg:px-6">{menuItem.name}</a>
                </Link>
              ))}
            </div>
            <div className="lg:px-4">
              <BasicButton onClick={() => {}}>
                {"Let's Talk"}
              </BasicButton>
            </div>
          </div>
        </div>
        <hr className="text-[#E6E6E6] hidden lg:block mb-8"/>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex gap-8 flex-col sm:flex-row border-t border-[#E6E6E6] lg:border-0 py-6 lg:py-0">
            {socialNetworks.map((socialNetwork, index) => (
              <Link href={socialNetwork.link} key={`menu-item-footer-${index}`}>
                <a className="text-base leading-tight">{socialNetwork.name}</a>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-8 border-t border-[#E6E6E6] lg:border-0 py-14 lg:py-0">
            <Link href="#">
              <a>Privacy Policy</a>
            </Link>
            <p>© 2022 Umvel Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
