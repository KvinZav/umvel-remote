import { CardInterface } from "@interfaces/card.interface";
import { useEffect } from "react";

export const Card = (props: CardInterface) => {
  const { styles } = props;
  
  return (
    <>
      <div
        className={`flex group ${styles.direction === "col" ? "flex-col" : "flex-row-reverse"} ${
          styles?.color === "white" ? "text-white" : "text-black"
        } ${
          styles.textPositionHorizontal === "start"
            ? "items-start"
            : styles.textPositionHorizontal === "center"
            ? "items-center"
            : "items-end"
        }  ${styles.textPositionVertical === "start" ? "justify-start" : "justify-center"} h-[448px]
        border-solid border border-[${styles.borderColor}] ${
          styles.bg === "capa"
            ? "bg-blue-500"
            : styles.bg === "capa-secondary"
            ? "bg-blue-700"
            : "bg-white"
        }`}
      >
        {styles.imageUrl && <img className="m-auto" src={styles.imageUrl} alt="image" />}

        <p
          className={`${
            !styles.descriptionSection
              ? null
              : styles.showDescription
              ? "hidden"
              : "group-hover:hidden"
          } p-4 ${
            styles.textStyles?.align === "start"
              ? "text-start"
              : styles.textStyles?.align === "center"
              ? "text-center"
              : "text-end"
          } w-full ${styles.textStyles?.height === 'title' ?  'text-[98px]' : styles.textStyles?.height ==='subtitle' ? 'text-[36px]' : 'text-[16px]'}`}
        >
          {styles.text}
        </p>
        {/* When hover show description and background change */}

        {styles.descriptionSection && (
          <>
            <section
              className={`w-full ${
                styles.bgSecondary === "capa-secondary"
                  ? "group-hover:bg-blue-700"
                  : "group-hover:bg-white"
              } ${styles.direction === "col" ? "flex-col" : "flex-row-reverse"} ${
                styles.showDescription ? "block" : "group-hover:block hidden"
              }  p-4 ${styles.bgSecondary}`}
            >
              <p
                className={`w-full font-bold text-${styles.textStyles?.align} ${styles.textStyles?.height === 'title' ?  'text-[98px]' : styles.textStyles?.height ==='subtitle' ? 'text-[36px]' : 'text-[16px]'}`}
              >
                {styles.text}
              </p>
              <p>{styles.descriptionSection?.text}</p>
              <button className="rounded-full mt-5 px-3" style={{ border: "2px solid white" }}>
                view case
              </button>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export const CustomCard = ({children, customStyles = ''}) => {
  return (
    <div className={`aspect-square border-secondary-10 border-solid`}>
      {children}
    </div>
  )
}