import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UmbStoreConnector } from "@umbraco-cms/backoffice/store";
import { UmbUniqueTreeStore } from "@umbraco-cms/backoffice/tree";
import { TimeTreeDetailModal as TimeTreeDetailModel, TimeTreeItemModel } from "./types";

export class TimeTreeStore extends UmbUniqueTreeStore {

    constructor(host: UmbControllerHostElement) {
        super(host, TIME_TREE_STORE_CONTEXT.toString());

        new UmbStoreConnector<TimeTreeItemModel, TimeTreeDetailModel>(
            host,
            this,
            TIME_TREE_STORE_CONTEXT,
            (item) => this.#createTreeMapper(item),
            (item) => this.#updateTreeItemMapper(item)
        )
    }

    #createTreeMapper = (item: TimeTreeDetailModel) => {
        const treeItem: TimeTreeItemModel = {
            unique: item.unique,
            parentUnique: null,
            name: item.name,
            entityType: item.entityType,
            isFolder: false,
            hasChildren: false
        };

        return treeItem;
    };

    #updateTreeItemMapper = (model: TimeTreeDetailModel) => {
        return {
            name: model.name
        };
    };

}


export const TIME_TREE_STORE_CONTEXT = new UmbContextToken<TimeTreeStore>(
    TimeTreeStore.name
);