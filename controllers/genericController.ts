import type { Request, Response } from "express";
import { Model } from "mongoose";

class genericController<T> {
  model: Model<T>;

  constructor(dataModel: any) {
    this.model = dataModel;
  }

  async create(req: Request, res: Response) {
    const obj = req.body;
    try {
      const response = await this.model.create(obj);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
}
export default genericController;
