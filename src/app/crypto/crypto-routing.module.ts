import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CoinbaseComponent } from './coinbase/coinbase.component';

const routes: Routes = [
  { path: 'coinbase', component: CoinbaseComponent },
  { path: '', redirectTo: 'coinbase', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
