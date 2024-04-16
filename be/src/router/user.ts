import { Router } from "express";

const user = Router();

user.route("/").post();

export { user };
