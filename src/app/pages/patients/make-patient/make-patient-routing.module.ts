import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakePatientPage } from './make-patient.page';

const routes: Routes = [
  {
    path: '',
    component: MakePatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakePatientPageRoutingModule {}
