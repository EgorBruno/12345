export const movieCategories = {
  ACTION: 'Боевик',
  DRAMA: 'Драма',
  COMEDY: 'Комедия',
  SCIFI: 'Фантастика',
  THRILLER: 'Триллер',
  HORROR: 'Ужасы',
  ADVENTURE: 'Приключения',
  DOCUMENTARY: 'Документальный',
  BIOGRAPHY: 'Биография',
  HISTORICAL: 'Исторический'
} as const;

export type MovieCategory = typeof movieCategories[keyof typeof movieCategories];