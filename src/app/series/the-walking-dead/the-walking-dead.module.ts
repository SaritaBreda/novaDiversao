import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheWalkingDeadPageRoutingModule } from './the-walking-dead-routing.module';

import { TheWalkingDeadPage } from './the-walking-dead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheWalkingDeadPageRoutingModule
  ],
  declarations: [TheWalkingDeadPage]
})
export class TheWalkingDeadPageModule {}
