import React from 'react';

export function UKFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
      <clipPath id="uk-a">
        <path d="M0 0v30h60V0z"/>
      </clipPath>
      <clipPath id="uk-b">
        <path d="M30 15h30v15zv-15H0z"/>
      </clipPath>
      <g clipPath="url(#uk-a)">
        <path d="M0 0v30h60V0z" fill="#012169"/>
        <path d="M0 0L60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
        <path d="M0 0L60 30m0-30L0 30" clipPath="url(#uk-b)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}
