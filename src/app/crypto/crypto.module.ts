import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinbaseComponent } from './coinbase/coinbase.component';
import { CryptoRoutingModule } from './crypto-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CryptoRoutingModule
  ],
  declarations: [
    CoinbaseComponent
  ]
})
export class CryptoModule { }
