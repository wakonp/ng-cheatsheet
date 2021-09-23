import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from 'src/app/util/under-construction/under-construction.component';
import { ChangeDetectionComponent } from './change-detection.component';

const routes: Routes = [{ path: '', component: UnderConstructionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectionRoutingModule {}
