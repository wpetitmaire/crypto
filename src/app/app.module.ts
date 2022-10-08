import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoModule } from './crypto/crypto.module';
import { CryptoRoutingModule } from './crypto/crypto-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CryptoBalanceFormatPipe } from './crypto/coinbase/crypto-balance-format.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CryptoModule,
    CryptoRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
