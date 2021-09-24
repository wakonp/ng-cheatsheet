import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      {
        path: 'guard-examples',
        loadChildren: () =>
          import('./guard-examples/guard-examples.module').then(
            (m) => m.GuardExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Guards`,
          },
        },
      },
      {
        path: 'activated-route-examples',
        loadChildren: () =>
          import(
            './activated-route-examples/activated-route-examples.module'
          ).then((m) => m.ActivatedRouteExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`Activated Route`,
          },
        },
      },
      {
        path: 'router-link-examples',
        loadChildren: () =>
          import('./router-link-examples/router-link-examples.module').then(
            (m) => m.RouterLinkExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Router Link`,
          },
        },
      },
      {
        path: 'router-outlet-examples',
        loadChildren: () =>
          import('./router-outlet-examples/router-outlet-examples.module').then(
            (m) => m.RouterOutletExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Router Outlet`,
          },
        },
      },
      {
        path: 'resolver-examples',
        loadChildren: () =>
          import('./resolver-examples/resolver-examples.module').then(
            (m) => m.ResolverExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Resolver`,
          },
        },
      },

      {
        path: '',
        redirectTo: 'guard-examples',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterExamplesRoutingModule {}
