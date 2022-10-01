export class CoinbaseAccount {
  id: string;
  code: string;
  libel: string;

  constructor(id: string, code: string, libel: string) {
    this.id = id;
    this.code = code;
    this.libel = libel;
  }
}
