import { UmbTreeRepositoryBase } from "@umbraco-cms/backoffice/tree";
import { TimeTreeItemModel, TimeTreeRootModel } from "./types";
import { UmbApi } from "@umbraco-cms/backoffice/extension-api";
import { TIME_TREE_ROOT_ITEM_TYPE } from "./enitty";
import { TimeTreeServerDataSource } from "./time-tree.server.data-source";
import { TIME_TREE_STORE_CONTEXT } from "./time-tree-store";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";

export class TimeTreeRepository extends 
    UmbTreeRepositoryBase<TimeTreeItemModel, TimeTreeRootModel>
    implements UmbApi
{
    constructor(host: UmbControllerHost) {
        super(host, TimeTreeServerDataSource, TIME_TREE_STORE_CONTEXT);
    }

    async requestTreeRoot() {

        const data: TimeTreeRootModel = {
            unique: null,
            entityType: TIME_TREE_ROOT_ITEM_TYPE,
            name: 'time',
            hasChildren: true,
            isFolder: true,
        };

        return { data };
        
    }
}