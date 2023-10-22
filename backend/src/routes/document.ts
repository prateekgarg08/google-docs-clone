import { Router, Request, Response } from "express";
const router = Router();
import Document from "../models/document.model";

const newDocument = async (req: Request, res: Response) => {
  // console.log(req.locals.)

  const document = await Document.create({ ...req.body, createdBy: res.locals.user.userId });
  res.json({
    document: document,
  });
};

router.route("/").post(newDocument);

export default router;
