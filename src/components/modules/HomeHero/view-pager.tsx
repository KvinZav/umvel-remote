import { Card } from '@elements/card/card'
import useMediaQuery from '@hooks/useMediaQuery';
import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring';
import { ChevronRightRounded } from '@mui/icons-material';

const waitFor = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, delay);
})

const ViewPager = ({cases}) => {  
  
  const isMobile = useMediaQuery('(max-width: 639px)');
  const tablet = useMediaQuery('(max-width: 1023px) and (min-width: 640px)');

  const [currentCaseIndex, setCurrentCaseIndex] = useState<number>(0)

  const [topCaseIndex, setTopCaseIndex] = useState<number | undefined>(0)
  const [bottomCaseIndex, setBottomCaseIndex] = useState<number | undefined>(0)
  const [topVisible, setTopVisible] = useState(false)

  const [copied, setCopied] = useState(false)


  const [styles, api] = useSpring(() => ({
    from: { width: '0%', height: '100%' },
    to: { width: '100%', height: '100%' },
    config: { duration: 6000 },
  }))

  // const initialLoading = async () => {
  //   setCurrentCaseIndex(currentIndex => currentIndex >= cases.length - 1 ? 0 : currentIndex + 1)
  //   setInterval(() => {      
  //     setCurrentCaseIndex(currentIndex => currentIndex >= cases.length - 1 ? 0 : currentIndex + 1)     
  //     api.set({width: '0%'})
  //     api.start({width: '100%'})
  //   }, 6000);
  // }

  // useEffect(() => {
  //   initialLoading()
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentCaseIndex(currentIndex => currentIndex >= cases.length - 1 ? 0 : currentIndex + 1)
  //   }, 6000)
  // }, [currentCaseIndex])

  useEffect(() => {
    
    const setCaseSource = async () => {
      setTopCaseIndex(currentCaseIndex)
      await waitFor(250)
      setTopVisible(true)
      await waitFor(1000)
      setBottomCaseIndex(currentCaseIndex)
      api.set({width: '0%'})
      api.start({width: '100%'})
    }

    // setTimeout(() => {
    //   setCaseSource()
    // }, 6000);
    
    setCaseSource()
    setTimeout(() => {
      setCurrentCaseIndex(currentIndex => currentIndex >= cases.length - 1 ? 0 : currentIndex + 1)
    }, 6000);

  }, [currentCaseIndex])

  useEffect(() => {
    setTopVisible(false)
  }, [bottomCaseIndex])

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      },
        1000);
    }
  }, [copied])

  const handleNext = () => {
    setCurrentCaseIndex(currentIndex => currentIndex >= cases.length - 1 ? 0 : currentIndex + 1)     
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-1 gap-0 w-full">
      <div className="col-span-1 border border-secondary-10">
        <Card
          styles={{
            textStyles: { height: 'title', align: 'end' },
            textPositionHorizontal: 'end',
            textPositionVertical: 'end',
            bg: 'primary-white',
          }}
          text='We'
        />
      </div>
      <div className="col-span-1 relative overflow-hidden border border-secondary-10">
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
          />
        </div>
        <div className="absolute inset-x-4 md:inset-x-6 lg:inset-x-8 bottom-4 md:bottom-6 lg:bottom-8 h-1 md:h-2 rounded-full overflow-hidden">
          <animated.div
            className={`bg-secondary-10`}
            style={styles}
          />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-1 row-span-1 flex overflow-hidden">
        <div className={`flex-1 relative opacity-100`}>
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
                textColor: 'white',
              }}
              caseId={cases[bottomCaseIndex]?.case_of_study.data.id}
              description={cases[bottomCaseIndex]?.case_of_study.data.attributes.caseDescription}
              imageUrl={cases[bottomCaseIndex]?.case_of_study.data.attributes.image.data.attributes.url}
              text={cases[bottomCaseIndex]?.case_of_study.data.attributes.title}
              showButton={isMobile}
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
                textColor: 'white',
              }}
              description={cases[topCaseIndex]?.case_of_study.data.attributes.caseDescription}
              imageUrl={cases[topCaseIndex]?.case_of_study.data.attributes.image.data.attributes.url}
              text={cases[topCaseIndex]?.case_of_study.data.attributes.title}
              showButton={isMobile}
              caseId={cases[topCaseIndex]?.case_of_study.data.id}
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
              />
            </div>
        </div>}
      </div>
    </div>
  )
}

export default ViewPager