import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { code, platform } = request.body;
        const platformAuth = (typeof platform !== 'undefined' && platform) ? platform : 'WEB';

        const service = new AuthenticateUserService();
        try {
            const result = await service.execute(code, platformAuth);
            return response.json(result);
        } catch (err: any) {
            return response.json({ error: err.message });
        }

    }
}

export { AuthenticateUserController }