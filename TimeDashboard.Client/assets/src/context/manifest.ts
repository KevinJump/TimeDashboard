import { ManifestGlobalContext } from "@umbraco-cms/backoffice/extension-registry";

const contexts : Array<ManifestGlobalContext> = [
    {
        type: 'globalContext',
        alias: 'time.context',
        name: 'Time context',
        js: () => import('./time.context.ts')
    }
]

export const manifests = [...contexts];