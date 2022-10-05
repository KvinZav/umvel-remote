import { CardConnect } from '@elements/card';
import CustomImage from '@elements/image-component/CustomImage';
import { Position } from '@enums/position.enum';
import { Sizes } from '@enums/sizes.enum';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import { DeliverValue } from '@interfaces/cases-data/cases.interface';
import { CardConnectConfiguration } from '@interfaces/components/cardConnect.interface';
import { CSSProperties, useEffect, useState } from 'react';

const gridConfig = {
  sm: {
    items: [
      {
        parentStyle: { gridColumn: '1/2', flexDirection: 'column' },
        cardConnectStyle: { width: '100%' },
        imageStyle: { width: '100%' },
      },
      {
        parentStyle: { gridColumn: '2/3', flexDirection: 'column' },
        cardConnectStyle: { width: '100%' },
        imageStyle: { width: '100%' },
      },
      {
        parentStyle: { gridColumn: '3/4', flexDirection: 'column' },
        cardConnectStyle: { width: '100%' },
        imageStyle: { width: '100%' },
      },
    ],
  },
  md: {
    items: [
      {
        parentStyle: { gridColumn: '1/3' },
        cardConnectStyle: { width: '50%' },
        imageStyle: { width: '50%' },
      },
      {
        parentStyle: { gridRow: '2/4', gridColumn: '2/3', flexDirection: 'column' },
        cardConnectStyle: { width: '100%' },
        imageStyle: { width: '100%' },
      },
      {
        parentStyle: { gridRow: '2/4', flexDirection: 'column-reverse' },
        cardConnectStyle: { width: '100%' },
        imageStyle: { width: '100%' },
      },
    ],
  },
  lg: {
    items: [
      {
        parentStyle: { gridColumn: '1/3' },
        cardConnectStyle: { width: '50%' },
        imageStyle: { width: '50%' },
      },
      {
        parentStyle: { gridRow: '1/3', gridColumn: '3/4', flexDirection: 'column' },
        cardConnectStyle: { width: '100%' },
        imageStyle: { width: '100%' },
      },
      {
        parentStyle: { gridRow: '2/3', gridColumn: '1/3', flexDirection: 'row-reverse' },
        cardConnectStyle: { width: '50%' },
        imageStyle: { width: '50%' },
      },
    ],
  },
};

const connectConfigurations: {
  connectConfig: CardConnectConfiguration[];
  defaultConnect?: Position;
}[] = [
  {
    connectConfig: [{ align: Position.bottom, size: Sizes.SM }],
    defaultConnect: Position.right,
  },
  {
    connectConfig: [],
    defaultConnect: Position.bottom,
  },
  {
    connectConfig: [
      { align: Position.left, size: Sizes.LG },
      { align: Position.top, size: Sizes.MD },
      { align: Position.bottom, size: Sizes.SM },
    ],
  },
];

const imageConfigurations: { className: string; style: CSSProperties }[] = [
  { className: 'justify-center items-end', style: { background: 'rgba(0,0,0,.1)' } },
  { className: 'justify-center items-center', style: { background: 'rgba(0,0,0,.3)' } },
  { className: 'justify-center items-center', style: { background: 'rgba(0,0,0,.2)' } },
];

export const DeliveredValue = ({
  data,
  primaryColor,
}: {
  data: DeliverValue;
  primaryColor: string;
}) => {
  const { list, title } = data;
  const { currentScreen } = useIsSizeScreen();
  const [currentGridConfig, setCurrentGridConfig] = useState(null);

  useEffect(() => {
    const config = gridConfig[currentScreen];
    if (!!config) {
      setCurrentGridConfig(config);
    } else {
      setCurrentGridConfig(null);
    }
  }, [currentScreen]);

  return (
    <section className="w-full" style={{ gridColumn: '1/3' }}>
      <div className="mt-36 md:mt-40 lg:mt-[200px] xl:mt-[300px] mb-20">
        <h4 className="text-center font-bold text-2xl md:text-3xl">{title}</h4>
      </div>
      <div className="w-full grid grid-rows-1 md:grid-rows-3 lg:grid-rows-2 grid-cols-[repeat(3,90vw)] md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x">
        {list.slice(0, 3).map(({ title, content, image }, idx) => (
          <div
            className="flex"
            key={`item-delivery-${idx}`}
            style={currentGridConfig?.items[idx].parentStyle}
          >
            <CardConnect
              className="aspect-square border border-[#E6E6E6]"
              style={currentGridConfig?.items[idx].cardConnectStyle}
              config={connectConfigurations[idx].connectConfig}
              alignDefault={connectConfigurations[idx].defaultConnect}
            >
              <div className="p-6 md:p-[30px] lg:p-12 xl:p-14">
                <h5 className="text-2xl md:text-[1.75rem] font-bold mb-2 xl:mb-4">{title}</h5>
                <p className="text-xs md:text-base">{content}</p>
              </div>
            </CardConnect>
            <div
              className={`flex align-end aspect-square relative`}
              style={{ background: primaryColor, ...currentGridConfig?.items[idx].imageStyle }}
            >
              <div
                className={`flex w-full h-full ${imageConfigurations[idx].className}`}
                style={imageConfigurations[idx].style}
              >
                <CustomImage src={image} alt={`deliver-image-${idx}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
