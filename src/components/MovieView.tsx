import React from 'react';
import { Star } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function MovieView() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="h-full flex flex-col p-4">
      <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'justify-between items-center'} mb-4`}>
        <h1 className="text-lg font-bold">Название Фильма</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Рейтинг 9.0/10</span>
          <Star className="text-yellow-400" size={16} fill="currentColor" />
        </div>
      </div>

      <div className="flex-1 relative min-h-0">
        <div className="absolute inset-0 bg-gray-800 rounded-lg" />
      </div>

      <div className="mt-4">
        <h2 className="text-base mb-2">Описание</h2>
        <div className="flex space-x-1 mb-2">
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