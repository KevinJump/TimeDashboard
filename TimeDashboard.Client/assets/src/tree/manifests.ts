import { ManifestRepository, ManifestTree, ManifestTreeItem, ManifestTreeStore, ManifestTypes } from "@umbraco-cms/backoffice/extension-registry";
import { TimeTreeRepository } from "./time-tree.repository";
import { TimeTreeStore } from "./time-tree-store";
import { TIME_TREE_ITEM_TYPE, TIME_TREE_ROOT_ITEM_TYPE } from "./enitty";

export const TIME_TREE_REPOSITORY_ALIAS = 'Time.Tree.Repository';
export const TIME_TREE_STORE_ALIAS = 'Time.Tree.Store';
export const TIME_TREE_ALIAS = 'Time.Tree';
export const TIME_TREE_MENU_ALIAS = 'time.menu';

const treeRepository : ManifestRepository = {
    type: 'repository',
    alias: TIME_TREE_REPOSITORY_ALIAS,
    name: 'Time Tree repository',
    api: TimeTreeRepository
};

const treeStore: ManifestTreeStore = {
    type: 'treeStore',
    alias: TIME_TREE_STORE_ALIAS,
    name: 'Time tree Store',
    api: TimeTreeStore
};

const tree: ManifestTree = {
    type: 'tree',
    alias: TIME_TREE_ALIAS,
    name: 'Time tree',
    meta: {
        repositoryAlias: TIME_TREE_REPOSITORY_ALIAS
    }
};

const treeItem: ManifestTreeItem = {
   type: 'treeItem',
   kind: 'unique',
   alias: 'Time.Tree.RootItem',
   name: 'Time Tree Item',
   meta: {
       entityTypes: [
           TIME_TREE_ROOT_ITEM_TYPE,
           TIME_TREE_ITEM_TYPE
       ]
   }
}


// the menu is already defined in the sidebar folder...
// const menu: ManifestMenu = {
//     type: 'menu',
//     alias: TIME_TREE_MENU_ALIAS,
//     name: 'Time Tree Menu',
//     meta: {
//         label: 'Times'
//     }
// }

const menuItem:  ManifestTypes = {
    type: 'menuItem',
    kind: 'tree',
    alias: 'Time.Tree.MenuItem',
    name: 'Time Tree Menu Item',
    weight: 400,
    meta: {
        label: 'Times',
        icon: 'icon-alarm-clock',
        entityType: TIME_TREE_ITEM_TYPE,
        menus: [TIME_TREE_MENU_ALIAS],
        treeAlias: TIME_TREE_ALIAS,
        hideTreeRoot: false
    }
};


export const manifests = [
    treeRepository, treeStore, tree, treeItem,
    //menu, 
    menuItem];