import React, { useEffect, useRef, useState } from 'react';
import { Star, Play } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useMovie } from '../../context/MovieContext';
import { VideoControls } from '../video/VideoControls';

export function MovieView() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(true);
  const [volume, setVolume] = useState(100);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { currentMovie } = useMovie();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (!currentMovie) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400 dark:text-gray-400">Выберите фильм для просмотра</p>
      </div>
    );
  }

  return (
    <div className="relative h-full flex flex-col p-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl transform scale-110" />
      </div>

      <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'justify-between items-center'} mb-4 z-10`}>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">{currentMovie.title}</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowTrailer(!showTrailer)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <Play size={16} />
            <span>{showTrailer ? 'Смотреть фильм' : 'Смотреть трейлер'}</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Рейтинг {currentMovie.rating}/10</span>
            <Star className="text-yellow-400" size={16} fill="currentColor" />
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 relative min-h-0 bg-black/50 rounded-lg overflow-hidden backdrop-blur-sm z-10">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <iframe
          ref={videoRef}
          src={showTrailer ? currentMovie.trailerUrl || currentMovie.videoUrl : currentMovie.videoUrl}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
        <VideoControls
          volume={volume}
          progress={progress}
          isFullscreen={isFullscreen}
          onVolumeChange={setVolume}
          onProgressChange={setProgress}
          onFullscreenToggle={handleFullscreenToggle}
        />
      </div>

      <div className="mt-4 z-10">
        <h2 className="text-base mb-2 text-gray-900 dark:text-white">Описание</h2>
        <div className="flex space-x-1 mb-2">
          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              className={`${i < parseInt(currentMovie.rating) ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-400 cursor-pointer transition-colors`}
              size={isMobile ? 16 : 20}
            />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-xs leading-relaxed backdrop-blur-sm bg-white/80 dark:bg-black/30 p-4 rounded-lg">
          {currentMovie.description}
        </p>
      </div>
    </div>
  );
}