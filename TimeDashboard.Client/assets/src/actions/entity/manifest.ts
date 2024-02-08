import { UMB_DOCUMENT_ENTITY_TYPE, UMB_DOCUMENT_DETAIL_REPOSITORY_ALIAS } from "@umbraco-cms/backoffice/document";
import { ManifestEntityAction } from "@umbraco-cms/backoffice/extension-registry";
import { TimeEntityAction } from "./time.entity.action";

const entityAction: ManifestEntityAction = {
    type: 'entityAction',
    alias: 'time.entity.action',
    name: 'tell me the time action',
    weight: -100,
    api: TimeEntityAction,
    meta: {
        icon: 'icon-alarm-clock',
        label: 'time action',
        repositoryAlias: UMB_DOCUMENT_DETAIL_REPOSITORY_ALIAS,
        entityTypes: [UMB_DOCUMENT_ENTITY_TYPE]
    }
}

export const manifests = [entityAction];


    
