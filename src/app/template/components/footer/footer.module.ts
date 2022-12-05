import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
