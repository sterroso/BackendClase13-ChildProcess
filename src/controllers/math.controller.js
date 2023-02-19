// Global imports

// Local imports
import * as MathService from "../services/math.service";

export const getFibonacciNthTerm = async (req, res) => {
  const resultObject = {};
  let resultStatus = 200;

  const { n: nthTerm } = req.params;

  try {
    const result = await MathService.getFibonacciNthTerm(nthTerm);

    resultObject.status = "success";
    resultObject.result = result;
  } catch (error) {
    resultStatus = 500;

    resultObject.status = "error";
    resultObject.message = error.message;
  }

  res.status(resultStatus).json(resultObject);
};

export const getFactorial = async (req, res) => {
  const resultObject = {};
  let resultStatus = 200;

  const { n: nthTerm } = req.params;

  try {
    const result = await MathService.getFactorial(nthTerm);

    resultObject.status = "success";
    resultObject.result = result;
  } catch (error) {
    resultStatus = 500;

    resultObject.status = "error";
    resultObject.message = error.message;
  }

  res.status(resultStatus).json(resultObject);
};
