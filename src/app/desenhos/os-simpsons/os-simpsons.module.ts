import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsSimpsonsPageRoutingModule } from './os-simpsons-routing.module';

import { OsSimpsonsPage } from './os-simpsons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsSimpsonsPageRoutingModule
  ],
  declarations: [OsSimpsonsPage]
})
export class OsSimpsonsPageModule {}