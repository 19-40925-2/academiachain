import { ApplicationService } from './application.service';
import { ApplicationEntity } from './application.entity';
export declare class ApplicationController {
    private readonly applicationService;
    constructor(applicationService: ApplicationService);
    createPost(studentUsername: string, positionId: number): Promise<ApplicationEntity>;
    getAllApplications(): Promise<ApplicationEntity[]>;
    blockStudent(username: number): Promise<ApplicationEntity>;
}
