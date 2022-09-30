import { Avatar } from '@elements/Avatar';
import { Sizes } from '@enums/sizes.enum';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import { Team } from '@interfaces/about-us-data/about-us.interface';
import { CSSProperties, useEffect, useState } from 'react';

const genericPhoto = '/assets/images/generic_profilephoto.png';

export const AboutUsTeam = ({ data: { title, subtitle, teamMembers } }: { data: Team }) => {
  const { currentScreen } = useIsSizeScreen();
  const [customStyle, setCustomStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (currentScreen === Sizes.SM) {
      const columns = Math.ceil(teamMembers.length / 2);
      setCustomStyle({ gridTemplateColumns: `repeat(${columns}, 65vw` });
    } else {
      setCustomStyle({});
    }
  }, [currentScreen, teamMembers]);

  return (
    <section className="w-full">
      <div className="w-full text-center mt-[104px] md:mt-[200px] lg:mt-[320px] p-[0px_72px] mb-12 md:mb-[80px]">
        <h3 className="text-[28px] md:text-5xl mb-4 md:mb-2 lg:text-[58px] font-bold">{title}</h3>
        <p className="text-base md:text-[28px]">{subtitle}</p>
      </div>
      <div
        className="w-full grid grid-rows-2 md:flex md:flex-wrap md:justify-center gap-y-8 overflow-x-auto snap-x mb-[104px] md:mb-[200px] lg:mb-[320px]"
        style={customStyle}
      >
        {teamMembers.map((member, idx) => (
          <div key={`team-member-${idx}`} className="flex flex-col items-center md:w-1/3 lg:w-1/5">
            <Avatar
              className="border border-[#D9D9D9] rounded-full"
              photo={member.photo?.data.attributes.url || genericPhoto}
            />
            <div className="text-center">
              <p className="text-base font-bold">{member.name}</p>
              <p className="text-sm">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <hr className="md:hidden w-[240px] text-[#E6E6E6]" />
      </div>
    </section>
  );
};
