import { environment } from '@environments/index';
import { get } from '@fetcher/get';
import { Suspense, useState } from 'react';
import useSWR from 'swr';
import { Filter } from './filter-services';
import { Service } from './service';
import { OurOfferingInterface } from '@interfaces/our-offering/our-offering.interface';
import { ModalOffers } from './modal-offers';
import dynamic from 'next/dynamic';

const OfferDetails = dynamic(() => import('./offer-details'), {
  suspense: true,
});

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [servicesSelected, setServicesSelected] = useState([]);
  const [offerSelected, setOfferSelected] = useState([]);

  const [selectedDetail, setSelectedDetail] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const { data: event } = useSWR(environment.OUR_OFFER_URL, get, {
    revalidateOnFocus: false,
  });

  if (!event) return null;

  const response = event as OurOfferingInterface;

  const { offer, services } = response.data;

  const handleDetailClick = (id) => {
    setSelectedDetail(response.data.offer.find((item) => item.id === id));
    setIsDetailVisible(true);
  };

  const handleDetailsClose = () => {
    setIsDetailVisible(false);
  };

  const handleNext = () => {
    const currentIndex = offer.findIndex((item) => item.id === selectedDetail.id);
    setSelectedDetail(currentIndex < offer.length - 1 ? offer[currentIndex + 1] : offer[0]);
  };

  const handlePrevious = () => {
    const currentIndex = offer.findIndex((item) => item.id === selectedDetail.id);
    setSelectedDetail(currentIndex > 0 ? offer[currentIndex - 1] : offer[offer.length - 1]);
  };

  return (
    <section className="relative">
      <div className="grid md:grid-flow-row lg:grid-cols-7 mb-24 lg:mb-[200px] xl:mb-60 md:mt-10 lg:mt-12">
        <div className="px-4 md:px-36 lg:col-span-3 lg:pl-16 lg:pr-[15%] xl:pl-20 xl:pr-36">
          <div className="flex flex-col">
            <h1 className="text-b3 font-bold mb-2 xl:mb-4">What we offer</h1>
            <p className="text-s2 mb-4 md:mb-6 lg:mb-8">Leading the way in meaningful digital products.</p>
          </div>
          <div className="lg:flex flex-col hidden">
            <p className="font-bold text-m4 mb-6 xl:mb-8">Have a goal in mind?</p>
          </div>
          <div className="hidden w-full lg:grid grid-cols-2 gap-4">
            {services.map((item) => {
              return (
                <Filter
                  text={item.text}
                  active={offerSelected.includes(item.id)}
                  selected={servicesSelected}
                  setSelected={setServicesSelected}
                  setButtons={setOfferSelected}
                  key={'filter' + item.id}
                  item={item}
                  buttons={offerSelected}
                />
              );
            })}
          </div>
          <div className="mb-20 flex lg:hidden">
            <button
              className="text-s2 px-6 py-4 border rounded-full"
              onClick={() => setShowModal(!showModal)}
            >
              Have a goal in mind?
            </button>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="flex flex-row flex-wrap">
            {response.data.offer.map((item) => (
              <Service
                description={item.name}
                icon={item.icon}
                dark={servicesSelected.includes(item.id)}
                key={item.id}
                onDetailClick={() => handleDetailClick(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <ModalOffers
          servicesSelected={servicesSelected}
          setServicesSelected={setServicesSelected}
          services={services}
          setStateModal={setShowModal}
          buttons={offerSelected}
          setButtons={setOfferSelected}
        />
      )}

      {isDetailVisible && (
      <Suspense>
        <OfferDetails
        detail={selectedDetail}
        onPreviousClick={handlePrevious}
        onNextClick={handleNext}
        onClose={handleDetailsClose}
        servicesSelected={servicesSelected}
        />
      </Suspense>
      )}
    </section>
  );
};

export default Services;
