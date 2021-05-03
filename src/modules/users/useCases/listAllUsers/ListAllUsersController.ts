import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const allUsers = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.send(allUsers);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ListAllUsersController };
