import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CaixeiroComponent } from './caixeiro/caixeiro.component';


@NgModule({
  declarations: [
    AppComponent,
    CaixeiroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
