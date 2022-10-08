export class CoinbaseAccount {
  id: string;
  code: string;
  libel: string;
  balance: CoinbaseBalance;
  price: number;

  constructor(
    id: string,
    code: string,
    libel: string,
    price: number,
    balance: CoinbaseBalance,
  ) {
    this.id = id;
    this.code = code;
    this.libel = libel;
    this.price = price;
    this.balance = new CoinbaseBalance(balance.value, balance.exponent);
  }
}

export class CoinbaseBalance {
  value: number;
  exponent: number;

  constructor(value: number, exponent: number) {
    this.value = value;
    this.exponent = value;
  }
}
