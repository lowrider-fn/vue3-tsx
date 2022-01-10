import 'vue-router';
import type { RouteMetaType } from '../router/interfaces';

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RouteMeta extends RouteMetaType { }
}
