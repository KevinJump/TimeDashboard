import { UmbBaseController } from "@umbraco-cms/backoffice/class-api";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { TimeManagementDataSource } from "./sources/time.datasource";

export class TimeManagementRespository extends UmbBaseController {
    #timeDataSource: TimeManagementDataSource;

    constructor(host: UmbControllerHost) {
        super(host);
        this.#timeDataSource = new TimeManagementDataSource(this);

        console.log('repository constructor');
    }

    async getTime() {
        return this.#timeDataSource.getTime();
    }

    async getDate() {
        return this.#timeDataSource.getDate();
    }
}