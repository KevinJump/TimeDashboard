/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReferenceByIdModel } from './ReferenceByIdModel';

export type TimeTreeItemResponseModel = {
    id: string;
    parent?: ReferenceByIdModel | null;
    name: string;
    type: string;
    hasChildren: boolean;
};
