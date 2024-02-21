/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedTimeTreeItemResponseModel } from '../models/PagedTimeTreeItemResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TimeResource {

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getDate(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/time/api/v1/time/date',
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getTime(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/time/api/v1/time/time',
        });
    }

    /**
     * @returns PagedTimeTreeItemResponseModel Success
     * @throws ApiError
     */
    public static getChildren({
parentId,
skip,
take = 100,
}: {
parentId?: string,
skip?: number,
take?: number,
}): CancelablePromise<PagedTimeTreeItemResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/time/api/v1/tree',
            query: {
                'parentId': parentId,
                'skip': skip,
                'take': take,
            },
        });
    }

    /**
     * @returns PagedTimeTreeItemResponseModel Success
     * @throws ApiError
     */
    public static getRoot({
skip,
take = 100,
}: {
skip?: number,
take?: number,
}): CancelablePromise<PagedTimeTreeItemResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/time/api/v1/tree/root',
            query: {
                'skip': skip,
                'take': take,
            },
        });
    }

}
