import { ManifestWorkspaceAction } from "@umbraco-cms/backoffice/extension-registry";
import { TimeAction } from "./time.action";

const action : ManifestWorkspaceAction = {
    type: 'workspaceAction',
    alias: 'time.workspace.action',
    name: 'time workspace action',
    api: TimeAction,
    meta: {
        label: 'Time Action',
        look: 'primary',
        color: 'default',
    },
    conditions: [
        {
            alias: 'Umb.Condition.WorkspaceAlias',
            match: 'Umb.Workspace.Document'
        }
    ]
}

export const manifests = [action];