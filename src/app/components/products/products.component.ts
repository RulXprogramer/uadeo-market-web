import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  
  products = []; 

  columns = [
    {
      caption: 'Producto/servicio',
      dataField: 'name'
    },
    {
      caption: 'Descripcion',
      dataField: 'description'
    },
    {
      caption: 'Precio',
      dataField: 'price'
    },
    {
      caption: 'Usuario',
      dataField: 'user.nametag'
    },
  ];

  constructor(private productService: ProductsService, private matDialog: MatDialog){}

  ngOnInit() {
    this.productService.list().subscribe((response) => {
      console.log(response);

      this.products = response.data.products;
    });
  }

  add(){
    
  }
}
