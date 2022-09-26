import CustomImage from "@elements/image-component/CustomImage";
import { useIsSizeScreen } from "@hooks/useIsSizeScreen";
import {
  CardConnectComponent,
  ConnectorConfiguration,
  positionConfiguration,
} from "@interfaces/components/cardConnect.interface";
import { useEffect, useState } from "react";

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
    image: "triangleTop.svg",
    className: "justify-center z-10",
    widthConnector: "56px",
    style: { top: "-24px" },
  },
  bottom: {
    image: "triangleBottom.svg",
    className: "justify-center items-end z-10",
    widthConnector: "56px",
    style: { top: "24px" },
  },
  right: {
    image: "triangleRight.svg",
    className: "items-center justify-end z-10",
    widthConnector: "24px",
    style: { right: "-24px" },
  },
  left: {
    image: "triangleLeft.svg",
    className: "items-center justify-start z-10",
    widthConnector: "24px",
    style: { right: "24px" },
  },
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

  useEffect(() => {
    const currentConfig = config.find((configItem) => configItem.size === currentScreen);

    if (currentConfig) {
      setConfigConnector({
        ...configByPosition[`${currentConfig.align}`],
      });
    } else if (!!alignDefault) {
      setConfigConnector({
        ...configByPosition[`${alignDefault}`],
      });
    } else {
      setConfigConnector(null);
    }
  }, [config, currentScreen, alignDefault]);

  return (
    <div className={`relative ${className}`} style={style}>
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
