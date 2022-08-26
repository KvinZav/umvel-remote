import { Card } from "@elements/card/card";

export const Hero = (props) => {
  return (
    <div className="columns-3 gap-0">
      {props?.data
        .filter((item) => item.__component === "heading.heading")
        .map((element) => (
          <>
            <Card
              styles={{
                textStyles: { height: "98px", align: "right" },
                textPositionHorizontal: "center",
                textPositionVertical: "end",
                bg: element.primaryColor,
                borderColor: "#E6E6E6",
                text: element?.block.displayName,
              }}
            />
          </>
        ))}
      {props?.data
        .filter((item) => item.__component === "heading.heading")
        .map((element) => (
          <>
            {element.caseOfStudy.map((element) => (
              <>
                <Card
                  styles={{
                    textStyles: { height: "38px", align: "end" },
                    textPositionHorizontal: "center",
                    textPositionVertical: "end",
                    bg: element.primaryColor,
                    borderColor: "#E6E6E6",
                    text: element.Title,
                  }}
                />

                {/* third card */}

                <Card
                  styles={{
                    textStyles: { height: "16px", align: "start" },
                    direction: "col",
                    color: "white",
                    descriptionSection: {
                      text: element.case_of_study.data.attributes.caseDescription,
                    },
                    imageUrl: "/assets/images/capa.svg",
                    textPositionHorizontal: "center",
                    textPositionVertical: "center",
                    bg: element.case_of_study.data.attributes.primaryColor,
                    bgSecondary: element.case_of_study.data.attributes.secondaryColor,
                    borderColor: "#E6E6E6",
                    text: element.Title,
                  }}
                />
              </>
            ))}
          </>
        ))}
    </div>
  );
};
