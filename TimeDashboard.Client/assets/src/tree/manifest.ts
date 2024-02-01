import { ManifestTree, ManifestTreeItem } from "@umbraco-cms/backoffice/extension-registry";


const treeManifest : ManifestTree = {
    type: 'tree',
    alias: 'time.tree',
    name: 'time tree',
    meta: {
        'repositoryAlias': 'timeRepository'
    }    
}

const treeItemManifest: ManifestTreeItem = {
    type: 'treeItem',
    kind: 'entity',
    alias: 'time.tree.item',
    name: 'time tree item',
    meta: {
        entityTypes: ['time-entity-type']
    }
}

export const manifests = [treeManifest, treeItemManifest];
