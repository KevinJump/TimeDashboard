import { ManifestSection } from "@umbraco-cms/backoffice/extension-registry";


const sectionManifest : ManifestSection = {
    type: 'section',
    alias: 'time.section',
    name: 'time section',
    weight: 10,
    meta: {
        label: 'Time',
        pathname: 'time'
    }
}

export const manifests = [sectionManifest];