import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    register(username: string, user_password: number): Promise<import("./user.entity").User>;
}
