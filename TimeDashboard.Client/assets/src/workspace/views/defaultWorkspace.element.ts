import { LitElement, customElement, html } from "@umbraco-cms/backoffice/external/lit";

@customElement('time-workspace-default-view')
export class TimeDefaultWorkspaceElement extends LitElement {

    render() {
        return html`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="default view">
                    <p>My default view</p>
                </uui-box>
            </umb-body-layout>
        `
    }
}

export default TimeDefaultWorkspaceElement;

declare global {
    interface HTMLElementTagNameMap {
        'time-workspace-default-view': TimeDefaultWorkspaceElement
    }
}