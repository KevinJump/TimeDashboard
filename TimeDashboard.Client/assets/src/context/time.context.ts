import { UmbBaseController } from "@umbraco-cms/backoffice/class-api";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbStringState } from "@umbraco-cms/backoffice/observable-api";

import { TimeManagementRespository } from "../repository/time.repository";

export class TimeManagementContext extends UmbBaseController {
   
    #repository: TimeManagementRespository;

    #time = new UmbStringState("unknown");
    public readonly time = this.#time.asObservable();

    #date = new UmbStringState("unknown");
    public readonly date = this.#date.asObservable();
    
    constructor(host: UmbControllerHost) {
        super(host);

        this.provideContext(TIME_MANAGEMENT_CONTEXT_TOKEN, this);
        this.#repository = new TimeManagementRespository(this);
    }

    async getTime() {
        const {data} = await this.#repository.getTime();

        if (data) {
            this.#time.setValue(data);
        }
    }

    async getDate() {
        const {data} = await this.#repository.getDate();

        if (data) {
            this.#date.setValue(data);
        }
    }

}

export default TimeManagementContext;

export const TIME_MANAGEMENT_CONTEXT_TOKEN = 
    new UmbContextToken<TimeManagementContext>(TimeManagementContext.name);