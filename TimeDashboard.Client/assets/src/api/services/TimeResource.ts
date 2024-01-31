/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TimeResource {

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getUmbracoTimeApiV1TimeDate(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/time/api/v1/time/date',
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getUmbracoTimeApiV1TimeTime(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/time/api/v1/time/time',
        });
    }

}
