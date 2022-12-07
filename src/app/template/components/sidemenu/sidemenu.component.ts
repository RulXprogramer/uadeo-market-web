import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  menus = environment.menus;

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
