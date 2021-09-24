import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      // {
      //   path: 'guard-examples',
      //   loadChildren: () =>
      //     import('./guard-examples/guard-examples.module').then(
      //       (m) => m.GuardExamplesModule
      //     ),
      //   data: {
      //     navigationMenuOptions: {
      //       name: $localize`Guards`,
      //     },
      //   },
      // },
      // {
      //   path: '',
      //   redirectTo: 'guard-examples',
      //   pathMatch: 'full',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectionExamplesRoutingModule {}
