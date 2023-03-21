import { useStartHomeAnimation } from "@hooks/useStartHomeAnimation";
import { CSSProperties, useEffect, useMemo, useState } from "react";


const mosaicItems = [
  [12, 13, 15],
  [8, 10, 14],
  [4, 7, 9, 11],
  [2, 3, 5, 6],
  [0, 1],
];

const colors = [
  'aqua',
  'green',
  'lime',
  'yellow',
  'purple',
  'pink',
  'red',
  'orange',
  'navy',
  'blue',
  'aqua',
  'green',
  'red',
  'orange',
  'yellow',
  'lime',
];

const mapMosaicItems = () => {
  return mosaicItems.map((mosaicRow, idx) => {
    return mosaicRow.map( item => ({
      classList: `bg-prisma-${colors[item]}`,
      style: {transitionDelay: `${6000 + 200 * (idx + 1)}ms`},
      id: item,
    }))
  }).flat().sort((a, b) => a.id - b.id);
}

export const CardMosaicAnimated = ({ showText = true, showMosaic = true, dropAnimation = false }) => {

  const [textStyles, setTextStyles] = useState<CSSProperties>({
    transform: 'translate(0px, 30%)',
    opacity: '0'
  });
  const mosaicItems = useMemo(() => mapMosaicItems(), []);
  const { classTransitions } = useStartHomeAnimation()

  useEffect(() => {

    if (dropAnimation) return;

    const timeOut = setTimeout(() => {
      setTextStyles({
        transform: 'translate(0px)', 
        opacity: '1',
      })
    }, 0);

    return () => clearTimeout(timeOut);
  }, [dropAnimation]);

  return (
    <div className="w-100 h-full relative aspect-square bg-primary-black">
      {
        showText &&
        <div
          className={
            "absolute w-full top-0 aspect-square z-20 " +
            `${classTransitions.five} ` +
            "flex justify-center items-center"
          }
          style={dropAnimation ? null : textStyles}>
          <p
            className="text-m5 text-primary-white"
            >We deliver what we promise.
          </p>
        </div>
      }
      {
        showMosaic &&
      <div
        className={
          "absolute w-full top-0 z-10 aspect-square grid grid-cols-4 " + 
          classTransitions.five
          }
        style={dropAnimation ? null : {opacity: textStyles.opacity}}>
          {
            mosaicItems.map(item => (
              <div
                key={`mosaic-${item.id}`}
                className={
                  "w-full aspect-square " +
                  `${classTransitions.two} ` +
                  item.classList
                }
                style={dropAnimation ? null : {...item.style, opacity: textStyles.opacity}}></div>
            ))
          }
      </div>
      }
    </div>
  );
};
