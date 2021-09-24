import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      {
        path: 'structural-directive-examples',
        loadChildren: () =>
          import(
            './structural-directive-examples/structural-directive-examples.module'
          ).then((m) => m.StructuralDirectiveExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`Structural Directives`,
          },
        },
      },
      {
        path: 'component-extension-examples',
        loadChildren: () =>
          import(
            './component-extension-examples/component-extension-examples.module'
          ).then((m) => m.ComponentExtensionExamplesModule),
        data: {
          navigationMenuOptions: {
            name: $localize`Component Extension`,
          },
        },
      },
      {
        path: '',
        redirectTo: 'structural-directive-examples',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveExamplesRoutingModule {}
