type Operations = "multiply" | "add" | "divide" | "subtract";

const calculator = (a: number, b: number, op: Operations) => {
  switch (op) {
    case "multiply":
      return a * b;
    case "add":
      return a + b;
    case "divide":
      if (b === 0) return "can't divide by 0!";
      return a / b;
    case "subtract":
      return a - b;
    default:
      throw new Error("Operation is not multiply, add, divide, or subtract!");
  }
};

console.log(calculator(1, 2, "add"));
