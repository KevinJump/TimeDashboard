// import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
// import { UmbApi } from "@umbraco-cms/backoffice/extension-api";
// import { UmbTreeRepositoryBase } from "@umbraco-cms/backoffice/tree";
// import { TimeTreeItemModel, TimeTreeRootModel } from "./types";

// import { TIME_TREE_STORE_CONTEXT } from "./timetree.store";
// import { TimeTreeServerDataSource } from "./timetree.server.datasource";

// export class TimeTreeRepository
//     extends UmbTreeRepositoryBase<TimeTreeItemModel, TimeTreeRootModel>
//     implements UmbApi
// {
//     constructor(host: UmbControllerHost) {
//         super(host, TimeTreeServerDataSource, TIME_TREE_STORE_CONTEXT);
//     }

//     async requestTreeRoot() {
//         const data = {
//             id: null,
//             entityType: 'time-root',
//             name: 'time',
//             icon: 'icon-alarm-clock',
//             hasChildren: true,
//             isContainer: false,
//             isFolder: true
//         };

//         return { data };
//     }
// }
