import { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/extension-registry";
import { ManifestPropertyEditorSchema } from "@umbraco-cms/backoffice/extension-registry";

export const styledTextSchema : ManifestPropertyEditorSchema = {
    type: 'propertyEditorSchema',
    name: 'Styled textbox',
    alias: 'styled.textbox',
    meta: {
        defaultPropertyEditorUiAlias: 'styled.textbox.ui',
        settings: {
            properties: [
                {
                    alias: 'styleValue',
                    label: 'Styles',
                    description: 'Styles to apply to the box',
                    propertyEditorUiAlias: 'Umb.PropertyEditorUi.TextArea'
                }
            ],
            defaultData: [
                {
                    alias: 'styleValue',
                    value: 'font-size: 20px;\r\nborder:none; border-bottom: 1px solid #444;'
                }
            ]
        }
    }
};

const styledTextUi : ManifestPropertyEditorUi = {
    type: 'propertyEditorUi',
    alias: 'styled.textbox.ui',
    name: 'styled textbox',
    js: () => import('./styledtext.ui.element.js'),
    elementName: 'styled-text',
    meta: {
        label: 'Styled textbox',
        icon: 'icon-brush',
        group: 'common',
        propertyEditorSchemaAlias: 'styled.textbox',        
    }
}

export const manifests = [styledTextSchema, styledTextUi];