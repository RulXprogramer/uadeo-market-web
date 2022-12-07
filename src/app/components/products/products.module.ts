import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsFormComponent } from '../products-form/products-form.component';
import { RouterModule } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:  '',  component: ProductsComponent}
    ]),
    DxDataGridModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ProductsModule { }
