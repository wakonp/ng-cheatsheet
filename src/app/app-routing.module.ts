import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'services',
    loadChildren: () =>
      import('./views/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./views/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./views/directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
  },
  {
    path: 'factories',
    loadChildren: () =>
      import('./views/factories/factories.module').then(
        (m) => m.FactoriesModule
      ),
  },
  {
    path: 'guards',
    loadChildren: () =>
      import('./views/guards/guards.module').then((m) => m.GuardsModule),
  },
  {
    path: 'change-detection',
    loadChildren: () =>
      import('./views/change-detection/change-detection.module').then(
        (m) => m.ChangeDetectionModule
      ),
  },
  {
    path: 'router',
    loadChildren: () =>
      import('./views/router/router.module').then((m) => m.RouterModule),
  },
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
