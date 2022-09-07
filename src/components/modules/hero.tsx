import { Card } from "@elements/card/card";
import { useEffect } from "react";

export const Hero = (props) => {
  console.log(props);
  
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
        {/* first card */}
        <Card
          styles={{
            textStyles: { height: "title", align: "right" },
            textPositionHorizontal: "center",
            textPositionVertical: "end",
            bg: props.data.primaryColor,
          }}
          text={props.data?.block.displayName}
        />

        {/* second card */}
        <Card
          styles={{
            textStyles: { height: "subtitle", align: "start" },
            textPositionHorizontal: "center",
            textPositionVertical: "end",
            bg: props.data.caseOfStudy[0].primaryColor,
          }}
          text={props.data.caseOfStudy[0].Title}
        />
        {/* third card */}
        <div className="hidden md:block">
          <Card
            styles={{
              textStyles: { height: "paragraph", align: "start" },
              direction: "col",
              color: "white",
              textPositionHorizontal: "center",
              textPositionVertical: "center",
              bg: props.data.caseOfStudy[0].case_of_study.data.attributes.primaryColor,
              bgSecondary: props.data.caseOfStudy[0].case_of_study.data.attributes.secondaryColor,
            }}
            description={props.data.caseOfStudy[0].case_of_study.data.attributes.caseDescription}
            imageUrl={"/assets/images/capa.svg"}
            text={props.data.caseOfStudy[0].case_of_study.data.attributes.title}
          />
        </div>
        
        {/* Show card when display has ipad */}
        <div className="hidden md:block lg:hidden">
          <Card
            styles={{
              textStyles: { height: "paragraph", align: "start" },
              direction: "col",
              color: "white",
              textPositionHorizontal: "center",
              textPositionVertical: "center",
              bg: props.data.caseOfStudy[0].case_of_study.data.attributes.secondaryColor,
              bgSecondary: props.data.caseOfStudy[0].case_of_study.data.attributes.secondaryColor,
            }}
            description={props.data.caseOfStudy[0].case_of_study.data.attributes.caseDescription}
            imageUrl=""
            text={props.data.caseOfStudy[0].Title}
            showDescription
          />
        </div>
      </div>
 
      <div className="sm:block md:hidden">
        <Card
          styles={{
            textStyles: { height: "paragraph", align: "start" },
            direction: "col",
            color: "white",
            textPositionHorizontal: "center",
            textPositionVertical: "center",
            bg: props.data.caseOfStudy[0].case_of_study.data.attributes.primaryColor,
            bgSecondary: props.data.caseOfStudy[0].case_of_study.data.attributes.secondaryColor,
          }}
          description={props.data.caseOfStudy[0].case_of_study.data.attributes.caseDescription}
          imageUrl={"/assets/images/capa.svg"}
          text={props.data.caseOfStudy[0].Title}
        />
      </div>
    </>
  );
};
