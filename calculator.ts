type Operations = "multiply" | "add" | "divide" | "subtract";

const calculator = (a: number, b: number, op: Operations): number => {
  switch (op) {
    case "multiply":
      return a * b;
    case "add":
      return a + b;
    case "divide":
      if (b === 0) console.log("can't divide by 0!");
      return a / b;
    case "subtract":
      return a - b;
    default:
      console.log("Operation is not multiply, add, divide, or subtract!");
  }
};

const parseArguments = (args: Array<string>) => {
  if (args.length < 5) throw new Error("Not enough arguments");
  if (args.length > 5) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    if (typeof args[4] === "string") {
      const a: number = Number(args[2]);
      const b: number = Number(args[3]);
      const op: Operations = args[4] as Operations;
      console.log(a, b, op);

      return { a, b, op };
    } else {
      throw new Error("Provided operation were not valid!");
    }
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const cleanArguments = parseArguments(process.argv);

console.log(calculator(cleanArguments.a, cleanArguments.b, cleanArguments.op));
