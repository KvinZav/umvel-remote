import { Card } from '@elements/card/card'
import useMediaQuery from '@hooks/useMediaQuery';
import { waitFor } from '@utils/waitFor';
import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring';
import { ChevronRightRounded, ChevronLeftRounded } from '@mui/icons-material';

const ViewPager = ({cases}) => {


  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>(null)
  
  const isMobile = useMediaQuery('(max-width: 639px)');
  const tablet = useMediaQuery('(max-width: 1023px) and (min-width: 640px)');
  const desktop = useMediaQuery('(min-width: 1024px)');
  
  const [currentCaseIndex, setCurrentCaseIndex] = useState<number>(0)

  const [topCaseIndex, setTopCaseIndex] = useState<number | undefined>(0)
  const [bottomCaseIndex, setBottomCaseIndex] = useState<number | undefined>(0)
  const [topVisible, setTopVisible] = useState(false)
  const [isTransitionActive, setIsTransitionActive] = useState(false)

  const [styles, api] = useSpring(() => ({
    from: { width: '0%', height: '100%' },
    to: { width: '100%', height: '100%' },
    config: { duration: 3500 },
  }))
  
  useEffect(() => {
    const initialLoading = async () => {
      setCurrentCaseIndex(0)
    }

    initialLoading()
  }, []);

  const setCaseSource = async (caseIdx) => {
    setIsTransitionActive(true)

    api.set({width: '0%'})
    api.start({width: '100%'})
    
    setTopCaseIndex(caseIdx)
    await waitFor(250)
    setTopVisible(true)
    await waitFor(1000)
    setBottomCaseIndex(caseIdx)

    setIsTransitionActive(false)
  }
  
  useEffect(() => {
    let timeoutId
    if(!isMobile){
      timeoutId = setTimeout(() => {
        const newIndex = currentCaseIndex >= cases.length - 1 ? 0 : currentCaseIndex + 1
        setCurrentCaseIndex(newIndex)
        setCaseSource(newIndex)
      }, 3500)
  
      setCurrentTimeout(timeoutId)
    }
    
  }, [currentCaseIndex]);

  useEffect(() => {
    setTopVisible(false)
  }, [bottomCaseIndex])

  const handleNext = () => {
    if(isTransitionActive) return;
    clearTimeout(currentTimeout)
    const newIndex = currentCaseIndex >= cases.length - 1 ? 0 : currentCaseIndex + 1
    setCurrentCaseIndex(newIndex)
    setCaseSource(newIndex)
  }

  const handlePrevious = () => {
    if(isTransitionActive) return;
    clearTimeout(currentTimeout)
    const newIndex = currentCaseIndex <= 0 ? cases.length - 1 : currentCaseIndex - 1
    setCurrentCaseIndex(newIndex)
    setCaseSource(newIndex)
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-0 w-full">
      <div className="col-span-1 border border-secondary-10">
        <Card
          styles={{
            textStyles: { height: 'title', align: 'end' },
            textPositionHorizontal: 'end',
            textPositionVertical: 'end',
            bg: 'primary-white',
          }}
          text='We'
          containerStyles={{padding: `${isMobile ? '8px' : '16px'}`}}
        />
      </div>
      <div className="row-span-1 col-span-1 relative overflow-hidden border border-secondary-10">
        {/* bottom */}
        <div
          className={`absolute w-full h-full transform ${topVisible ? 'transition-all ease-in-out -translate-y-[50%] opacity-0' : 'transition-none translate-y-0 opacity-100'} duration-1000`}
        >
          <Card
            styles={{
              textStyles: { height: 'subtitle', align: 'start' },
              textPositionHorizontal: 'start',
              textPositionVertical: 'end',
            }}
            text={cases[bottomCaseIndex]?.Title}
            containerStyles={{padding: `${isMobile ? '8px' : '16px'}`}}
          />
        </div>
        {/* top */}
        <div 
          className={`absolute w-full h-full transform ${topVisible ? 'transition-all ease-in-out translate-y-0 opacity-100' : 'transition-none translate-y-[50%] opacity-0'} duration-1000`}
        >
          <Card
            styles={{
              textStyles: { height: 'subtitle', align: 'start' },
              textPositionHorizontal: 'start',
              textPositionVertical: 'end',
            }}
            text={cases[topCaseIndex]?.Title}
            containerStyles={{padding: `${isMobile ? '8px' : '16px'}`}}
          />
        </div>
        <div className="absolute space-x-4 text-[32px] right-4 md:right-6 lg:right-8 xl:right-11 bottom-4 md:bottom-6 lg:bottom-12 xl:bottom-16">
          <button className="lg:opacity-10 lg:hover:opacity-100" onClick={handlePrevious}>
            <ChevronLeftRounded fontSize="inherit"/>
          </button>  
          <button className="lg:opacity-10 lg:hover:opacity-100" onClick={handleNext}>
            <ChevronRightRounded fontSize="inherit"/>
          </button>
        </div>
        <div className="absolute inset-x-4 md:inset-x-6 lg:inset-x-8 xl:inset-x-11 bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-11 h-1 md:h-2">
          {!isMobile && <animated.div
            className={`bg-secondary-10 rounded-full`}
            style={styles}
          />}
        </div>
      </div>
      <div className="row-span-2 col-span-2 lg:col-span-1 md:row-span-1 flex overflow-hidden">
        <div className={`flex-1 relative opacity-100 aspect-square`}>
          {/* bottom */}
          <div className={`absolute w-full h-full transform ${topVisible ? 'transition-all ease-in-out -translate-y-full' : 'transition-none translate-y-0'} duration-1000`}>
            <Card
              styles={{
                textStyles: { height: 'paragraph', align: 'start' },
                direction: isMobile ? 'col-reverse' : 'col',
                color: 'white',
                textPositionHorizontal: 'center',
                textPositionVertical: 'center',
                bg: cases[bottomCaseIndex]?.case_of_study.data.attributes.primaryColor,
                bgSecondary: cases[bottomCaseIndex]?.case_of_study.data.attributes.secondaryColor,
              }}
              caseId={cases[bottomCaseIndex]?.case_of_study.data.id}
              description={cases[bottomCaseIndex]?.case_of_study.data.attributes.caseDescription}
              imageUrl={cases[bottomCaseIndex]?.case_of_study.data.attributes.image.data.attributes.url}
              text={tablet ? '' : cases[bottomCaseIndex]?.case_of_study.data.attributes.title}
              showButton={isMobile}
              messageOnHover={desktop}
              altText={cases[bottomCaseIndex]?.case_of_study.data.attributes.altText}
            />
          </div>
          {/* top */}
          <div 
            className={`absolute h-full w-full transform ${topVisible ? 'transition-all ease-in-out translate-y-0' : 'transition-none translate-y-full'} duration-1000`}
          >
            <Card
              styles={{
                textStyles: { height: 'paragraph', align: 'start' },
                direction: isMobile ? 'col-reverse' : 'col',
                color: 'white',
                textPositionHorizontal: 'center',
                textPositionVertical: 'center',
                bg: cases[topCaseIndex]?.case_of_study.data.attributes.primaryColor,
                bgSecondary: cases[topCaseIndex]?.case_of_study.data.attributes.secondaryColor,
              }}
              description={cases[topCaseIndex]?.case_of_study.data.attributes.caseDescription}
              imageUrl={cases[topCaseIndex]?.case_of_study.data.attributes.image.data.attributes.url}
              text={tablet ? ' ' : cases[topCaseIndex]?.case_of_study.data.attributes.title}
              showButton={isMobile}
              caseId={cases[topCaseIndex]?.case_of_study.data.id}
              messageOnHover={desktop}
              altText={cases[bottomCaseIndex]?.case_of_study.data.attributes.altText}
            />
          </div>
        </div>
        {tablet && <div className="relative flex-1">
          {/* bottom */}
          <div className={`absolute w-full h-full transform ${topVisible ? 'transition-all ease-in-out -translate-y-full' : 'transition-none translate-y-0'} duration-1000`}>
            <Card
              text={cases[bottomCaseIndex]?.case_of_study.data.attributes.title}
              styles={{
                textStyles: { height: 'paragraph', align: 'start' },
                direction: 'col',
                color: 'white',
                textPositionHorizontal: 'center',
                textPositionVertical: 'center',
                bg: cases[bottomCaseIndex]?.case_of_study.data.attributes.primaryColor,
                bgSecondary: cases[bottomCaseIndex]?.case_of_study.data.attributes.secondaryColor,
              }}
              description={cases[bottomCaseIndex]?.case_of_study.data.attributes.caseDescription}
              descriptionOnly
              caseId={cases[bottomCaseIndex]?.case_of_study.data.id}
              altText={cases[bottomCaseIndex]?.case_of_study.data.attributes.altText}
            />
            </div>
            {/* top */}
            <div 
              className={`absolute h-full w-full transform ${topVisible ? 'transition-all ease-in-out translate-y-0' : 'transition-none translate-y-full'} duration-1000`}
            >
              <Card
                text={cases[topCaseIndex]?.case_of_study.data.attributes.title}
                styles={{
                  textStyles: { height: 'paragraph', align: 'start' },
                  direction: 'col',
                  color: 'white',
                  textPositionHorizontal: 'center',
                  textPositionVertical: 'center',
                  bg: cases[topCaseIndex]?.case_of_study.data.attributes.primaryColor,
                  bgSecondary: cases[topCaseIndex]?.case_of_study.data.attributes.secondaryColor,
                }}
                description={cases[topCaseIndex]?.case_of_study.data.attributes.caseDescription}
                descriptionOnly
                caseId={cases[topCaseIndex]?.case_of_study.data.id}
                altText={cases[bottomCaseIndex]?.case_of_study.data.attributes.altText}
              />
            </div>
        </div>}
      </div>
    </div>
  )
}

export default ViewPager