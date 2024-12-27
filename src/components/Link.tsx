import React from 'react';
import { Tooltip } from './Tooltip';

interface LinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  showTooltip?: boolean;
  onClick?: () => void;
}

export function Link({ icon, label, active, showTooltip, onClick }: LinkProps) {
  const linkContent = (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors
                  ${active 
                    ? 'bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400'}
                  ${showTooltip ? 'justify-center' : ''}`}
    >
      {icon}
      {!showTooltip && <span>{label}</span>}
    </button>
  );

  if (showTooltip) {
    return (
      <Tooltip text={label}>
        {linkContent}
      </Tooltip>
    );
  }

  return linkContent;
}