import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbDataSourceResponse  } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';
import { TimeResource } from "../../api";


export interface TimeDataSource {

    getTime() : Promise<UmbDataSourceResponse<string>>;
    getDate() : Promise<UmbDataSourceResponse<string>>;

}

export class TimeManagementDataSource implements TimeDataSource {

    #host: UmbControllerHost;

    constructor(host: UmbControllerHost) {
        this.#host = host;
    }

    async getTime(): Promise<UmbDataSourceResponse<string>> {
        return await tryExecuteAndNotify(this.#host, TimeResource.getTime())
    }

    async getDate(): Promise<UmbDataSourceResponse<string>> {
        return await tryExecuteAndNotify(this.#host, TimeResource.getDate())
    }
    
}