import { ManifestMenu, ManifestMenuItem, ManifestSectionSidebarApp } from "@umbraco-cms/backoffice/extension-registry";

const sidebarAppManifest : ManifestSectionSidebarApp = {
    type: 'sectionSidebarApp',
    kind: 'menuWithEntityActions',
    alias: 'time.sidebar.app',
    name: 'Sidebar app',
    meta: {
        label: "Time",
        menu: "time.menu"
       
    },
    conditions: [
        {
            alias: "Umb.Condition.SectionAlias",
            match: "time.section"
        }
    ]
};

const menuManifest: ManifestMenu = {
    type: 'menu',
    alias: 'time.menu',
    name: 'time sidebar menu',
    meta: {
        label: 'time'
    }
}

const menuItemManifest: ManifestMenuItem = {
    type: 'menuItem',
    alias: 'time.menu.item',
    name: 'time menu item',
    meta: {
        label: 'Time zones',
        icon: 'icon-alarm-clock',
        entityType: '',
        menus: [
            'time.menu'
        ]
    }
}

export const manifests = [
    sidebarAppManifest,
    menuManifest,
    menuItemManifest
];