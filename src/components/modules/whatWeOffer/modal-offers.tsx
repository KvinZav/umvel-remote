import CustomImage from '@elements/image-component/CustomImage';
import Logo from '@elements/LogoNavBar/LogoNavBar';
import { Filter } from './filter-services';

export const ModalOffers = ({ services, setStateModal, servicesSelected, setServicesSelected, buttons, setButtons }) => {

  return (
    <>
      <div className='z-[99] w-screen h-screen bg-primary-white fixed top-0 p-8 lg:hidden overflow-hidden overflow-y-scroll'>
        <div className='w-full flex flex-row justify-between mb-6'>
          <div className='h-6 w-6 md:h-8 md:w-8'>
            <Logo imgUrl={`/assets/images/umvelLogoDark.svg`} alt={'Logo Umvel'} />
          </div>
          <div className='h-5 w-5 md:w-7 md:h-7' onClick={() => { setStateModal(prev => !prev) }}>
            <CustomImage src="/assets/images/x-icon.svg" width={"100%"} height={"100%"} alt="close" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full md:w-3/5'>
            <p className='text-5xl font-bold mb-6'>What we offer</p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {
                services.map((service) => {
                  return <Filter text={service.text} active={buttons.includes(service.id)} selected={servicesSelected} setSelected={setServicesSelected} setButtons={setButtons} key={'filter' + service.id} item={service} />
                })
              }
            </div>
            <div className='mb-20 flex lg:hidden'>
              <button className='px-6 py-4 border rounded-full' onClick={() => setStateModal(prev => !prev)}>
                Set my goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}