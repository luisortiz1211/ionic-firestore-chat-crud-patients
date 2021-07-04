import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakePatientPageRoutingModule } from './make-patient-routing.module';

import { MakePatientPage } from './make-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MakePatientPageRoutingModule
  ],
  declarations: [MakePatientPage]
})
export class MakePatientPageModule {}
