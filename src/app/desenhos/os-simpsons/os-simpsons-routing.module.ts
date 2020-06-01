import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsSimpsonsPage } from './os-simpsons.page';

const routes: Routes = [
  {
    path: '',
    component: OsSimpsonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsSimpsonsPageRoutingModule {}
