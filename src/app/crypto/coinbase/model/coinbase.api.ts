import { CoinbaseAccount } from "./coinbase.account";

export namespace CoinbaseApi {
  export interface accounts {
    retrieveDate: Date,
    accounts: CoinbaseAccount[]
  }
}
