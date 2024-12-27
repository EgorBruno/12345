export type ThemeType = 'light' | 'dark' | 'system' | 'custom';
export type CustomTheme = 'yellow' | 'red' | 'orange' | 'purple' | 'green';

export interface ThemeContextType {
  theme: ThemeType;
  customTheme: CustomTheme;
  setTheme: (theme: ThemeType) => void;
  setCustomTheme: (theme: CustomTheme) => void;
}