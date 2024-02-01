import { ManifestModal, ManifestWorkspace, ManifestWorkspaceAction, ManifestWorkspaceContext, ManifestWorkspaceView } from "@umbraco-cms/backoffice/extension-registry";

var workspace : ManifestWorkspace = {
    type: 'workspace',
    alias: 'time.workspace',
    name: 'time workspace',
    js: ()=> import('./workspace.element'),   
    meta: {
        entityType: 'time-workspace'
    }
};

var workspaceViews : Array<ManifestWorkspaceView> = [
    {
        type: 'workspaceView',
        alias: 'time.workspace.default',
        name: 'default view',
        js: () => import('./views/defaultWorkspace.element.js'),
        weight: 300,
        meta: {
           icon: 'icon-alarm-clock',
           pathname: 'overview',
           label: 'time'
        },
        conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias
			},
		],    
    },
    {
        type: 'workspaceView',
        alias: 'time.workspace.settings',
        name: 'setting view',
        js: ()=> import('./views/settingsWorkspace.element.js'),
        weight: 200,
        meta: {
            icon: 'icon-settings',
            pathname: 'settings',
            label: 'settings'
        },
        conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias
			},
		],
    }
];


const context : ManifestWorkspaceContext = {
    type: 'workspaceContext',
    alias: 'time.workspace.context',
    name: 'time workspace context',
    js: ()=> import('./context.js'),
}

const workspaceActions: Array<ManifestWorkspaceAction> = [];

const workspaceModals : Array<ManifestModal> = [];

export const manifests = [
    context, 
    workspace, 
    ...workspaceViews, 
    ...workspaceActions, 
    ...workspaceModals];