import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentExtensionExamplesComponent } from './component-extension-examples.component';

const routes: Routes = [{ path: '', component: ComponentExtensionExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentExtensionExamplesRoutingModule { }
