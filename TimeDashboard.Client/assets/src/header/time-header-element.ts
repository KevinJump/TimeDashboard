import { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { LitElement, html, customElement, css } from '@umbraco-cms/backoffice/external/lit';
import { UMB_MODAL_CONTEXT_TOKEN, UMB_MODAL_MANAGER_CONTEXT_TOKEN, UmbModalManagerContext } from '@umbraco-cms/backoffice/modal';
import { TIME_HEADER_MODAL } from './time-header-modal';

@customElement('time-header-app')
export class TimeHeaderAppElement extends UmbElementMixin(LitElement) {

    #onTime() {
        this.consumeContext(UMB_MODAL_MANAGER_CONTEXT_TOKEN, (manager) =>{
            manager.open('time.header.modal', {});
        } )
    }

    render() {
        return html`
            <uui-button @click=${this.#onTime}
                look="primary"
                label="time"
                compact>
                <uui-icon name="icon-alarm-clock"></uui-icon>
            </uui-button>
        `
    }

    static styles = css`
        uui-button {
            font-size: 18pt;
            --uui-button-background-color: transparent;
        }
    `
    
}

export default TimeHeaderAppElement;
