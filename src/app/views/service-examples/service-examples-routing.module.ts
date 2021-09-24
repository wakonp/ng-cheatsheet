import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      {
        path: 'component-communication-examples',
        loadChildren: () =>
          import(
            './component-communication-examples/component-communication-examples.module'
          ).then((m) => m.ComponentCommunicationExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`Component Communication`,
          },
        },
      },
      {
        path: 'injection-examples',
        loadChildren: () =>
          import('./injection-examples/injection-examples.module').then(
            (m) => m.InjectionExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Injection`,
          },
        },
      },
      {
        path: 'factory-examples',
        loadChildren: () =>
          import('./factory-examples/factory-examples.module').then(
            (m) => m.FactoryExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Factory`,
          },
        },
      },

      {
        path: '',
        redirectTo: 'component-communication-examples',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceExamplesRoutingModule {}
