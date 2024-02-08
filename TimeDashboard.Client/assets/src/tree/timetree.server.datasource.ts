// import { UmbTreeServerDataSourceBase } from "@umbraco-cms/backoffice/tree";
// import { TimeResource } from "../api";

// import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
// import type { TimeTreeItemModel } from "./types";
// import type { EntityTreeItemResponseModel } from "@umbraco-cms/backoffice/external/backend-api";


// export class TimeTreeServerDataSource extends UmbTreeServerDataSourceBase
//     <EntityTreeItemResponseModel, TimeTreeItemModel>
// {
//     constructor(host: UmbControllerHost) {
//         super(host, {
//             getRootItems,
//             getChildrenOf,
//             mapper
//         });
//     }
// }

// // eslint-disable-next-line local-rules/no-direct-api-import
// const getRootItems = () => TimeResource.root({});

// const getChildrenOf = (parentUnique: string | null) => {
//     if (parentUnique === null) {
//         return getRootItems();
//     }
//     else {
//         // eslint-disable-next-line local-rules/no-direct-api-import
//         return TimeResource.children({
//             parentId: parentUnique
//         });
//     }
// }
   

// const mapper = (item: EntityTreeItemResponseModel): TimeTreeItemModel => {
//     return {
//         id: item.id,
//         parentId: item.parentId || null,
//         name: item.name,
//         entityType: 'time-item',
//         hasChildren: item.hasChildren,
//         isContainer: item.isContainer,
//         isFolder: false
//     };
// };