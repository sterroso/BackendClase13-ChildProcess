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

    console.log("Fibonacci iteration: ", i, ",  result: ", b);
  }

  return b;
};

process.on("message", (msg) => {
  try {
    console.log("msg received by Fibonacci child", msg);
    const nthTerm = Number(msg.n);

    console.log("nthTerm received by Fibonacci child", nthTerm);

    const result = fibonacci(nthTerm);

    console.log("result received by Fibonacci child", result);

    process.send({ status: "success", payload: { n: nthTerm, result } });
  } catch (error) {
    console.error(error.message);
    process.send({ status: "error", message: error.message });
    process.exitCode = 1;
    process.exit();
  }
});
