// Global imports

// Local imports
import fibonacciModel from "../models/fibonacci.model";

export const getFibonacciNthTerm = async (n) => {
  try {
    return await fibonacciModel(n);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getFactorial = async (n) => {};
