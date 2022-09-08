import {useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import Logo from '@elements/LogoNavBar/LogoNavBar';
import Link from '@elements/Link/Link';
import useSWR from 'swr';
import { environment } from '@environments/index';
import useVerticalScroll from '@hooks/useVerticalScroll';
import Image from '@elements/Image';
import CustomImage from '@elements/Image/CustomImage'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { data: event } = useSWR(environment.HOME_URL);
    const matchMedia = useMediaQuery("(min-width: 1024px)");
    const isVerticalScroll = useVerticalScroll(1);

    if (!event) return null;

    const logo = event.data.attributes.header.logo.data.attributes;
    const options = event.data.attributes.header.links;
    console.log(logo);
    return (
    <>
        {(!showMenu)&&<nav className="sticky top-0 z-50">
            <div className="flex justify-between items-center py-6 px-8">
                <div className='h-6 w-6 md:h-8 md:w-8 '>
                    {logo && <Logo imgUrl={logo.url} alt={logo.alternativeText} />}
                </div>
                {(!matchMedia || !isVerticalScroll) &&
                    <button data-collapse-toggle="navbar-default" onClick={() => setShowMenu(!showMenu)} type="button" className="flex items-center text-sm text-gray-500 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0" >
                        <div className='h-5 w-5 md:w-7 md:h-7'>
                            <CustomImage src={'/assets/images/menu-icon.svg'} alt="menu" width='100%' height='100%'/>
                        </div>
                    </button>}
                {(matchMedia && isVerticalScroll) && <div className="w-full md:block md:w-auto" id="navbar-default" data-collapse-toggle="navbar-default">
                    <ul className="flex flex-col mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 items-center">
                        {options && options.map(link =>
                            <li key={'link-' + link.id} className={link.type==='button'&&"border px-2 py-2 rounded-full flex justify-center items-center"}>
                                <Link name={link.name} url={link.link} />
                            </li>
                        )}
                    </ul>
                </div>}
            </div>
        </nav>}
        {(showMenu) && <div className="w-screen h-screen sticky top-0 md:block md:w-auto bg-primary-white z-50">
            <div className='w-full h-screen flex'>
                {matchMedia&&<div className='h-full min-w-[100vh] grid grid-cols-3 grid-rows-3 gap-0'>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas"><p>asdasd</p><br /><br /><br /><br /><p>werre</p></Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hola</Square>
                    <Square title='Card' description="skdla asldkf asldkfl asdfas">hey</Square>
                </div>}
                <div className='h-full min-w-min w-full flex flex-col items-center p-8'>
                    <div className='w-full flex flex-row justify-between'>
                        <div className='h-6 w-6 md:h-8 md:w-8'>
                            {logo && <Logo imgUrl={logo.url} alt={logo.alternativeText} />}
                        </div>
                        <div className='h-5 w-5 md:w-7 md:h-7' onClick={()=>{setShowMenu(!showMenu)}}>
                            <CustomImage src="/assets/images/x-icon.svg" width={"100%"} height={"100%"} alt="close" />
                        </div>
                    </div>
                    <div className="w-min h-full flex items-center" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4">
                            {options && options.map(link =>
                                <li key={'link-' + link.id} className={link.type==='button'?"border px-2 py-2 mt-4 rounded-full flex justify-center items-center my-2" : 'my-2'}>
                                    <Link name={link.name} url={link.link}/>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='w-full text-base flex flex-row justify-end '>
                        <Link name={"Instagram"} url={'#'} />
                        <Link name={"Medium"} url={'#'} />
                        <Link name={"LinkedIn"} url={'#'} />
                    </div>
                </div>
            </div>
        </div>}    
    </>
    )
}
export default Header;

type SquareProps={
    children?: React.ReactNode;
    title: string;
    description: string;
}
const Square:React.FC<SquareProps>  = ({children,title,description}) => {
    return(
        <div className='group w-full flex flex-col-reverse bg-[#203984] border overflow-hidden'>
            <div className={'h-1/3 w-auto bg-slate-600/30 transition-all group-hover:-translate-y-[0] group-hover:scale-1 translate-y-[100%] -scale-y-1 text-white'}>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}