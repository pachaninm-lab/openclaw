import { describe, expect, it } from "vitest";
import { calculateSimple, evaluateSimpleExpression } from "./simple-calculator";

describe("calculateSimple", () => {
  it("supports the four basic operations", () => {
    expect(calculateSimple(5, 3, "+")).toBe(8);
    expect(calculateSimple(5, 3, "-")).toBe(2);
    expect(calculateSimple(5, 3, "*")).toBe(15);
    expect(calculateSimple(6, 3, "/")).toBe(2);
  });

  it("throws on division by zero", () => {
    expect(() => calculateSimple(6, 0, "/")).toThrowError("Cannot divide by zero");
  });
});

describe("evaluateSimpleExpression", () => {
  it("parses and evaluates expression strings", () => {
    expect(evaluateSimpleExpression("2 + 2")).toBe(4);
    expect(evaluateSimpleExpression("10.5 - 3")).toBe(7.5);
    expect(evaluateSimpleExpression("-4 * -2")).toBe(8);
  });

  it("rejects invalid expressions", () => {
    expect(() => evaluateSimpleExpression("2 +")).toThrowError(
      "Expression must look like: <number> <operator> <number>",
    );
  });
});
