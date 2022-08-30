import {useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import Logo from '@elements/LogoNavBar/LogoNavBar';
import Link from '@elements/Link/Link';
import useSWR from 'swr';
import { environment } from '@environments/index';
import useVerticalScroll from '@hooks/useVerticalScroll';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { data: event } = useSWR(environment.HOME_URL);
    const matchMedia = useMediaQuery("(min-width: 1024px)");
    const isVerticalScroll = useVerticalScroll(1);

    if (!event) return null;

    const logo = event.data.attributes.header.logo.data.attributes;
    const options = event.data.attributes.header.links;
    return (
    <>
        {(!showMenu)&&<nav className="sticky top-0 bg-white ">
            <div className="flex flex-wrap justify-between items-center px-4 ">
                {logo && <Logo imgUrl={'https://media-exp1.licdn.com/dms/image/C560BAQF_7neTAhdJ-w/company-logo_200_200/0/1602081394947?e=2147483647&v=beta&t=QdK1sJQS3aoEFmHYtSeselnXtwyZQ597nAJYFi2kTSQ'} alt={logo.alternativeText} />}
                {(!matchMedia || !isVerticalScroll) &&
                    <button data-collapse-toggle="navbar-default" onClick={() => setShowMenu(!showMenu)} type="button" className="inline-flex items-center p-4 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 " >
                        <img src="https://cdn-icons-png.flaticon.com/512/747/747327.png" alt="menu" className='w-5 h-5'/>
                    </button>}
                {(matchMedia && isVerticalScroll) && <div className="w-full md:block md:w-auto" id="navbar-default" data-collapse-toggle="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {options && options.map(link =>
                            <li key={'link-' + link.id}>
                                <Link name={link.name} url={link.link} />
                            </li>
                        )}
                    </ul>
                </div>}
            </div>
        </nav>}
        {(showMenu) && <div className="w-screen sticky top-0 md:block md:w-auto bg-white" id="navbar-default" data-collapse-toggle="navbar-default">
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
                        {logo && <Logo imgUrl={'https://media-exp1.licdn.com/dms/image/C560BAQF_7neTAhdJ-w/company-logo_200_200/0/1602081394947?e=2147483647&v=beta&t=QdK1sJQS3aoEFmHYtSeselnXtwyZQ597nAJYFi2kTSQ'} alt={logo.alternativeText} />}
                        <img src="https://cdn-icons-png.flaticon.com/512/8113/8113172.png" alt="close" className='w-4 h-4' onClick={()=>{setShowMenu(!showMenu)}} />
                    </div>
                    <div className="w-min h-full flex items-center" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4">
                            {options && options.map(link =>
                                <li key={'link-' + link.id}>
                                    <Link name={link.name} url={link.link} />
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