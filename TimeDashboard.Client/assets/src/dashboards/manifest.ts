import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";

const dashboards: Array<ManifestDashboard> = [
    {
        type: 'dashboard',
        name: 'timedashboard',
        alias: 'timedashboard.dashboard',
        elementName: 'timedashboard-dashboard',
        js: () => import("./dashboard.element.js"),
        weight: -10,
        meta: {
            label: 'TimeDashboard',
            pathname: 'timedashboard'
        },
        conditions: [
            {
                alias: 'Umb.Condition.SectionAlias',
                match: 'Umb.Section.Content'
            }
        ]
    }
]

export const manifests = [...dashboards];