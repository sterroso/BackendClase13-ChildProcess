// Global imports
import { Router } from "express";

// Local imports
import * as MathController from "../controllers/math.controller.js";

const router = Router();

router.get("/fibonacci/:n", MathController.getFibonacciNthTerm);

router.get("/factorial/:n", MathController.getFactorial);

export default router;
