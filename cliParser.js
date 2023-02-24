import arg from "arg";

const isValidNumbersArray = (array) => {
  return array.every((number) => {
    return !isNaN(Number(number));
  });
};

const args = arg({
  // Types
  "--help": Boolean,
  "--version": Boolean,

  // Aliases
  "-h": "--help",
  "-v": "--version",
});

try {
  const input = args._;

  if (isValidNumbersArray(input)) {
    const numbers = input.map((item) => Number(item));
    console.log(numbers.reduce((acc, curr) => (acc += curr), 0));
  } else {
    console.log(input.map((item) => {
      if (item.match(/^\d+$/)) return "number";

      if (item.match(/^\d+\.\d+$/)) return "float";

      if (["true", "false"].includes(item)) return "boolean";

      if (item.match(/^null$/)) return "null";

      if (item.match(/^undefined$/)) return "undefined";

      if (item.match(/^\[.*\]$/)) return "array";

      if (item.match(/^\{.*\}$/)) return "object";

      if (
        item.match(/^function[ ]*.*\(.*\)[ ]*\{.*\}$/) ||
        item.match(/^\(\)[ ]*=>[ ]*\{.*\}$/)
        )
        return "function";

      if (item.match(/^[a-zA-Z]+$/)) return "string";
    }));
    console.log("Invalid numbers");
  }
} catch (error) {
  console.error(error.message);
}
