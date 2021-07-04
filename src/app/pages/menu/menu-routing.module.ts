import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'chat',
    loadChildren: () => import('../../pages/chat/chat.module').then( m => m.ChatPageModule),
   // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'edit-patient',
    loadChildren: () => import('../../pages/patients/edit-patient/edit-patient.module').then( m => m.EditPatientPageModule)
  },
  {
    path: 'make-patient',
    loadChildren: () => import('../../pages/patients/make-patient/make-patient.module').then( m => m.MakePatientPageModule)
  },
  {
    path: 'home-patient',
    loadChildren: () => import('../../pages/patients/home-patient/home-patient.module').then( m => m.HomePatientPageModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
