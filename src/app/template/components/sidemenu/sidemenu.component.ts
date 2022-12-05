import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  menus = [
    {
      name: 'Inicio',
      path: '',
      icon: 'home',
    },
    {
      name: 'Perfil',
      path: 'profile',
      icon: 'person',
    },
    {
      name: 'Admin',
      path: 'admin',
      icon: 'manage_accounts',
    },
  ]

  constructor(private router: Router){}

  goHome(){
    this.router.navigate(['']);
  }

  goProfile(){
    this.router.navigate(['profile']);
  }

  goAdmin(){
    this.router.navigate(['admin']);
  }
}
