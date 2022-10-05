import { CSSProperties } from 'react';

export const Avatar = ({
  photo,
  className,
  style,
}: {
  photo: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={`w-48 aspect-square rounded-full ${className}`}
      style={{
        backgroundImage: `url('${photo}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        ...style,
      }}
    ></div>
  );
};
