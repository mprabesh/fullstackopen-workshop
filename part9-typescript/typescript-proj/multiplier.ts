interface MultiplyValues {
  val1: number;
  val2: number;
}

function parseArgument(args: string[]): MultiplyValues {
  if (args.length < 4) throw new Error("Not Enough arguments");
  if (args.length > 4) throw new Error("Not Enough arguments");
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      val1: Number(args[2]),
      val2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
}

function multiplier(num1: number, num2: number, display: string) {
  console.log(display, num1 * num2);
}

try {
  const { val1, val2 } = parseArgument(process.argv);
  multiplier(val1, val2, `Multiplied ${val1} and ${val2}, the result is:`);
} catch (error: unknown) {
  let errorMessage = "Something bad happened ";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
