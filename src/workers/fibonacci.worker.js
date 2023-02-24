const fibonacci = (n) => {
  if (n < 0) throw new Error("n must be a positive integer");
  if (n % 1 !== 0) throw new Error("n must be a positive integer");
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n < 2) return n;

  let a = 0;

  let b = 1;

  let j;

  for (let i = 1; i <= n; i++) {
    j = a + b;
    a = b;
    b = j;
  }

  return b;
};

process.on("message", (msg) => {
  try {
    const nthTerm = Number(msg.n);
    const result = fibonacci(nthTerm);
    process.send({ status: "success", payload: { n: nthTerm, sum: result } });
  } catch (error) {
    process.send({ status: "error", error: error.message });
    process.exitCode = 1;
    process.exit();
  }
});
