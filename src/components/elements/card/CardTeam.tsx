import { Sizes } from '@enums/sizes.enum';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import {
  CardTeamComponent,
  CardTeamConfiguration,
} from '@interfaces/components/cardTeam.interface';
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
        {names.slice(0, columns * rows).map((name: string, index: number) => (
          <PulsatingName key={'card-team-name-'+index} name={name}/>
        ))}
      </div>
      {children}
    </article>
  );
};

const PulsatingName = ({name}) => {

  const [isVisible, setIsVisible] = useState(false)  

  const handleToggleAnim = () => {
    setIsVisible(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 1000);
  }

  useEffect(() => {
    const initialDelay = Math.floor(Math.random() * 5000)
    
    setTimeout(() => {
      setInterval(() => {
        if(Math.random() >= 0.6){
          handleToggleAnim()
        }
      }, 1500)
    }, initialDelay)
    
  }, [])

  return(
    <div
      className={`aspect-square flex justify-center items-center text-secondary-30 text-s3 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {name}
    </div>
  )
}

export default PulsatingName;