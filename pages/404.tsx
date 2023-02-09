import Link from 'next/link'
import UmvelCard from '@modules/footer/UmvelCard';
import { ArrowBackRounded, Home } from '@mui/icons-material';
import { useRouter } from 'next/dist/client/router';


export default function FourOhFour() {

  const router = useRouter();
  return (
    <>
      <UmvelCard darkTheme={true} is404={true} text={'While you wait, you could check our social media.'}>
        <div className="p-12 md:p-[min(8%,_48px)] lg:p-[min(9%,_128px)] md:h-[100%] md:flex md:flex-col md:justify-between">
          <h1 className="mb-6 font-bold text-m3 md:text-b3 md:text-center lg:text-left">
            Seems like you <br /> got lost in the backrooms.
          </h1>
          <p className="mb-6 xl:mb-12 text-s1 md:text-m3 lg:text-s1 md:text-center lg:text-left">
            Please, reaload the page or try to come <br /> back a few minutes later.
          </p>
          <div className='flex flex-col md:flex-row md:justify-center lg:justify-start'>
            <div className='flex items-center'>
              <button
                className={`border rounded-full p-2 md:left-8 lg:left-[134px] text-[18px] 
                border-primary-white text-primary-white lg:hover:text-primary-black lg:hover:bg-primary-white`}>
                <div className="w-[18px] h-[18px] flex justify-center text-[18px] leading-none">
                  <ArrowBackRounded fontSize="inherit" onClick={() => router.back()} />
                </div>
              </button>
              <p className='text-s6 ml-[10px]'>Return to previous page</p>
            </div>
            <div className='flex items-center ml-0 mt-[30px] md:ml-[50px] md:mt-0'>
              <button
                className={`border rounded-full p-2 md:left-8 lg:left-[134px] text-[18px] border-primary-white text-primary-white lg:hover:text-primary-black lg:hover:bg-primary-white`}>
                <div className="w-[18px] h-[18px] flex justify-center text-[18px] leading-none">
                  <Link href={'/'}>
                    <Home fontSize="inherit" />
                  </Link>
                </div>
              </button>
              <p className='text-s6 ml-[10px]'>Home</p>
            </div>
          </div>
        </div>
      </UmvelCard>
    </>
  )
}