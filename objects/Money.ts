import { Currency } from "./Currency";

// 正常値
// amount: 0以上の整数
// currency: null以外

export class Money {
  readonly amount: number;
  readonly currency: Currency;

  constructor(amount: number, currency: Currency) {
    if (amount < 0) {
      throw new Error("金額が0以上ではありません。");
    }

    this.amount = amount;
    this.currency = currency;
  }

  add(money: Money): Money {
    if (!this.currency.equals(money.currency)) {
      throw new Error("通貨単位が違います。");
    }

    const added = this.amount + money.amount;
    return new Money(added, this.currency);
  }
}
