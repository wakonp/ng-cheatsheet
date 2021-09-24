import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkExamplesComponent } from './router-link-examples.component';

const routes: Routes = [{ path: '', component: RouterLinkExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterLinkExamplesRoutingModule { }
