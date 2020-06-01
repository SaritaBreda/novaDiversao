import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoraDeAventuraPageRoutingModule } from './hora-de-aventura-routing.module';

import { HoraDeAventuraPage } from './hora-de-aventura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoraDeAventuraPageRoutingModule
  ],
  declarations: [HoraDeAventuraPage]
})
export class HoraDeAventuraPageModule {}
