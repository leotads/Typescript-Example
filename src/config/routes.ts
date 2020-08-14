import { Request, Response } from "express";
import { UserController } from "../app/controllers/user.controller";

export class Routes {
  public usersController: UserController = new UserController();

  public routes(app): void {
    app.route("/user")
      .post(this.usersController.create);
    
    app.route("/users").get(this.usersController.index);
  }
}