import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPatientPageRoutingModule } from './edit-patient-routing.module';

import { EditPatientPage } from './edit-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditPatientPageRoutingModule
  ],
  declarations: [EditPatientPage]
})
export class EditPatientPageModule {}
