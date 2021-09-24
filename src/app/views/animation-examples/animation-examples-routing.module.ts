import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterNavigationComponent } from 'src/app/util/router-navigation/router-navigation/router-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: RouterNavigationComponent,
    children: [
      // {
      //   path: 'resolver-examples',
      //   loadChildren: () =>
      //     import('./resolver-examples/resolver-examples.module').then(
      //       (m) => m.ResolverExamplesModule
      //     ),
      //   data: {
      //     navigationMenuOptions: {
      //       name: $localize`Resolver`,
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
export class AnimationExamplesRoutingModule {}
