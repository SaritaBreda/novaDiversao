import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheWalkingDeadPage } from './the-walking-dead.page';

const routes: Routes = [
  {
    path: '',
    component: TheWalkingDeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheWalkingDeadPageRoutingModule {}
