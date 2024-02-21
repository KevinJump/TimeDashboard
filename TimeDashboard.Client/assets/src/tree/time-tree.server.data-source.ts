import { UmbTreeServerDataSourceBase } from "@umbraco-cms/backoffice/tree";
import { TimeTreeItemModel } from "./types";
import { TimeTreeItemResponseModel, TimeResource } from "../api";
import { TIME_TREE_ITEM_TYPE } from "./enitty";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";

export class TimeTreeServerDataSource extends UmbTreeServerDataSourceBase
    <TimeTreeItemResponseModel, TimeTreeItemModel> {

    constructor(host: UmbControllerHost) {
        super(host, {
            getRootItems,
            getChildrenOf,
            mapper
        });
    }
}

const getRootItems = () => TimeResource.getRoot({});

const getChildrenOf = (parentUnique: string | null) => {
    if (parentUnique == null){
        return getRootItems();
    }
    else {
        return TimeResource.getChildren({parentId: parentUnique});
    }
};

const mapper = (item: TimeTreeItemResponseModel) : TimeTreeItemModel => {
    return {
        unique: item.id,
        parentUnique: item.parent?.id || null,
        name: item.name,
        entityType: TIME_TREE_ITEM_TYPE,
        hasChildren: item.hasChildren,
        isFolder: false,
        icon: 'icon-alarm-clock'
    };
};
