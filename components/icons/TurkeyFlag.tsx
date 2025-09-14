import React from 'react';

export function TurkeyFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
      <path fill="#e30a17" d="M0 0h900v600H0z" />
      <circle cx="425" cy="300" r="120" fill="#fff" />
      <circle cx="460" cy="300" r="96" fill="#e30a17" />
      <path fill="#fff" d="m490 250 75 23-46 61 46 61-75 23-29-82z" />
    </svg>
  );
}
