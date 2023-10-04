type Operation = "add" | "multiply" | "divide";

function multiplier(num1: number, num2: number, op: Operation) {
  if (op === "add") {
    return num1 + num2;
  } else if (op === "divide") {
    if (num2 === 0) {
      return "can't divide by zero";
    }
    return num1 / num2;
  } else if (op === "multiply") {
    return num1 * num2;
  }
}

console.log(multiplier(12, 4, "divide"));
