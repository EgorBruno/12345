import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-xs text-white rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
                    pointer-events-none z-50">
        {text}
      </div>
    </div>
  );
}