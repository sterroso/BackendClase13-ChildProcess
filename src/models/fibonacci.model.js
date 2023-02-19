const fibonacci = (n) => {
  if (n < 2) return n;

  let a = 0;

  let b = 1;

  let j;

  for (let i = 1; i <= n; i++) {
    j = a + b;
    b = j;
    a = b;
  }

  return b;
};

export default fibonacci;
