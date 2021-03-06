import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KanyeQuoteComponent } from './components/kanye-quote/kanye-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    KanyeQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
