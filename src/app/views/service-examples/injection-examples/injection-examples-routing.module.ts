import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InjectionExamplesComponent } from './injection-examples.component';

const routes: Routes = [{ path: '', component: InjectionExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectionExamplesRoutingModule { }
