import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinbaseComponent } from './coinbase/coinbase.component';
import { CryptoRoutingModule } from './crypto-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";
import { CryptoBalanceFormatPipe } from './coinbase/crypto-balance-format.pipe';




@NgModule({
  imports: [
    CommonModule,
    CryptoRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  declarations: [
    CoinbaseComponent,
    CryptoBalanceFormatPipe
  ]
})
export class CryptoModule { }
