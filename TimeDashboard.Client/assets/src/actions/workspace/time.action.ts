
import { UmbWorkspaceActionBase } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentWorkspaceContext } from "@umbraco-cms/backoffice/document";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationContext } from "@umbraco-cms/backoffice/notification";

export class TimeAction extends UmbWorkspaceActionBase<UmbDocumentWorkspaceContext> {

    #notificationContext? : UmbNotificationContext;

    constructor(host: UmbControllerHost) {
        super(host);

        this.consumeContext(UMB_NOTIFICATION_CONTEXT, (instance) => {
            this.#notificationContext = instance;
        })
    }

    async execute(): Promise<void> {
        console.log('action execute');
    
        // open a sidebar 
        // open a dialog
        // do something funcky 

        this.#notificationContext?.peek('warning', {
            data: {
                headline: 'A thing has happened !',
                message: 'What that thing is? only time will tell.'
            }
        } )
        
    }
}