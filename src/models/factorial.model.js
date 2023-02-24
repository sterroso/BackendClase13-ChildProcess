const factorial = (n) => {
  if (n < 0) throw new Error("n must be a positive integer.");

  if (n % 1 !== 0) throw new Error("n must be a positive integer.");

  if (n === 0) return 1;

  if (n <= 2) return n;

  let a = 1; // f(0)

  for (let i = 1; i <= n; i++) {
    a *= i;

    console.log("Factorial iteration: ", i, ", result: ", a);
  }

  return a;
};

process.on("message", (msg) => {
  try {
    console.log("msg received by Factorial child", msg);
    const nthTerm = Number(msg.n);
    console.log("n: ", nthTerm);
    const result = factorial(nthTerm);
    console.log("result: ", result);
    process.send({ status: "success", payload: { n: nthTerm, result } });
  } catch (error) {
    console.error(error.message);
    process.send({ status: "error", error: error.message });
    process.exitCode = 1;
    process.exit();
  }
});
