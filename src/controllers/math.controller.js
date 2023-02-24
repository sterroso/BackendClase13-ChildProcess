// Global imports

// Local imports
import * as MathService from "../services/math.service.js";

export const getFibonacciNthTerm = async (req, res) => {
  const resultObject = {};
  let resultStatus = 200;

  const { n: nthTerm } = req.params;

  try {
    const result = await MathService.getFibonacciNthTerm(nthTerm);

    if (result.status === "success") {
      resultObject.status = "success";
      resultObject.result = result.payload;
    } else {
      resultObject.status = "error";
      resultObject.error = result.error;

      resultStatus = 400;
    }
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

    if (result.status === "success") {
      resultObject.status = "success";
      resultObject.result = result.payload;
    } else {
      resultStatus = 400;

      resultObject.status = "error";
      resultObject.result = result.error;
    }
  } catch (error) {
    resultStatus = 500;

    resultObject.status = "error";
    resultObject.message = error.message;
  }

  res.status(resultStatus).json(resultObject);
};
