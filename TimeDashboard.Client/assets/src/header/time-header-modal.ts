import { UmbModalBaseElement, UmbModalToken } from "@umbraco-cms/backoffice/modal";
import { html } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('time-header-modal')
export class TimeHeaderModalElement extends UmbModalBaseElement {

    #handleClose() {
		this.modalContext?.reject();
    }

    render() {
        return html`
            <uui-dialog-layout class="uui-text"
                headline="a modal dialog box">
                <p>Some modal things go here</p>

                <uui-button slot="actions" id="close" label="Close"
                    look='primary'  color='danger'
                     @click="${this.#handleClose}">Close</uui-button>

            </uui-dialog-layout>
        `;
    }
}

export default TimeHeaderModalElement;