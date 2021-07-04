import { Routes , RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
 
// Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);
 
// Automatically log in users
const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);
const redirectLoggedInToMenu = () => redirectLoggedInTo(['/menu']);
 

const routes:Routes=[
  {
    path:"menu",
    component:MenuPage,
    children:[
      {
        path: 'chat',
        loadChildren: () => import('../../pages/chat/chat.module').then( m => m.ChatPageModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'contacts',
        loadChildren: () => import('../../pages/contacts/contacts.module').then( m => m.ContactsPageModule),
        ...canActivate(redirectLoggedInToChat ),  
      },
    ]
  },{
    path:' ',
    redirectTo:'../menu/chat'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    MenuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
