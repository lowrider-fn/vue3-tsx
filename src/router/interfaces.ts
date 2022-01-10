export interface RouteMetaType {
  guest?: boolean;
  auth?: boolean;
  title: string;
}

export enum RoutePath {
  Auth = '/login',
  Main = '/',
  NewsEditing = '/news-editing',
  NotFound = '/:pathMatch(.*)*'
}
