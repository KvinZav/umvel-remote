import * as React from 'react';

const SendIcon = (props) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="m5.367 19.92 17.04-7.053a.93.93 0 0 0 0-1.734L5.367 4.08c-.644-.273-1.357.189-1.357.858L4 9.285a.95.95 0 0 0 .85.933L18.647 12 4.85 13.773a.965.965 0 0 0-.85.942l.01 4.347c0 .67.713 1.131 1.357.858Z"
        fill={props.fill}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SendIcon;
