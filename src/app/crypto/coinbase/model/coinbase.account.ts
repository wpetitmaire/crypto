export class CoinbaseAccount {
  id: string;
  code: string;
  libel: string;
  balance: number;
  price: number;
  exponent: number;

  constructor(
    id: string,
    code: string,
    libel: string,
    balance: number,
    price: number,
    exponent: number
  ) {
    this.id = id;
    this.code = code;
    this.libel = libel;
    this.balance = balance;
    this.price = price;
    this.exponent = exponent;
  }
}
