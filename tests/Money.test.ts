import { Money } from "../objects/Money";
import { Currency } from "../objects/Currency";

describe("コンストラクタ", () => {
  it("負の値で金額を初期化するとエラーになる", () => {
    expect(() => {
      new Money(-100, new Currency("JPY"));
    }).toThrowError("金額が0以上ではありません。");
  });
});

describe("addメソッド", () => {
  it("異なる通貨単位で計算するとエラーになる", () => {
    const jpy = new Money(100, new Currency("JPY"));
    const usd = new Money(100, new Currency("USD"));

    expect(() => {
      jpy.add(usd);
    }).toThrowError("通貨単位が違います。");
  });

  it("合計した金額を返す", () => {
    const money1 = new Money(100, new Currency("JPY"));
    const money2 = new Money(1000, new Currency("JPY"));

    const total = money1.add(money2);
    expect(total.amount).toBe(1100);
  });
});
