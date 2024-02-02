import { ManifestHeaderApp, ManifestModal } from "@umbraco-cms/backoffice/extension-registry";

const header : ManifestHeaderApp = {

    type: 'headerApp',
    alias: 'time.header.app',   
    name: 'time app',
    js: () => import('./time-header-element.js'),
    weight: 850,
    meta: {
        label: 'time',
        icon: 'icon-alarm-clock',
        pathname: 'time'
    }
};

const modal: ManifestModal = {
    type: 'modal',
    alias: 'time.header.modal',
    name: 'time header modal',
    js: () => import('./time-header-modal.js'),
}

export const manifests = [header, modal];