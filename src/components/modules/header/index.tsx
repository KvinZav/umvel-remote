import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import Logo from '@elements/LogoNavBar/LogoNavBar';
import useSWR from 'swr';
import { environment } from '@environments/index';
import useVerticalScroll from '@hooks/useVerticalScroll';
import CustomImage from '@elements/image-component/CustomImage';
import BasicButton from '@elements/button';
import { get } from '@fetcher/get';
import Image from '@elements/image-component';
import { BlockNameEnum } from '@enums/BlockName';
import Tooltip from '@elements/tooltip/tooltip';
import Link from 'next/link';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: event } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });

  const matchMedia = useMediaQuery('(min-width: 1024px)');
  const isVerticalScroll = useVerticalScroll(1);

  if (!event) return null;

  const logo = event.data.attributes.header.logo.data.attributes;
  const options = event.data.attributes.header.links;
  const cases = event.data.attributes.header.cases;

  const { socialNetworks } = event.data.attributes.body.find(
    (item) => item.__component === BlockNameEnum.menu
  );

  return (
    <>
      {!showMenu && (
        <nav className="sticky top-0 z-[99]">
          <div className="flex justify-between items-center py-6 xl:py-8 px-8">
            <div className="h-6 w-6 md:h-8 md:w-8 ">
              {logo && <Logo imgUrl={logo.url} alt={logo.alternativeText} />}
            </div>
            {(!matchMedia || !isVerticalScroll) && (
              <button
                data-collapse-toggle="navbar-default"
                onClick={() => setShowMenu(!showMenu)}
                type="button"
                className="flex items-center text-s3 text-gray-500 rounded-lg md:flex-row md:mt-0 md:font-medium md:border-0"
              >
                <div className="h-5 w-5 md:w-7 md:h-7">
                  <CustomImage
                    src={'/assets/images/menu-icon.svg'}
                    alt="menu"
                    width="100%"
                    height="100%"
                    className="bg-primary-white bg-clip-text"
                  />
                </div>
              </button>
            )}
            {matchMedia && isVerticalScroll && (
              <div
                className="w-full md:block md:w-auto"
                id="navbar-default"
                data-collapse-toggle="navbar-default"
              >
                <ul className="flex flex-col mt-4 border md:flex-row md:space-x-8 md:mt-0 text-s2 md:font-medium md:border-0 items-center">
                  {options &&
                    options.map((link) =>
                      link.type === 'home' ? null : link.type === 'button' ? (
                        <Link href={`/${link.link}`}>
                          <a>
                            <BasicButton key={'button-' + link.id} onClick={() => setShowMenu(false)}>
                              {link.name}
                            </BasicButton>
                          </a>
                        </Link>
                      ) : (
                        <li key={'link-' + link.id}>
                          <Link onClick={() => setShowMenu(false)} href={`/${link.link}`}>{link.name}</Link>
                        </li>
                      )
                    )}
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
      {showMenu && (
        <div className="w-full h-screen sticky top-0 md:block md:w-auto bg-primary-white z-[99]">
          <div className="w-full h-screen flex">
            {matchMedia && (
              <div className="h-full min-w-[100vh] grid grid-cols-3 grid-rows-3 gap-0">
                {cases &&
                  cases.map(caseItem => (
                    <Square
                      key={caseItem.id}
                      title={caseItem.title}
                      imgAttribute={caseItem.image}
                      backgroundColor={caseItem.backgroundColor}
                      id={caseItem.id}
                      action={setShowMenu}
                    />
                  ))}
              </div>
            )}
            <div className="h-full overflow-y-auto min-w-min w-full flex flex-col items-center p-8">
              <div className="w-full flex flex-row justify-between">
                <div className="h-6 w-6 md:h-8 md:w-8">
                  {logo && (
                    <Logo
                      onClick={() => setShowMenu(false)}
                      imgUrl={logo.url}
                      alt={logo.alternativeText}
                    />
                  )}
                </div>
                <div
                  className="h-5 w-5 md:w-7 md:h-7"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <CustomImage
                    src="/assets/images/x-icon.svg"
                    width={'100%'}
                    height={'100%'}
                    alt="close"
                  />
                </div>
              </div>
              <div className="h-full flex items-center" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 whitespace-nowrap text-m5">
                  {options &&
                    options.map((link) =>
                      link.type === 'button' ? (
                        <li onClick={() => setShowMenu(false)} key={'link-' + link.id} className="-ml-6 py-3">
                          <Link
                            href={`/${link.link}`}
                          >
                            <a>
                              <BasicButton>
                                {link.name}
                              </BasicButton>
                            </a>
                          </Link>
                        </li>
                      ) : (
                        <li onClick={() => setShowMenu(false)} key={'link-' + link.id} className="first-line:my-2 py-3">
                          <Link
                            href={`/${link.link}`}
                          >{link.name}</Link>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="md:hidden border border-solid border-secondary-10 w-[50%] mb-12 mt-5"></div>
              <div className="md:w-full h-full md:h-min w-min text-s3 flex flex-col md:flex-row md:justify-end">
                {socialNetworks.map((socialNetwork) => (
                  <div key={socialNetwork.id} className="md:ml-10 mb-8 md:text-center">
                    <Tooltip tooltipText={socialNetwork.name}>
                      <a
                        key={socialNetwork.id}
                        href={socialNetwork.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {socialNetwork.nickName}
                      </a>
                    </Tooltip>

                    <a
                      className="block lg:hidden"
                      key={socialNetwork.id}
                      href={socialNetwork.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socialNetwork.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;

type SquareProps = {
  children?: React.ReactNode;
  title: string;
  backgroundColor?: string;
  imgAttribute?: any;
  primaryColor?: string;
  id?: string | number;
  action: (e: boolean) => void;
};
const Square: React.FC<SquareProps> = ({ title, imgAttribute, backgroundColor, primaryColor,id, action}) => {
  const image = imgAttribute?.data?.attributes;

  return (
    <Link href={`/cases/${id}`}>
    <div
      onClick={() => action(false)}
      className={`h-full w-full group overflow-hidden aspect-square snap-center cursor-pointer`}
      style={{
        backgroundColor
      }}
    >
      <div className={`h-full w-full p-9 transition ease-in-out duration-300 group-hover:-translate-y-[10%] group-hover:scale-1 translate-y-[100%]`}>
        {image && (
          <Image
            url={image.url}
            alt="proyect"
            layout="responsive"
            height={image.height}
            width={image.height}
            priority={true}
          />
        )}
      </div>
      {title && (
        <div
          className={
            'h-1/4 w-auto hidden bg-primary-black bg-opacity-50 lg:flex justify-start px-9 transition ease-in-out duration-300 group-hover:-translate-y-[100%] group-hover:scale-1 translate-y-[100%] '
          }
        >
          <p className={`text-primary-white my-auto`}>{title}</p>
        </div>
      )}
    </div>
    </Link>
  );
};
