import { UMB_BLOCK_CATALOGUE_MODAL } from "@umbraco-cms/backoffice/block";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, css, customElement, html, state } from "@umbraco-cms/backoffice/external/lit";
import { 
    UMB_CODE_EDITOR_MODAL, 
    UMB_CONFIRM_MODAL,
    // UMB_DATA_TYPE_PICKER_MODAL,
    // UMB_DICTIONARY_ITEM_PICKER_MODAL,
    // UMB_DOCUMENT_TYPE_PICKER_MODAL,
    UMB_ICON_PICKER_MODAL,
    UMB_MEDIA_TREE_PICKER_MODAL,
    UMB_MODAL_MANAGER_CONTEXT, 
    // UMB_PARTIAL_VIEW_PICKER_MODAL,
    // UMB_TEMPLATE_PICKER_MODAL,
    UMB_WORKSPACE_MODAL,
    UmbModalManagerContext,
    UmbModalToken } from "@umbraco-cms/backoffice/modal";
import { extractUmbColorVariable } from "@umbraco-cms/backoffice/resources";
import { TIME_CUSTOM_MODAL } from "../../dialogs/custom-modal-token";

@customElement("dialog-examples-view")
export class TimeDialogExamplesElement extends UmbElementMixin(LitElement) {

    private _modalContext?: UmbModalManagerContext;

    constructor() {
        super();
        this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (_instance) => {
            this._modalContext = _instance;
        });
    }

    @state()
    icon = '';

    @state()
    color = ''; 


    async _OpenCustomModal() {

        const customContext = this._modalContext?.open(this, TIME_CUSTOM_MODAL, {
            data: {
                headline: 'A Custom modal',
                content: 'Some content for the custom modal'
            }
        });

        const data = await customContext?.onSubmit();

        if (!data) return;

        console.log('data', data);
    }
    
    async _OpenIconPicker() {

        const modal = UMB_ICON_PICKER_MODAL;

        const pickerContext = this._modalContext?.open(this, modal);

        const data = await pickerContext?.onSubmit();
        if (!data) return;

        console.log(data);

        if (data.color) {
            this.color = data.color as string;
        }
        this.icon = data.icon as string;
    }

    modal_names = [
        {name: 'Icon Picker', value: UMB_ICON_PICKER_MODAL},
        // {name: 'Data Type Picker', value: UMB_DATA_TYPE_PICKER_MODAL },
        {name: 'Block cataloug', value: UMB_BLOCK_CATALOGUE_MODAL }, 
        {name: 'Workspace', value: UMB_WORKSPACE_MODAL},
        // {name: 'Document Type picker', value: UMB_DOCUMENT_TYPE_PICKER_MODAL},
        {name: 'Code editor', value: UMB_CODE_EDITOR_MODAL},
        // {name: 'template picker', value: UMB_TEMPLATE_PICKER_MODAL},
        // {name: 'dictionary item picker', value: UMB_DICTIONARY_ITEM_PICKER_MODAL },
        // {name: 'Partial view picker', value: UMB_PARTIAL_VIEW_PICKER_MODAL},
        {name: 'Media tree picker', value: UMB_MEDIA_TREE_PICKER_MODAL}];


    render() {
        return html`
            <umb-body-layout header-transparent header-fit-height>
                <uui-box headline="Dialog Examples">
                    <div class="picker">
                        <div>
                            <uui-icon name="${this.icon}" style="color:var(${extractUmbColorVariable(this.color)})"></uui-icon>
                            <pre>${this.icon} ${this.color}</pre>
                        </div>
                        <div>
                            <uui-button look="primary"
                                        color="default"
                                        label="Pick an icon"
                                        @click=${this._OpenIconPicker}></uui-button>
                        </div>
                    </div>

                    <div>
                        <uui-button look="secondary"
                                    color="positive"
                                    label="custom dialog"
                                    @click=${this._OpenCustomModal}></uui-button>
                    </div>
                </uui-box>

                

                <uui-box>
                    ${this.render_modals()}
                </uui-box>

                <uui-box>
                    <uui-button 
                        color="danger" 
                        look="primary"
                        label="Confirm?" @click=${this.openConfirm}></uui-button>
                </uui-box>
            </umb-body-layout>        
        `;
    };

    async openConfirm() {

        const confirmContext= this._modalContext?.open(this, UMB_CONFIRM_MODAL, {
            data: {
                headline: `Are you sure`,
                content: 'Do you really want to do the thing here?',
                confirmLabel: 'Confim',
                color: 'danger',
            }
        });

        confirmContext?.onSubmit()
            .then(()=> {
                console.log('confirm');
            })
            .catch(() => {
                console.log('cancel');
            });
    }

    async openModal(name : UmbModalToken<object, unknown>) {

        const modalContext = this._modalContext?.open(this, name);
        const data = await modalContext?.onSubmit();

        console.log(data);
    }

    render_modals() {

        const buttons = this.modal_names.map((m) => {

            return html`
                <uui-button .label=${m.name}
                color="default" look="secondary"
                @click=${() => this.openModal(m.value)}></uui-button>
            `;

        });

        return html`
            <div class="buttons">
                ${buttons}
            </div>
        `

    }

    static styles = css`

        uui-icon {
            font-size: 25pt;
        }

        .picker {
            display: flex;
        }
        .buttons {
            display: flex;
            flex-wrap: wrap;
        }

        .buttons > uui-button {
            margin: 10px ;
        }

    `;

}

export default TimeDialogExamplesElement;


declare global {
    interface HTMLElementTagNameMap {
        'time-dialog-examples-view': TimeDialogExamplesElement
    }
}