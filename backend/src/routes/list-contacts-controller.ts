import db from "../db";
import { Request, Response } from "express";

export class ListContactsController {
  static async handler(req: Request, res: Response) {
    db.all(
      "SELECT id, name, email, message, createdAt FROM submissions ORDER BY createdAt DESC",
      [],
      (err, rows) => {
        if (err) {
          console.error("Error to find data from database.", err.message);
          return res.status(500).json({ message: "Error to find data from database." });
        }
        res.status(200).json(rows);
      }
    );
  }
}
