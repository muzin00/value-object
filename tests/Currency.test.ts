import { Currency } from "../objects/Currency";

describe("equalsメソッド", () => {
  it("同じ通貨単位を渡すとtrueを返す", () => {
    const currency = new Currency("JPY");
    expect(currency.equals(new Currency("JPY"))).toBe(true);
  });

  it("異なる通貨単位を渡すとfalseを返す", () => {
    const currency = new Currency("JPY");
    expect(currency.equals(new Currency("USD"))).toBe(false);
  });
});
