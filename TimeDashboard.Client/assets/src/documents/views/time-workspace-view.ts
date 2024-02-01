import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { html, LitElement, customElement, css, state } from '@umbraco-cms/backoffice/external/lit'
import { UMB_WORKSPACE_CONTEXT, UmbVariantableWorkspaceContextInterface } from "@umbraco-cms/backoffice/workspace";

@customElement('time-document-workspace-view')
export class TimeDocumentWorkspaceElement extends UmbElementMixin(LitElement) {

    #workspaceContext? : typeof UMB_WORKSPACE_CONTEXT.TYPE;

    @state()
    pageName? : string = '';

    constructor() {
        super();

        this.consumeContext(UMB_WORKSPACE_CONTEXT, (nodeContext) => {
            var variantContext = (nodeContext as UmbVariantableWorkspaceContextInterface);
            console.log(variantContext.getName());
            
            this.pageName = variantContext.getName();

        });
    }

    render() {
        return html`

            <uui-box headline="A content app?">
                <h2>Page Name: ${this.pageName}</h2>
            </uui-box>

        `;
    }

    static styles = css`
        uui-box {
            margin: 20px;
        }
    `
}

export default TimeDocumentWorkspaceElement;