import { LitElement, html, css } from "lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { customElement, property } from "@umbraco-cms/backoffice/external/lit";
import TimeManagementContext, { TIME_MANAGEMENT_CONTEXT_TOKEN } from "../context/time.context";

@customElement('timedashboard-dashboard')
export class TimeDashboardDashboard extends UmbElementMixin(LitElement) {

    #timeContext? : TimeManagementContext;

    @property({type: String})
    time ?: string;

    @property({type: String})
    date ?: string;

    constructor() {
        super();

        this.consumeContext(TIME_MANAGEMENT_CONTEXT_TOKEN, (_instance) => {

            console.log('consume context');

            this.#timeContext = _instance;
        
            this.observe(_instance.time, (_time) => {
                this.time = _time;
            });

            this.observe(_instance.date, (_date) => {
                this.date = _date;
            });

        })
    }

    @property()
    title = 'TimeDashboard dashboard'


    getTime() {
        this.#timeContext?.getTime();
    }

    getDate() {
        this.#timeContext?.getDate();
    }

    render() {
        return html`
            <uui-box headline="${this.title}">
                dashboard content goes here

                <div>
                  <uui-button @click=${this.getTime} look="primary" color="positive" label="get time"></uui-button>
                  <h2>${this.time}</h2>
                </div>

                <div>
                  <uui-button @click=${this.getDate} look="primary" color="default" label="get date"></uui-button>
                  <h2>${this.date}</h2>
                </div>
            </uui-box>
        `
    }

    static styles = css`
        :host {
            display: block;
            padding: 20px;
        }
    `
}

export default TimeDashboardDashboard;

declare global {
    interface HtmlElementTagNameMap {
        'timedashboard-dashboard': TimeDashboardDashboard
    }
}