import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakePageRoutingModule } from './make-routing.module';

import { MakePage } from './make.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakePageRoutingModule
  ],
  declarations: [MakePage]
})

export class MakePageModule { }
