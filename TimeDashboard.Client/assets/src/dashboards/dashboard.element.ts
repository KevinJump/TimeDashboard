import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, css , customElement, property } from "@umbraco-cms/backoffice/external/lit";
import TimeManagementContext, { TIME_MANAGEMENT_CONTEXT_TOKEN } from "../context/time.context";

@customElement('timedashboard-dashboard')
export class TimeDashboardDashboard extends UmbElementMixin(LitElement) {

    #timeContext? : TimeManagementContext;

    @property({type: String})
    time ?: string;

    @property({type: String})
    date ?: string;

    @property({type: Boolean})
    isPolling : boolean = false;

    constructor() {
        super();

        this.consumeContext(TIME_MANAGEMENT_CONTEXT_TOKEN, (_instance) => {
            this.#timeContext = _instance;

            this.observe(_instance.time, (_time) => {
                this.time = _time;
            });

            this.observe(_instance.date, (_date) => {
                this.date = _date;
            });

            this.observe(_instance.polling, (_polling) => {
                this.isPolling = _polling;
            })
        });
    }

    /**
     * @description called when the element is first connected to the dom.
     */
    connectedCallback(): void {
        super.connectedCallback();

        if (this.#timeContext != null) {
            this.#timeContext.getDateAndTime();
            this.#timeContext.togglePolling();
        }
    }

    @property()
    title = '';

    @property()
    description = 'Show the time the server thinks it is.'

    async getTime() {
        await this.#timeContext?.getTime();     
    }

    async getDate() {
        await this.#timeContext?.getDate();
    }

    toggle() {
        console.log('toggle');
        this.#timeContext?.togglePolling();
    }

    render() {
        return html`
            <uui-box headline="${this.localize.term('time_name')}">
                <div slot="header">
                    <umb-localize key="time_description"></umb-localize>
                </div>
                <div class="time-box">
                  <h2>${this.time}</h2>
                  <uui-button 
                    .disabled=${this.isPolling}
                    @click=${this.getTime} look="primary" color="positive" label="get time"></uui-button>
                </div>

                <div class="time-box">
                  <h2>${this.date}</h2>
                  <uui-button 
                    .disabled=${this.isPolling}
                    @click=${this.getDate} look="primary" color="default" label="get date"></uui-button>
                </div>

                <div>
                    <uui-toggle label="update"
                        .checked="${this.isPolling || false}"
                        @change=${this.toggle}>automatically update</uui-toggle>
                </div>
            </uui-box>
        `
    }

    static styles = css`
        :host {
            display: block;
            padding: 20px;
        }

        .time-box {
            display: flex;
            margin-bottom: 10px;
            justify-content: space-between;
        }
    `
}

export default TimeDashboardDashboard;

declare global {
    interface HtmlElementTagNameMap {
        'timedashboard-dashboard': TimeDashboardDashboard
    }
}