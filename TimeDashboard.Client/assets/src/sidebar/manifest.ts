import { ManifestSectionSidebarApp } from "@umbraco-cms/backoffice/extension-registry";

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

export const manifests = [sidebarAppManifest];