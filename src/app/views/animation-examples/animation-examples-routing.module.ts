import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      {
        path: 'stagger-examples',
        loadChildren: () =>
          import('./stagger-examples/stagger-examples.module').then(
            (m) => m.StaggerExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Stagger`,
          },
        },
      },
      {
        path: 'transition-examples',
        loadChildren: () =>
          import('./transition-examples/transition-examples.module').then(
            (m) => m.TransitionExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Transition`,
          },
        },
      },
      {
        path: 'query-examples',
        loadChildren: () =>
          import('./query-examples/query-examples.module').then(
            (m) => m.QueryExamplesModule
          ),
        data: {
          navigationMenuOptions: {
            name: $localize`Query`,
          },
        },
      },

      {
        path: '',
        redirectTo: 'stagger-examples',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationExamplesRoutingModule {}
