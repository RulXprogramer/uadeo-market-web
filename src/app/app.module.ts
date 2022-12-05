import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { TemplateModule } from './template/template.module';
import { FooterModule } from "./template/components/footer/footer.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        TemplateModule,
        FooterModule
    ]
})
export class AppModule { }
