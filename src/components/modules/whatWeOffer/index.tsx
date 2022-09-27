import { environment } from '@environments/index';
import { get } from '@fetcher/get';
import { useState } from 'react';
import useSWR from 'swr';
import { Filter } from './filter-services';
import { Service } from './service';
import { OurOfferingInterface } from '@interfaces/our-offering/our-offering.interface';
import { ModalOffers } from './modal-offers';

const Services = () => {
    const [showModal, setShowModal] = useState(false);
    const [servicesSelected, setServicesSelected] = useState([]);
    const [offerSelected, setOfferSelected] = useState([]);

    const { data: event } = useSWR(environment.OUR_OFFER_URL, get, {
        revalidateOnFocus: false
    });

    if (!event) return null;

    const response = event as OurOfferingInterface;

    return (
        <>
            <div className="grid sm:grid-flow-row lg:grid-cols-12 mb-40">
                <div className="px-4 sm:px-36 lg:col-span-5 lg:px-16">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold sm:text-5xl mb-2">What we offer</h1>
                        <p className="text-base mb-8">Leading the way in meaningful digital products.</p>
                    </div>
                    <div className="lg:flex flex-col hidden">
                        <p className="text-2xl mb-6">Have a goal in mind?</p>
                    </div>
                    <div className="hidden w-full lg:grid grid-cols-2 gap-4">
                        {
                            response.data.services.map((item) => {
                                return <Filter text={item.text} 
                                active={offerSelected.includes(item.id)} 
                                selected={servicesSelected} 
                                setSelected={setServicesSelected} 
                                setButtons={setOfferSelected} 
                                key={'filter' + item.id} 
                                item={item} />
                            })
                        }
                    </div>
                    <div className='mb-20 flex lg:hidden'>
                        <button className='px-6 py-4 border rounded-full' onClick={() => setShowModal(!showModal)}>
                            Have a goal in mind?
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="flex flex-row flex-wrap">
                        {
                            response.data.offer.map((item) =>
                                <Service
                                    description={item.description}
                                    icon={item.icon}
                                    dark={servicesSelected.includes(item.id)}
                                    key={item.id}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            { showModal && <ModalOffers 
            servicesSelected={servicesSelected} 
            setServicesSelected={setServicesSelected} 
            services={response.data.services} 
            setStateModal={setShowModal}
            buttons={offerSelected}
            setButtons={setOfferSelected}
            />}
        </>
    )
}


export default Services