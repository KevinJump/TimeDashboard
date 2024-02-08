/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagedEntityTreeItemResponseModel } from '../models/PagedEntityTreeItemResponseModel';

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
     * @returns PagedEntityTreeItemResponseModel Success
     * @throws ApiError
     */
    public static children({
parentId,
skip,
take = 100,
}: {
parentId?: string,
skip?: number,
take?: number,
}): CancelablePromise<PagedEntityTreeItemResponseModel> {
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
     * @returns PagedEntityTreeItemResponseModel Success
     * @throws ApiError
     */
    public static root({
skip,
take = 100,
}: {
skip?: number,
take?: number,
}): CancelablePromise<PagedEntityTreeItemResponseModel> {
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
