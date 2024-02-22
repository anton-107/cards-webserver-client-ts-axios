/**
 * Cards API
 * The api to manage cards
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import type { RequestArgs } from './base';
import { BaseAPI } from './base';
/**
 *
 * @export
 * @interface CreateCardDto
 */
export interface CreateCardDto {
    /**
     *
     * @type {string}
     * @memberof CreateCardDto
     */
    'spaceID': string;
    /**
     *
     * @type {string}
     * @memberof CreateCardDto
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof CreateCardDto
     */
    'parentCardID': string;
    /**
     *
     * @type {object}
     * @memberof CreateCardDto
     */
    'attributes': object;
}
/**
 *
 * @export
 * @interface UpdateCardAttributesDto
 */
export interface UpdateCardAttributesDto {
    /**
     *
     * @type {object}
     * @memberof UpdateCardAttributesDto
     */
    'attributes': object;
}
/**
 *
 * @export
 * @interface UpdateCardDto
 */
export interface UpdateCardDto {
    /**
     *
     * @type {string}
     * @memberof UpdateCardDto
     */
    'spaceID': string;
    /**
     *
     * @type {string}
     * @memberof UpdateCardDto
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof UpdateCardDto
     */
    'parentCardID': string;
    /**
     *
     * @type {object}
     * @memberof UpdateCardDto
     */
    'attributes': object;
}
/**
 * CardsAuthApi - axios parameter creator
 * @export
 */
export declare const CardsAuthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CardsAuthApi - functional programming interface
 * @export
 */
export declare const CardsAuthApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * CardsAuthApi - factory interface
 * @export
 */
export declare const CardsAuthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authControllerSignIn(options?: RawAxiosRequestConfig): AxiosPromise<void>;
};
/**
 * CardsAuthApi - object-oriented interface
 * @export
 * @class CardsAuthApi
 * @extends {BaseAPI}
 */
export declare class CardsAuthApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsAuthApi
     */
    authControllerSignIn(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
/**
 * CardsCRUDApi - axios parameter creator
 * @export
 */
export declare const CardsCRUDApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} type
     * @param {CreateCardDto} createCardDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerCreate: (type: string, createCardDto: CreateCardDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindAll: (type: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} type
     * @param {string} parentID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindChildren: (type: string, parentID: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindOne: (type: string, id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerRemove: (type: string, id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {UpdateCardDto} updateCardDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerUpdate: (type: string, id: string, updateCardDto: UpdateCardDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {UpdateCardAttributesDto} updateCardAttributesDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerUpdateCardAttributes: (type: string, id: string, updateCardAttributesDto: UpdateCardAttributesDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CardsCRUDApi - functional programming interface
 * @export
 */
export declare const CardsCRUDApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} type
     * @param {CreateCardDto} createCardDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerCreate(type: string, createCardDto: CreateCardDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @param {string} type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindAll(type: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @param {string} type
     * @param {string} parentID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindChildren(type: string, parentID: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindOne(type: string, id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerRemove(type: string, id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {UpdateCardDto} updateCardDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerUpdate(type: string, id: string, updateCardDto: UpdateCardDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @param {string} type
     * @param {string} id
     * @param {UpdateCardAttributesDto} updateCardAttributesDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerUpdateCardAttributes(type: string, id: string, updateCardAttributesDto: UpdateCardAttributesDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * CardsCRUDApi - factory interface
 * @export
 */
export declare const CardsCRUDApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {CardsCRUDApiCardControllerCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerCreate(requestParameters: CardsCRUDApiCardControllerCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @param {CardsCRUDApiCardControllerFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindAll(requestParameters: CardsCRUDApiCardControllerFindAllRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @param {CardsCRUDApiCardControllerFindChildrenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindChildren(requestParameters: CardsCRUDApiCardControllerFindChildrenRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @param {CardsCRUDApiCardControllerFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerFindOne(requestParameters: CardsCRUDApiCardControllerFindOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @param {CardsCRUDApiCardControllerRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerRemove(requestParameters: CardsCRUDApiCardControllerRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @param {CardsCRUDApiCardControllerUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerUpdate(requestParameters: CardsCRUDApiCardControllerUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @param {CardsCRUDApiCardControllerUpdateCardAttributesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cardControllerUpdateCardAttributes(requestParameters: CardsCRUDApiCardControllerUpdateCardAttributesRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
};
/**
 * Request parameters for cardControllerCreate operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerCreateRequest
 */
export interface CardsCRUDApiCardControllerCreateRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerCreate
     */
    readonly type: string;
    /**
     *
     * @type {CreateCardDto}
     * @memberof CardsCRUDApiCardControllerCreate
     */
    readonly createCardDto: CreateCardDto;
}
/**
 * Request parameters for cardControllerFindAll operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerFindAllRequest
 */
export interface CardsCRUDApiCardControllerFindAllRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerFindAll
     */
    readonly type: string;
}
/**
 * Request parameters for cardControllerFindChildren operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerFindChildrenRequest
 */
export interface CardsCRUDApiCardControllerFindChildrenRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerFindChildren
     */
    readonly type: string;
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerFindChildren
     */
    readonly parentID: string;
}
/**
 * Request parameters for cardControllerFindOne operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerFindOneRequest
 */
export interface CardsCRUDApiCardControllerFindOneRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerFindOne
     */
    readonly type: string;
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerFindOne
     */
    readonly id: string;
}
/**
 * Request parameters for cardControllerRemove operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerRemoveRequest
 */
export interface CardsCRUDApiCardControllerRemoveRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerRemove
     */
    readonly type: string;
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerRemove
     */
    readonly id: string;
}
/**
 * Request parameters for cardControllerUpdate operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerUpdateRequest
 */
export interface CardsCRUDApiCardControllerUpdateRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerUpdate
     */
    readonly type: string;
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerUpdate
     */
    readonly id: string;
    /**
     *
     * @type {UpdateCardDto}
     * @memberof CardsCRUDApiCardControllerUpdate
     */
    readonly updateCardDto: UpdateCardDto;
}
/**
 * Request parameters for cardControllerUpdateCardAttributes operation in CardsCRUDApi.
 * @export
 * @interface CardsCRUDApiCardControllerUpdateCardAttributesRequest
 */
export interface CardsCRUDApiCardControllerUpdateCardAttributesRequest {
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerUpdateCardAttributes
     */
    readonly type: string;
    /**
     *
     * @type {string}
     * @memberof CardsCRUDApiCardControllerUpdateCardAttributes
     */
    readonly id: string;
    /**
     *
     * @type {UpdateCardAttributesDto}
     * @memberof CardsCRUDApiCardControllerUpdateCardAttributes
     */
    readonly updateCardAttributesDto: UpdateCardAttributesDto;
}
/**
 * CardsCRUDApi - object-oriented interface
 * @export
 * @class CardsCRUDApi
 * @extends {BaseAPI}
 */
export declare class CardsCRUDApi extends BaseAPI {
    /**
     *
     * @param {CardsCRUDApiCardControllerCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerCreate(requestParameters: CardsCRUDApiCardControllerCreateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @param {CardsCRUDApiCardControllerFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerFindAll(requestParameters: CardsCRUDApiCardControllerFindAllRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @param {CardsCRUDApiCardControllerFindChildrenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerFindChildren(requestParameters: CardsCRUDApiCardControllerFindChildrenRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @param {CardsCRUDApiCardControllerFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerFindOne(requestParameters: CardsCRUDApiCardControllerFindOneRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @param {CardsCRUDApiCardControllerRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerRemove(requestParameters: CardsCRUDApiCardControllerRemoveRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @param {CardsCRUDApiCardControllerUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerUpdate(requestParameters: CardsCRUDApiCardControllerUpdateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @param {CardsCRUDApiCardControllerUpdateCardAttributesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsCRUDApi
     */
    cardControllerUpdateCardAttributes(requestParameters: CardsCRUDApiCardControllerUpdateCardAttributesRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
