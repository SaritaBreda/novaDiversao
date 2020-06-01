import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiverdalePage } from './riverdale.page';

const routes: Routes = [
  {
    path: '',
    component: RiverdalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiverdalePageRoutingModule {}
