import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvesDeRapinaPageRoutingModule } from './aves-de-rapina-routing.module';

import { AvesDeRapinaPage } from './aves-de-rapina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvesDeRapinaPageRoutingModule
  ],
  declarations: [AvesDeRapinaPage]
})
export class AvesDeRapinaPageModule {}
