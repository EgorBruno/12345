import React from 'react';
import { Star } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function MoviePlayer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex-1 p-4 flex flex-col h-full overflow-hidden">
      <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'justify-between items-center'} mb-4`}>
        <h1 className="text-lg font-bold text-white">Название Фильма</h1>
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">Рейтинг 9.0/10</span>
          <Star className="text-yellow-400" size={16} fill="currentColor" />
        </div>
      </div>

      <div className="relative w-full" style={{ paddingBottom: isMobile ? '56.25%' : '45%' }}>
        <div className="absolute inset-0 bg-gray-800 rounded-lg"></div>
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-base text-white">Описание</h2>
        <div className="flex space-x-1">
          {[...Array(9)].map((_, i) => (
            <Star
              key={i}
              className="text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors"
              size={isMobile ? 16 : 20}
            />
          ))}
        </div>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
          «Вызов» — российская драма 2023 года режиссёра Клима Шипенко. Сюжет: во время ремонта спутника космонавт Олег Богданов получает травму лёгкого. До Земли он не долетит, поэтому серьёзную операцию решают провести прямо на МКС в условиях невесомости. Среди лучших земных торакальных хирургов выбирают Евгению Беляеву. Женщине предстоит побороть страх и неуверенность, чтобы совершить настоящий подвиг и спасти космонавта. На подготовку у неё всего лишь один месяц, и она принимает вызов.
        </p>
      </div>
    </div>
  );
}