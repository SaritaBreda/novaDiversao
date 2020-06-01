import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvesDeRapinaPage } from './aves-de-rapina.page';

const routes: Routes = [
  {
    path: '',
    component: AvesDeRapinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvesDeRapinaPageRoutingModule {}
