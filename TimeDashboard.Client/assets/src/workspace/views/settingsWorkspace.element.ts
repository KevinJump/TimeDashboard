import { LitElement, customElement, html } from "@umbraco-cms/backoffice/external/lit";

@customElement('time-workspace-settings-view')
export class TimeSettingsWorkspaceElement extends LitElement {
    
    render() {
        return html`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="settings view"></uui-box>
            </umb-body-layout>
        `
    }

}

export default TimeSettingsWorkspaceElement;

declare global {
    interface HTMLElementTagNameMap {
        'time-workspace-settings-view': TimeSettingsWorkspaceElement
    }
}