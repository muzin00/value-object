// 通貨コード一覧
// https://ja.wikipedia.org/wiki/ISO_4217

type CurrencyCode = "USD" | "JPY";

export class Currency {
  readonly code: CurrencyCode;

  constructor(code: CurrencyCode) {
    this.code = code;
  }

  equals(currency: Currency): boolean {
    return this.code === currency.code;
  }
}
