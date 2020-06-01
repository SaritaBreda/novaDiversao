import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoraDeAventuraPage } from './hora-de-aventura.page';

const routes: Routes = [
  {
    path: '',
    component: HoraDeAventuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoraDeAventuraPageRoutingModule {}
