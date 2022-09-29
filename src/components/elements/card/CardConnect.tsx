import CustomImage from '@elements/image-component/CustomImage';
import { Position } from '@enums/position.enum';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import {
  CardConnectComponent,
  ConnectorConfiguration,
  positionConfiguration,
} from '@interfaces/components/cardConnect.interface';
import { useEffect, useState } from 'react';

/**
 * This Custom Card display an connector in some side: top | bottom | right | left
 * configByPosition: Contain each align configuration.
 * CardConnect has the next parameters:
 * @param config - array with all configurations about screen size and connector align
 * @param alignDefault - string that contain in what side displays connector by default
 * @param children - all nodes that CardConnect is going to contain
 * @param className - string with all custom class added to CardConnect
 *
 */

const configByPosition: positionConfiguration = {
  top: {
    image: 'triangleTop.svg',
    className: 'justify-center z-10',
    widthConnector: '56px',
    style: { top: '-24px' },
  },
  bottom: {
    image: 'triangleBottom.svg',
    className: 'justify-center items-end z-10',
    widthConnector: '56px',
    style: { top: '24px' },
  },
  right: {
    image: 'triangleRight.svg',
    className: 'items-center justify-end z-10',
    widthConnector: '24px',
    style: { right: '-24px' },
  },
  left: {
    image: 'triangleLeft.svg',
    className: 'items-center justify-start z-10',
    widthConnector: '24px',
    style: { right: '24px' },
  },
};

const changeBorderColor = (position: Position) => {
  let borderClass = '';
  switch (position) {
    case Position.bottom:
      borderClass = 'border-b-transparent';
      break;
    case Position.left:
      borderClass = 'border-l-transparent';
      break;
    case Position.right:
      borderClass = 'border-r-transparent';
      break;
    case Position.top:
      borderClass = 'border-t-transparent';
      break;
  }
  return borderClass;
};

export const CardConnect = ({
  config,
  alignDefault,
  children,
  className,
  style,
}: CardConnectComponent) => {
  const { currentScreen } = useIsSizeScreen();
  const [configConnector, setConfigConnector] = useState<ConnectorConfiguration>(null);
  const [borderClass, setBorderClass] = useState<string>('');

  useEffect(() => {
    const currentConfig = config.find((configItem) => configItem.size === currentScreen);

    if (currentConfig) {
      setConfigConnector({
        ...configByPosition[`${currentConfig.align}`],
      });
      setBorderClass(changeBorderColor(currentConfig.align));
    } else if (!!alignDefault) {
      setConfigConnector({
        ...configByPosition[`${alignDefault}`],
      });
      setBorderClass(changeBorderColor(alignDefault));
    } else {
      setConfigConnector(null);
    }
  }, [config, currentScreen, alignDefault]);

  return (
    <div className={`relative ${className} ${borderClass}`} style={style}>
      {!!configConnector && (
        <div
          className={`absolute flex w-full h-full ${configConnector.className}`}
          style={configConnector.style}
        >
          <CustomImage
            width={configConnector.widthConnector}
            src={`/assets/icons/${configConnector.image}`}
            alt="triangle-connector"
          />
        </div>
      )}
      {children}
    </div>
  );
};
