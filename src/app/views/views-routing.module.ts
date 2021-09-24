import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from '../util/router-navigation/router-navigation/router-navigation.component';
import { RouterNavigationRoutes } from '../util/router-navigation/shared/router-navigation-route';

const routes: RouterNavigationRoutes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      {
        path: 'component-examples',
        loadChildren: () =>
          import('./component-examples/component-examples.module').then(
            (m) => m.ComponentExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Components`,
          },
        },
      },
      {
        path: 'directive-examples',
        loadChildren: () =>
          import('./directive-examples/directive-examples.module').then(
            (m) => m.DirectiveExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Directives`,
          },
        },
      },
      {
        path: 'service-examples',
        loadChildren: () =>
          import('./service-examples/service-examples.module').then(
            (m) => m.ServiceExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Services`,
          },
        },
      },
      {
        path: 'router-examples',
        loadChildren: () =>
          import('./router-examples/router-examples.module').then(
            (m) => m.RouterExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Router`,
          },
        },
      },
      {
        path: '',
        redirectTo: 'component-examples',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
