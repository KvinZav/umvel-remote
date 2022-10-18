import type { LogoProps } from '@type/components/LogoNavBar';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC<LogoProps> = ({ url, onClick }) => {
  return (
    <div>
      <Link href={url || '/'}>
        <a onClick={onClick}>
          <img
            src="/assets/images/ntt-umvel-logo.svg"
            className="
              w-[155px] h-8
              xl:w-[224px] xl:h-[46px]"
            alt="Umvel an NTT Data Company"
          />
        </a>
      </Link>
    </div>
  );
};
export default Logo;
