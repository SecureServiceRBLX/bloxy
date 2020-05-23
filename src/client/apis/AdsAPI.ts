import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { AnyIdentifier } from "../../interfaces/GeneralInterfaces";


export declare type CreateAssetAdOptions = {
    assetId: AnyIdentifier;
    name: string;
    file: unknown;
};
export declare type CreateGamePassAdOptions = {
    assetId: AnyIdentifier;
    name: string;
    file: unknown;
};
export declare type CreateGroupAdOptions = {
    assetId: AnyIdentifier;
    name: string;
    file: unknown;
};

export declare type CreateAssetAd = {};
export declare type CreateGamePassAd = {};
export declare type CreateGroupAd = {};


export default class AdsAPI extends BaseAPI {
    public client: Client;

    constructor (client: Client) {
        super({
            baseUrl: "https://ads.roblox.com/",
            client
        });
        this.client = client;
    }

    createAssetAd (options: CreateAssetAdOptions): Promise<CreateAssetAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/assets/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                }
            }
        }).then(response => response.body as CreateAssetAd);
    }

    createGamePassAd (options: CreateGamePassAdOptions): Promise<CreateGamePassAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/assets/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                }
            }
        }).then(response => response.body as CreateGamePassAd);
    }

    createGroupAd (options: CreateGroupAdOptions): Promise<CreateAssetAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/assets/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                }
            }
        }).then(response => response.body as CreateAssetAd);
    }
}
