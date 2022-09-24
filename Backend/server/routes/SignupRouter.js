import { userLogin, userSignup } from "../Controller/signUpController.js";
import { Router } from "express";
const router = Router();



router.route("/create").post(userSignup);

router.route("/login").post(userLogin);

export default router;
