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
      className={`w-48 h-48 rounded-full ${className}`}
      style={{
        backgroundImage: `url('${photo}')`,
        ...style,
      }}
    ></div>
  );
};
