export type SimpleCalculatorOperator = "+" | "-" | "*" | "/";

const SIMPLE_CALCULATOR_PATTERN = /^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)\s*$/;

function assertNever(_value: never): never {
  throw new Error("Unsupported operator");
}

/**
 * Calculates a result for two numbers and a supported operator.
 */
export function calculateSimple(a: number, b: number, operator: SimpleCalculatorOperator): number {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/": {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
    default:
      return assertNever(operator);
  }
}

/**
 * Evaluates a basic expression with two operands (e.g. "2 + 2").
 */
export function evaluateSimpleExpression(expression: string): number {
  const match = SIMPLE_CALCULATOR_PATTERN.exec(expression);
  if (!match) {
    throw new Error("Expression must look like: <number> <operator> <number>");
  }

  const left = Number.parseFloat(match[1]);
  const operator = match[2] as SimpleCalculatorOperator;
  const right = Number.parseFloat(match[3]);

  return calculateSimple(left, right, operator);
}
