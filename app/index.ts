import * as services from './services/index';
export { App } from './app';
export { routes } from './routes';

const mapValuesToArray = (obj: any) => Object.keys(obj).map(key => obj[key]);

export const providers = [
  ...mapValuesToArray(services)
];
