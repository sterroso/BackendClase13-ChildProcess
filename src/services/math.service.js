// Global imports
import { fork } from "child_process";

export const getFibonacciNthTerm = (n) => {
  if (isNaN(Number(n))) throw new Error("Invalid input");

  return new Promise((resolve, reject) => {
    const child = fork("./src/workers/fibonacci.worker.js");
    child.send({ n: Number(n) });
    child.on("message", (data) => {
      resolve(data);
    });
    child.on("error", (error) => {
      reject(error);
    });
  });
};

export const getFactorial = (n) => {
  if (isNaN(Number(n))) throw new Error("Invalid input");

  return new Promise((resolve, reject) => {
    const child = fork("./src/workers/factorial.worker.js");
    child.send({ n: Number(n) });
    child.on("message", (data) => {
      resolve(data);
    });
    child.on("error", (error) => {
      reject(error);
    });
  });
};
