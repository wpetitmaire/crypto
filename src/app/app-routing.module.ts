import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinbaseComponent } from './crypto/coinbase/coinbase.component';

const routes: Routes = [
  {
    path: 'crypto',
    loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule)
  },
  { path: '', redirectTo: 'crypto', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
