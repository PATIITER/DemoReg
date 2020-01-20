import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClassPageRoutingModule } from './add-class-routing.module';

import { AddClassPage } from './add-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddClassPageRoutingModule
  ],
  declarations: [AddClassPage]
})
export class AddClassPageModule {}
