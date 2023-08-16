import 'styled-components';

type Theme = {
  'primary-600': string;
  'primary-500': string;
  'primary-400': string;
  'primary-300': string;
  'primary-200': string;
  'primary-100': string;
  'on-primary': string;
  'on-primary-100': string;
  'surface-100': string;
  'surface-200': string;
  'surface-300': string;
  'surface-400': string;
  'surface-500': string;
  'surface-600': string;
  'on-surface': string;
  'on-surface-100': string;
  'surface-mixed-100': string;
  'surface-mixed-200': string;
  'surface-mixed-300': string;
  'surface-mixed-400': string;
  'surface-mixed-500': string;
  'surface-mixed-600': string;
  'on-surface-mixed': string;
  'on-surface-mixed-100': string;
};
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
