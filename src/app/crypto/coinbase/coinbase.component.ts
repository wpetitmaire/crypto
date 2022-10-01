import { Component, OnInit } from '@angular/core';
import { CoinbaseService } from './coinbase.service';
import { CoinbaseAccount } from './model/coinbase.account';

@Component({
  selector: 'app-coinbase',
  templateUrl: './coinbase.component.html',
  styleUrls: ['./coinbase.component.scss']
})
export class CoinbaseComponent implements OnInit {

  displayedColumns = ['code', 'libel']
  accounts!: CoinbaseAccount[];

  constructor(private readonly coinbaseService: CoinbaseService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.coinbaseService.getAccounts().subscribe((apiResponse) => {
      this.accounts = apiResponse.accounts
      console.log(this.accounts)
    });
  }

}
