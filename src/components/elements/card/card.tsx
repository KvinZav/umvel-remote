import { CardInterface } from "@interfaces/card.interface";
import { useEffect } from "react";

export const Card = (props: CardInterface) => {
  const { styles } = props;
  useEffect(() => {
    console.log(styles.color);
  });
  return (
    <>
      <div
        className={`group flex-${styles.direction} text-${styles?.color} flex items-${styles.textPositionHorizontal} justify-${styles.textPositionVertical} h-[448px]
        border-solid border border-[${styles.borderColor}] ${styles.bg}`}
      >
        {styles.imageUrl && <img className="m-auto" src={styles.imageUrl} alt="" />}

        <p
          className={`${!styles.descriptionSection ? null : "group-hover:hidden"} p-4 w-full text-${
            styles.textStyles?.align
          } text-[${styles.textStyles?.height}]`}
        >
          {styles.text}
        </p>
        {/* When hover show description and background change */}
        {styles.descriptionSection && (
          <>
            <section
              className={`group-hover:${styles.bgSecondary} flex-${styles.direction} group-hover:block hidden p-4 ${styles.bgSecondary}`}
            >
              <p
                className={`w-full font-bold text-${styles.textStyles?.align} text-[${styles.textStyles?.height}]`}
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
