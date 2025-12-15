import type { SVGProps } from "react";

export const KitesurfingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 17.1193 7.11929 16 8.5 16C9.88071 16 11 17.1193 11 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 19L6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 16V13.5M8.5 13.5L12 12L15 13.5M8.5 13.5C8.5 13.5 10.5 13.5 11.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 13.5L12 3L4 8C5.5 11.5 8.5 13.5 8.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FlagEN = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
      <clipPath id="a"><path d="M0 0h60v30H0z"/></clipPath>
      <g clipPath="url(#a)">
        <path d="M0 0v30h60V0z" fill="#00247d"/>
        <path d="M0 0L60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
        <path d="M0 0L60 30m0-30L0 30" stroke="#cf142b" strokeWidth="4"/>
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6"/>
      </g>
    </svg>
  );
  
export const FlagFR = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
      <path d="M0 0h20v30H0z" fill="#002654"/>
      <path d="M20 0h20v30H20z" fill="#fff"/>
      <path d="M40 0h20v30H40z" fill="#ED2939"/>
    </svg>
);
  
export const FlagES = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
      <path d="M0 0h60v30H0z" fill="#c60b1e"/>
      <path d="M0 7.5h60v15H0z" fill="#ffc400"/>
    </svg>
);
