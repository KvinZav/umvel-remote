import { useEffect, useState } from 'react';
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
import useMenuButton from '@hooks/useMenuButton';
import { useStartHomeAnimation } from '@hooks/useStartHomeAnimation';

const Header = () => {
  const { handleToggleMenu, mainMenuVisible } = useMenuButton()
  const [shouldPeekIdx, setShouldPeekIdx] = useState(-1)

  const { data: event } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });

  const matchMedia = useMediaQuery('(min-width: 1024px)');
  const isVerticalScroll = useVerticalScroll(1);

  const { stylesNav, classTransitions } = useStartHomeAnimation();
  
  const logo = event?.data.attributes.header.logo.data.attributes;
  const options = event?.data.attributes.header.links;
  const cases = event?.data.attributes.header.cases;

  useEffect(() => {    
    setShouldPeekIdx(mainMenuVisible ? Math.floor(Math.random() * cases.length) : null);
    avoidScrollMenu(mainMenuVisible);
  }, [cases, mainMenuVisible])
  
  const avoidScrollMenu = (isShowingMenu: boolean) => {
    const body = document.body.classList;
    isShowingMenu ? body.add('overflow-hidden') : body.remove('overflow-hidden');
  }

  if (!event) return null;
  const { socialNetworks } = event.data.attributes.body.find(
    (item) => item.__component === BlockNameEnum.menu
  );

  return (
    <>
      {!mainMenuVisible && (
        <nav
          className={
            "sticky top-0 z-[98] " +
            classTransitions.five
          }
          style={stylesNav}>
          <div className="flex justify-end items-center min-h-[56px] p-4 md:p-6 lg:pt-6 lg:px-8 xl:py-[34px]">
            {matchMedia && isVerticalScroll && (
              <div
                className="w-full md:block md:w-auto"
                id="navbar-default"
                data-collapse-toggle="navbar-default"
              >
                <ul className="grid grid-cols-4 grid-flow-col mt-4 border md:mt-0 text-s2 md:font-medium md:border-0 items-center hover:box-content gap-4 xl:gap-6">
                  {options &&
                    options.map((link) =>
                      link.type === 'home' ? null : link.type === 'button' ? (
                        <Link key={'link-'+link.id} href={`/${link.link}`}>
                          <a>
                            <BasicButton key={'button-' + link.id} onClick={() => handleToggleMenu(false)}>
                              {link.name}
                            </BasicButton>
                          </a>
                        </Link>
                      ) : (
                        <li key={'link-' + link.id} className="cursor-pointer flex justify-center transform transition duration-150 hover:scale-105 hover:font-semibold">
                          <Link href={`/${link.link}`}>
                            <a onClick={() => handleToggleMenu(false)}>
                              {link.name}  
                            </a>
                          </Link>
                        </li>
                      )
                    )}
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
      {mainMenuVisible && (
        <div className="w-full h-screen sticky top-0 md:block md:w-auto bg-primary-white z-[99]">
          <div className="w-full h-screen flex">
            {matchMedia && (
              <div className="h-full min-w-[100vh] grid grid-cols-3 grid-rows-3 gap-0">
                {cases && cases.map((caseItem, caseIndex) => (
                  <Square
                    key={caseIndex + ''}
                    title={caseItem.title}
                    imgAttribute={caseItem.image}
                    backgroundColor={caseItem.backgroundColor}
                    id={caseItem.id}
                    action={handleToggleMenu}
                    shouldPeek={caseIndex === shouldPeekIdx}
                  />
                ))}
              </div>
            )}
            <div className="h-full overflow-y-auto min-w-min w-full flex flex-col items-center p-4 md:p-6 lg:pt-6 lg:px-8">
              <div className="w-full flex flex-row justify-between">
                {logo && (
                  <Logo
                    onClick={() => handleToggleMenu(false)}
                  />
                )}
                <div
                  className="h-5 w-5 md:w-7 md:h-7"
                  onClick={() => {
                    handleToggleMenu(false);
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
              <div className="w-full md:w-auto h-full flex flex-col items-center justify-center md:ml-0" id="navbar-default">
                <ul className="grid gap-6 grid-flow-cols mt-4 whitespace-nowrap text-m5">
                  {options &&
                    options.map((link) =>
                      link.type === 'button' ? (
                        <li onClick={() => handleToggleMenu(false)} key={'link-' + link.id} className="-ml-6 py-3">
                          <Link
                            href={`/${link.link}`}
                          >
                            <a>
                              <BasicButton>
                                <span className="text-m5 leading-none">{link.name}</span>
                              </BasicButton>
                            </a>
                          </Link>
                        </li>
                      ) : (
                        <li onClick={() => handleToggleMenu(false)} key={'link-' + link.id} className="self-center cursor-pointer transform transition duration-150 hover:scale-105 hover:font-semibold first-line:my-2">
                          <Link
                            href={`/${link.link}`}
                          >{link.name}</Link>
                        </li>
                      )
                    )}
                </ul>
              <div className="md:hidden border border-solid border-secondary-10 w-[50%] mb-12 mt-5"></div>
              <div className="w-full md:h-min text-s3 flex flex-col md:hidden md:flex-row md:justify-end ml-[70%] md:ml-0">
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
              <div className="hidden md:flex w-full h-full md:h-min text-s3 flex-col md:flex-row md:justify-end ml-[60%] md:ml-0">
                {socialNetworks.map((socialNetwork) => (
                  <div key={socialNetwork.id} className="md:ml-10 mb-0 md:text-center">
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
  shouldPeek?: boolean;
};
const Square: React.FC<SquareProps> = ({ title, imgAttribute, backgroundColor, primaryColor, id, action, shouldPeek = false }) => {
  const image = imgAttribute?.data?.attributes;

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseIn = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  useEffect(() => {
    if(shouldPeek){      
      handleMouseIn()
      setTimeout(() => {
        handleMouseOut()
      }, 1000);
    }
  }, [shouldPeek])

  return (
    <Link href={`/cases/${id}`}>
    <div
      onClick={() => action(false)}
      className={`h-full w-full overflow-hidden aspect-square snap-center cursor-pointer`}
      style={{
        backgroundColor
      }}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <div
        className={`h-full w-full p-5 transition ease-in-out duration-500  ${isHovered ? '-translate-y-[8%]' : 'translate-y-[100%]'}`}
      >
        {image && (
          <Image
            url={image.url}
            alt="project"
            layout="responsive"
            height={image.height}
            width={image.height}
          />
        )}
      </div>
      {title && (
        <div
          className={
            `h-1/4 w-auto hidden bg-primary-black bg-opacity-50 lg:flex justify-start px-9 transition ease-in-out duration-500 ${isHovered ? '-translate-y-[100%]' : 'translate-y-[100%]'}`
          }
        >
          <p className={`text-primary-white my-auto`}>{title}</p>
        </div>
      )}
    </div>
    </Link>
  );
};
