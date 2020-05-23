import BaseAPI from "./BaseAPI";
import Client from "../Client";


export declare type UpdateUserBirthdateOptions = GetUserBirthdate;
export declare type UpdateUserDescriptionOptions = {
    description: string;
};
export declare type UpdateUserGenderOptions = {
    gender: number;
}
export declare type SetPhoneNumberOptions = {
    countryCode: string;
    prefix: string;
    phone: string;
    password: string;
};
export declare type DeletePhoneOptions = SetPhoneNumberOptions;
export declare type ResendPhoneCodeOptions = SetPhoneNumberOptions;
export declare type VerifyPhoneOptions = SetPhoneNumberOptions;
export declare type AddStarCodeAffiliateOptions = {
    code: string;
};
export declare type UpdateUserPromotionChannelsOptions = {
    facebook: string;
    twitter: string;
    youtube: string;
    twitch: string;
    promotionChannelsVisibilityPrivacy: string;
};

export declare type GetUserBirthdate = {
    birthMonth: number;
    birthDay: number;
    birthYear: number;
};
export declare type UpdateUserBirthdate = {};
export declare type GetUserDescription = {
    description: string;
};
export declare type UpdateUserDescription = {}
export declare type GetUserGender = {
    gender: number;
}
export declare type UpdateUserGender = {}
export declare type GetConsecutiveXboxLoginDays = {
    count: number;
};
export declare type GetMetaData = {
    isAllowedNotificationsEndpointDisabled: boolean;
    isAccountSettingsPolicyEnabled: boolean;
    isPhoneNumberEnabled: boolean;
}
export declare type GetVerifiedPhoneNumber = SetPhoneNumberOptions;
export declare type SetPhoneNumber = {};
export declare type DeletePhone = {};
export declare type ResendPhoneCode = {};
export declare type VerifyPhone = {};
export declare type GetUserPromotionChannels = UpdateUserPromotionChannelsOptions;
export declare type UpdateUserPromotionChannels = {}
export declare type RemoveStarCodeAffiliate = {}
export declare type GetStarCodeAffiliate = {
    userId: number;
    name: string;
    code: string;
}
export declare type AddStarCodeAffiliate = {
    code: string;
};

export default class AccountInformationAPI extends BaseAPI {
    public client: Client;

    constructor (client: Client) {
        super({
            baseUrl: "https://accountinformation.roblox.com/",
            client
        });
        this.client = client;
    }

    getUserBirthdate (): Promise<GetUserBirthdate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate"
            }
        }).then(response => response.body as GetUserBirthdate);
    }

    updateUserBirthdate (options: UpdateUserBirthdateOptions): Promise<UpdateUserBirthdate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate",
                method: "POST",
                json: options
            }
        }).then(response => response.body as {});
    }

    getUserDescription (): Promise<GetUserDescription> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description"
            }
        }).then(response => response.body as GetUserDescription);
    }

    updateUserDescription (options: UpdateUserDescriptionOptions): Promise<UpdateUserDescription> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description",
                method: "POST",
                json: options
            }
        }).then(response => response.body as UpdateUserDescription);
    }

    getUserGender (): Promise<GetUserGender> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender"
            }
        }).then(response => response.body as GetUserGender);
    }

    updateUserGender (options: UpdateUserGenderOptions): Promise<UpdateUserGender> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender",
                method: "POST",
                json: options
            }
        }).then(response => response.body as UpdateUserGender);
    }

    getConsecutiveXboxLoginDays (): Promise<GetConsecutiveXboxLoginDays> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/xbox-live/consecutive-login-days"
            }
        }).then(response => response.body as GetConsecutiveXboxLoginDays);
    }

    getMetaData () {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/metadata"
            }
        }).then(response => response.body as GetMetaData);
    }

    getVerifiedPhoneNumber (): Promise<GetVerifiedPhoneNumber> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone"
            }
        }).then(response => response.body as GetVerifiedPhoneNumber);
    }

    setPhoneNumber (options: SetPhoneNumberOptions): Promise<SetPhoneNumber> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone",
                method: "POST",
                json: options
            }
        }).then(response => response.body as SetPhoneNumber);
    }

    deletePhone (options: DeletePhoneOptions): Promise<DeletePhone> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/delete",
                method: "POST",
                json: options
            }
        }).then(response => response.body as DeletePhone);
    }

    resendPhoneCode (options: ResendPhoneCodeOptions): Promise<ResendPhoneCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/resend",
                method: "POST",
                json: options
            }
        }).then(response => response.body as ResendPhoneCode);
    }

    verifyPhone (options: VerifyPhoneOptions): Promise<VerifyPhone> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/verify",
                method: "POST",
                json: options
            }
        }).then(response => response.body as VerifyPhone);
    }

    getUserPromotionChannels (): Promise<GetUserPromotionChannels> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels"
            }
        }).then(response => response.body as GetUserPromotionChannels);
    }

    updateUserPromotionChannels (options: UpdateUserPromotionChannelsOptions): Promise<UpdateUserPromotionChannels> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                method: "POST",
                json: options
            }
        }).then(response => response.body as UpdateUserPromotionChannels);
    }

    removeStarCodeAffiliate (): Promise<RemoveStarCodeAffiliate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "DELETE"
            }
        }).then(response => response.body as RemoveStarCodeAffiliate);
    }

    getStarCodeAffiliate (): Promise<GetStarCodeAffiliate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates"
            }
        }).then(response => response.body as GetStarCodeAffiliate);
    }

    addStarCodeAffiliate (options: AddStarCodeAffiliateOptions): Promise<AddStarCodeAffiliate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "POST",
                json: options
            }
        }).then(response => response.body as AddStarCodeAffiliate);
    }
}
