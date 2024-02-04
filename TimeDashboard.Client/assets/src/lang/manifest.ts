import { ManifestLocalization, ManifestTypes } from "@umbraco-cms/backoffice/extension-registry";

const localizations: Array<ManifestLocalization> = [
    {
        type: 'localization',
        alias: 'time.lang.enus',
        name: 'English (US)',
        weight: 0,
        meta: {
            culture: 'en-us'
        },
        js: () => import('./files/en-us')
    },
    {
        type: 'localization',
        alias: 'time.lang.engb',
        name: 'English (UK)',
        weight: 0,
        meta: {
            culture: 'en-gb'
        },
        js: () => import('./files/en-us')
    },

]


export const manifests: Array<ManifestTypes> = [...localizations];

