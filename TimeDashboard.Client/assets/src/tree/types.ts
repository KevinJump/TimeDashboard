import type { UmbUniqueTreeItemModel, UmbUniqueTreeRootModel } from "@umbraco-cms/backoffice/tree"
import { TimeTreeItemType, TimeTreeRootItemType } from "./enitty"

export interface TimeTreeItemModel extends UmbUniqueTreeItemModel {
    entityType : TimeTreeItemType
}

export interface TimeTreeRootModel extends UmbUniqueTreeRootModel {
    entityType: TimeTreeRootItemType
}



export interface TimeTreeDetailModal {
    entityType: TimeTreeItemType,
    unique: string,
    name: string,
}