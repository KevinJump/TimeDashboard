import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { ManifestMenuItem, UmbMenuItemElement } from "@umbraco-cms/backoffice/extension-registry";
import { LitElement, customElement, html, ifDefined, property } from "@umbraco-cms/backoffice/external/lit";
import { ManifestTimeMenuItem } from "./manifest";

@customElement('time-nested-menu-item')
export class NestedMenuItemElement extends UmbElementMixin(LitElement) 
implements UmbMenuItemElement {

    @property({type: Object, attribute: false})
    manifest!: ManifestMenuItem

    render() {
        return html`
            <umb-menu-item-layout
                label=${this.manifest.meta.label || this.manifest.name}
                icon-name=${this.manifest.meta.icon}
                entity-type=${ifDefined(this.manifest.meta.entityType)}
                has-Children=${true}>${this.renderChildren()}</umb-menu-item-layout>`;
	}

    renderChildren() {
		return html` <umb-extension-slot
			type="time-menu-item"
			.filter=${(items: ManifestTimeMenuItem) => items.meta.menus.includes(this.manifest!.alias)}
    		default-element="umb-menu-item-default"></umb-extension-slot>`;
    }
}

export default NestedMenuItemElement;