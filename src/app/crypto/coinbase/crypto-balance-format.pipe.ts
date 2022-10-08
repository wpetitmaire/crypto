import { Pipe, PipeTransform } from '@angular/core';
import { CoinbaseBalance } from './model/coinbase.account';
import {formatNumber} from "@angular/common";

@Pipe({
  name: 'cryptoBalanceFormat',
  pure: false
})
export class CryptoBalanceFormatPipe implements PipeTransform {

  transform(balance: CoinbaseBalance): string {
    return formatNumber(balance.value, 'fr-FR', `1.0-${balance.exponent}`);
  }

}
