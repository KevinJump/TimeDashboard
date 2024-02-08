import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UMB_DOCUMENT_ENTITY_TYPE, UmbDocumentItemRepository } from "@umbraco-cms/backoffice/document";
import { UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationContext } from "@umbraco-cms/backoffice/notification";

export class TimeEntityAction extends UmbEntityActionBase<UmbDocumentItemRepository> {
    #notificationContext? : UmbNotificationContext;

    constructor(host: UmbControllerHostElement, 
        repositoryAlias: string, unique: string) {
            super(host, repositoryAlias, unique, UMB_DOCUMENT_ENTITY_TYPE)

            this.consumeContext(UMB_NOTIFICATION_CONTEXT, (instance) => {
                this.#notificationContext = instance;
            });
        }
    
    async execute() {
        this.#notificationContext?.peek('warning', {
            data: {
                headline: 'A thing has happened !',
                message: 'What that thing is? only time will tell.'
            }
        });
    }

}