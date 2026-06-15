import React from "react";

// Tree view Y-bracket connector components showing match progression with arrows
export const LeftConnector300 = () => (
  <div className="h-[300px] flex items-center justify-center w-8 select-none">
    <svg className="w-8 h-[300px]" viewBox="0 0 32 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,75 L16,75 L16,225 L0,225 M16,150 L28,150" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <path d="M26,146 L32,150 L26,154 Z" fill="rgba(139,92,246,0.45)" />
    </svg>
  </div>
);

export const LeftConnector600 = () => (
  <div className="h-[600px] flex items-center justify-center w-8 select-none">
    <svg className="w-8 h-[600px]" viewBox="0 0 32 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,150 L16,150 L16,450 L0,450 M16,300 L28,300" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <path d="M26,296 L32,300 L26,304 Z" fill="rgba(139,92,246,0.45)" />
    </svg>
  </div>
);

export const LeftConnector1200 = () => (
  <div className="h-[1200px] flex items-center justify-center w-8 select-none">
    <svg className="w-8 h-[1200px]" viewBox="0 0 32 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,300 L16,300 L16,900 L0,900 M16,600 L28,600" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <path d="M26,596 L32,600 L26,604 Z" fill="rgba(139,92,246,0.45)" />
    </svg>
  </div>
);

export const RightConnector300 = () => (
  <div className="h-[300px] flex items-center justify-center w-8 select-none">
    <svg className="w-8 h-[300px]" viewBox="0 0 32 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32,75 L16,75 L16,225 L32,225 M16,150 L4,150" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <path d="M6,146 L0,150 L6,154 Z" fill="rgba(139,92,246,0.45)" />
    </svg>
  </div>
);

export const RightConnector600 = () => (
  <div className="h-[600px] flex items-center justify-center w-8 select-none">
    <svg className="w-8 h-[600px]" viewBox="0 0 32 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32,150 L16,150 L16,450 L32,450 M16,300 L4,300" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <path d="M6,296 L0,300 L6,304 Z" fill="rgba(139,92,246,0.45)" />
    </svg>
  </div>
);

export const RightConnector1200 = () => (
  <div className="h-[1200px] flex items-center justify-center w-8 select-none">
    <svg className="w-8 h-[1200px]" viewBox="0 0 32 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32,300 L16,300 L16,900 L32,900 M16,600 L4,600" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
      <path d="M6,596 L0,600 L6,604 Z" fill="rgba(139,92,246,0.45)" />
    </svg>
  </div>
);
