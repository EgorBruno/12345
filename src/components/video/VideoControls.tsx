import React from 'react';
import { Volume2, Maximize2, Minimize2 } from 'lucide-react';

interface VideoControlsProps {
  volume: number;
  progress: number;
  isFullscreen: boolean;
  onVolumeChange: (value: number) => void;
  onProgressChange: (value: number) => void;
  onFullscreenToggle: () => void;
}

export function VideoControls({
  volume,
  progress,
  isFullscreen,
  onVolumeChange,
  onProgressChange,
  onFullscreenToggle
}: VideoControlsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
      <div className="space-y-2">
        {/* Progress bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => onProgressChange(Number(e.target.value))}
          className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full"
        />
        
        <div className="flex items-center justify-between">
          {/* Volume control */}
          <div className="flex items-center space-x-2">
            <Volume2 className="text-white" size={20} />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => onVolumeChange(Number(e.target.value))}
              className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full"
            />
          </div>

          {/* Fullscreen toggle */}
          <button
            onClick={onFullscreenToggle}
            className="text-white hover:text-blue-500 transition-colors"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}