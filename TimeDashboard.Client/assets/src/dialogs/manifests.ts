import { ManifestModal } from "@umbraco-cms/backoffice/extension-registry";

const modals: Array<ManifestModal> = [
    {
        type: 'modal',
        alias: 'time.custom.modal',
        name: 'Time custom modal',
        js: () => import('./custom-modal-element.js')
    }
];

export const manifests = [...modals];