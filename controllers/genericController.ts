import type { Request, Response } from "express";

class genericController {
  model: any;

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

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const newDoc = { ...req.body, id };

    try {
      const updated = await this.model.findOneAndReplace({ id }, newDoc, {
        new: true,
        runValidators: true,
      });

      if (!updated) {
        return res.status(404).json({ error: `Item with id ${id} not found` });
      }

      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
}
export default genericController;
