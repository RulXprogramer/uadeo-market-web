import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersFormComponent } from '../users-form/users-form.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
