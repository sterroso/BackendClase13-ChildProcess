export const sum = async (...operands) => {
  try {
    const result = operands.reduce((acc, curr) => (acc += curr), 0);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const subtract = async (substraend, subtractor) => {
  try {
    const result = substraend - subtractor;

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const multiply = async (multiplicand, multiplicator) => {
  try {
    const result = multiplicand * multiplicator;

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const divide = async (dividend, divisor) => {
  try {
    const result = dividend / divisor;

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const modulo = async (dividend, divisor) => {
  try {
    const result = dividend % divisor;

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
