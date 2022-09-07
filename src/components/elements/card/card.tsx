import { CardInterface } from "@interfaces/card.interface";

export const Card = (props: CardInterface) => {
  const { styles, imageUrl, text, description, showDescription } = props;
  
  return (
    <>
      <div
        className={`
          flex
          group
          ${styles.direction === "col" ? "flex-col" : "flex-row-reverse"} 
          ${styles?.color === "white" ? "text-white" : "text-black"}
          ${styles.textPositionHorizontal === "start" && "items-start"}
          ${styles.textPositionHorizontal === "center" && "items-center"}
          ${styles.textPositionHorizontal === "end" && "items-end"}
          ${styles.textPositionVertical === "start" ? "justify-start" : "justify-center"}
          aspect-square
          border-solid
          border
        `}
        style={{
          borderColor: styles.borderColor || "#e6e6e6",
          backgroundColor: styles.bg
        }}
      >
        {imageUrl && <img className="m-auto" src={imageUrl} alt="image" />}

        <p
          className={`${
            !description
              ? null
              : showDescription
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
          {text}
        </p>
        {/* When hover show description and background change */}

        {description && (
          <>
            <section
              className={`w-full ${
                styles.bgSecondary === "capa-secondary"
                  ? "group-hover:bg-blue-700"
                  : "group-hover:bg-white"
              } ${styles.direction === "col" ? "flex-col" : "flex-row-reverse"} ${
                showDescription ? "block" : "group-hover:block hidden"
              }  p-4 ${styles.bgSecondary}`}
            >
              <p
                className={`w-full font-bold text-${styles.textStyles?.align} ${styles.textStyles?.height === 'title' ?  'text-[98px]' : styles.textStyles?.height ==='subtitle' ? 'text-[36px]' : 'text-[16px]'}`}
              >
                {text}
              </p>
              <p>{description}</p>
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

export const CustomCard = ({children, customStyles = '', borderless = false}) => {
  return (
    <div className={`aspect-square ${!borderless && 'border border-secondary-10 border-solid'} ${customStyles}`}>
      {children}
    </div>
  )
}