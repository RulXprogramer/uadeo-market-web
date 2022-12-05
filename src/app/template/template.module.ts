import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { SidemenuModule } from './components/sidemenu/sidemenu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderModule, FooterModule, SidemenuModule
  ],
  exports: [HeaderModule, FooterModule, SidemenuModule]
})
export class TemplateModule { }
