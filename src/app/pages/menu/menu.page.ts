import { MenuService } from './../../services/menuservice/menu.service';
import { Component, OnInit } from '@angular/core';
import { Router , RouterEvent, RouterModule} from '@angular/router';
import { MenuPageModule } from './menu.module';
import { LoginService } from '../../services/loginservice/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages=[
    {
      title:'Chat',
      url:'/menu/chat'
  },
  {
    title:'Contactos',
    url:'/menu/contacts'
  },
  {
    title:'Paciente',
    url:'/menu/home-patient'
  },
  {
    title:'Editar paciente',
    url:'/menu/edit-patient'
  },{
    title:'Crear paciente',
    url:'/menu/make-patient'
  },

  ]
selectedPath='';
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath=event.url;
    });
  }

  ngOnInit() {
    
  }

  signOut() {
    this.loginService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
      }

}
