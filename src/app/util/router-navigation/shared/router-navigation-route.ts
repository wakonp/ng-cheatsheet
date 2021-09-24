import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { RouterNavigationComponent } from '../router-navigation/router-navigation.component';
import { NavigationMenuOptions } from './navigation-options';

export interface NavigationRoute extends Route {
  data?: {
    navigationMenuOptions: NavigationMenuOptions;
  };
}
export interface RouterNavigationRoute extends Route {
  children: NavigationRoute[];
  component: Type<RouterNavigationComponent>;
}
export type RouterNavigationRoutes = RouterNavigationRoute[] | Route[];
