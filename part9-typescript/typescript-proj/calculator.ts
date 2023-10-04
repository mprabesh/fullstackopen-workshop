export type Operation = "add" | "multiply" | "divide";
type Result = string | number;

export function calculator(num1: number, num2: number, op: Operation): Result {
  switch (op) {
    case "multiply":
      return num1 * num2;
    case "add":
      return num1 + num2;
    case "divide":
      if (num2 === 0) throw new Error("Can't divide by zero");
      return num1 / num2;
    default:
      throw new Error("Operation is not multiply, add or divide!");
  }
}

try {
  console.log(calculator(12, 0, "divide"));
} catch (error: unknown) {
  let errorMessage = "Something went wrong! ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
