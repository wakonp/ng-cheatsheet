import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      {
        path: 'change-detection-examples',
        loadChildren: () =>
          import(
            './change-detection-examples/change-detection-examples.module'
          ).then((m) => m.ChangeDetectionExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`Change Detection`,
          },
        },
      },
      {
        path: 'view-encapsulation-examples',
        loadChildren: () =>
          import(
            './view-encapsulation-examples/view-encapsulation-examples.module'
          ).then((m) => m.ViewEncapsulationExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`View Encapsulation`,
          },
        },
      },
      {
        path: 'selector-examples',
        loadChildren: () =>
          import('./selector-examples/selector-examples.module').then(
            (m) => m.SelectorExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Selector`,
          },
        },
      },
      {
        path: 'lifecycle-examples',
        loadChildren: () =>
          import('./lifecycle-examples/lifecycle-examples.module').then(
            (m) => m.LifecycleExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Lifecycle`,
          },
        },
      },
      {
        path: 'decorator-examples',
        loadChildren: () =>
          import('./decorator-examples/decorator-examples.module').then(
            (m) => m.DecoratorExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Decorators`,
          },
        },
      },
      {
        path: 'content-projection-examples',
        loadChildren: () =>
          import(
            './content-projection-examples/content-projection-examples.module'
          ).then((m) => m.ContentProjectionExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`Content Projection`,
          },
        },
      },
      {
        path: '',
        redirectTo: 'change-detection-examples',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentExamplesRoutingModule {}
