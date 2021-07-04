import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);
 
// Automatically log in users
const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);
const redirectLoggedInToMenu = () => redirectLoggedInTo(['/menu']);
 
const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToMenu),
  },
 {
   path: 'chat',
   loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule),
   ...canActivate(redirectUnauthorizedToLogin),
 },
 {
   path: 'contacts',
   loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule),
   ...canActivate(redirectLoggedInToChat ),  
 },
 {
   path: 'menu',
   loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
 },
  {
    path: 'edit-patient',
    loadChildren: () => import('./pages/patients/edit-patient/edit-patient.module').then( m => m.EditPatientPageModule)
  },
  {
    path: 'make-patient',
    loadChildren: () => import('./pages/patients/make-patient/make-patient.module').then( m => m.MakePatientPageModule)
  },
  {
    path: 'home-patient',
    loadChildren: () => import('./pages/patients/home-patient/home-patient.module').then( m => m.HomePatientPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



