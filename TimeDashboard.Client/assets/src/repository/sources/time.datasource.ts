import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { DataSourceResponse  } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';
import { TimeResource } from "../../api";


export interface TimeDataSource {

    getTime() : Promise<DataSourceResponse<string>>;
    getDate() : Promise<DataSourceResponse<string>>;

}

export class TimeManagementDataSource implements TimeDataSource {

    #host: UmbControllerHost;

    constructor(host: UmbControllerHost) {
        this.#host = host;
    }

    async getTime(): Promise<DataSourceResponse<string>> {
        return await tryExecuteAndNotify(this.#host, TimeResource.getDate())
    }

    async getDate(): Promise<DataSourceResponse<string>> {
        return await tryExecuteAndNotify(this.#host, TimeResource.getTime())
    }
    
}