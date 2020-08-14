import { Request, Response } from "express";
import { User } from "../models/user.model";

export class UserController {
  public index(req: Request, res: Response) {
    User.findAll<User>({})
      .then((users: Array<User>) => res.json(users))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    User.create<User>(req.body)
      .then((user: User) => res.json(user))
      .catch((err: Error) => res.status(500).json(err))
  }
}