import { Sizes } from '@enums/sizes.enum';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import {
  CardTeamComponent,
  CardTeamConfiguration,
} from '@interfaces/components/cardTeam.interface';
import { waitFor } from '@utils/waitFor';
import { useState, useEffect } from 'react';

/**
 * CardTeam displays specific names by row and column and also can display another component on its
 * @param config - config array that contain how many names displays by screen size: sm | md | lg
 * @param defaultConfig - default config if there aren't any specific config by screen size
 * @param names - string array that contains all names to display
 * @param className - custom class names for main component
 * @param style - custom styles for main component
 * @param children - optional children to display on component
 * @returns
 */
export const CardTeam = ({
  config,
  defaultConfig,
  names,
  className,
  style,
  children,
}: CardTeamComponent) => {
  const { currentScreen } = useIsSizeScreen();
  const [{ rows, columns }, setConfigNames] = useState<CardTeamConfiguration>({
    rows: 0,
    columns: 0,
    size: Sizes.LG,
  });

  useEffect(() => {
    const currentConfig = config.find((configItem) => configItem.size === currentScreen);

    if (!!currentConfig) {
      setConfigNames({ ...currentConfig, size: currentScreen });
    } else if (!!defaultConfig) {
      setConfigNames({ ...defaultConfig, size: currentScreen });
    } else {
      setConfigNames({ rows: 0, columns: 0, size: currentScreen });
    }
  }, [config, defaultConfig, currentScreen]);

  return (
    <article className={`select-none ${className}`} style={style}>
      <div
        className="grid h-[100%]"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {
          [... new Array(columns * rows)].map((name: string, index: number) => (
            <PulsatingName key={'card-team-name-'+index} names={names}/>
          ))
        }
      </div>
      {children}
    </article>
  );
};

const PulsatingName = ({names} : { names: string[] }) => {  

  const [currentName, setCurrentName] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const intervalTime = Math.random() * (2500) + 500 

  useEffect(() => {
    const initialName = names[Math.floor(Math.random() * names.length)]
    setCurrentName(initialName)
    
    const nameInterval = setInterval(() => {
      if(Math.random() >= 0.8){
        handleNameChange()
      }
    }, intervalTime)

    return () => clearInterval(nameInterval)
  }, [])

  const handleNameChange = async () => {
    setIsVisible(false)
    const newName = names[Math.floor(Math.random() * names.length)]
    await waitFor(800)
    setCurrentName(newName)
    setIsVisible(true)
  }

  return(
    <div className="aspect-square relative flex justify-center items-center text-secondary-30 text-s3">
      <span
        className={`bg-primary-white transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {currentName}
      </span>
    </div>
  )
}

export default PulsatingName;