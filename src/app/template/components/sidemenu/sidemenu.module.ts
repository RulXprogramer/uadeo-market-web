import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [SidemenuComponent]
})
export class SidemenuModule { }
