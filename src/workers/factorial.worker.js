const factorial = (n) => {
  if (n < 0) throw new Error("n must be a positive integer.");

  if (n % 1 !== 0) throw new Error("n must be a positive integer.");

  if (n === 0) return 1;

  if (n <= 2) return n;

  let a = 1; // f(0)

  for (let i = 1; i <= n; i++) {
    a *= i;
  }

  return a;
};

process.on("message", (msg) => {
  try {
    const nthTerm = Number(msg.n);
    const result = factorial(nthTerm);
    process.send({ status: "success", payload: { n: nthTerm, factorial: result } });
  } catch (error) {
    process.send({ status: "error", error: error.message });
    process.exitCode = 1;
    process.exit();
  }
});
