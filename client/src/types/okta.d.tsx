
/** OktaAuth TypeScript Definitions */

export interface OktaConfig {
    url: string;
    clientId?: string;
    redirectUri?: string;
    issuer?: string;
}
export interface OktaCredentials {
    username: string;
    password: string;
}
export interface OktaTransaction {
    readonly status: string;
    readonly sessionToken: string;
    cancel(): Promise<OktaTransaction>;
}
export interface OktaOAuthOptions {
    responseType: string | string[];
    sessionToken?: string;
}
export interface OktaToken {
    getWithoutPrompt(oauthOptions: OktaOAuthOptions): Promise<any>;
    getWithPopup(oauthOptions: OktaOAuthOptions): Promise<any>;
    getWithRedirect(oauthOptions: OktaOAuthOptions): void;
    parseFromUrl(): Promise<any>;
    decode(idTokenString: string): string;
    refresh(tokenToRefresh: string): Promise<string>;
    getUserInfo(accessTokenObject: string): Promise<any>;
    verify(idTokenObject: string): Promise<any>;
}
export interface OktaTokenManager {
    /** After receiving an access_token or id_token, add it to the tokenManager to manage token expiration and refresh operations.
    *	When a token is added to the tokenManager, it is automatically refreshed when it expires.
    * @param {string} key Unique key to store the token in the tokenManager. This is used later when you want to get, delete, or refresh the token.
    * @param {string} token Token object that will be added */
    add(key: string, token: string): void;
    /** Get a token that you have previously added to the tokenManager with the given key */
    get(key: string): string;
    /** Remove a token from the tokenManager with the given key. */
    remove(key: string): void;
    /** Remove all tokens from the tokenManager. */
    clear(): void;
    /** Manually refresh a token before it expires. */
    refresh(key: string): void;
    /** Subscribe to an event published by the tokenManager. */
    on(event: 'expired' | 'error' | 'refreshed', callback: () => void, context?: any): any;
    /** Unsubscribe from tokenManager events. If no callback is provided, unsubscribes all listeners from the event. */
    off(event: 'expired' | 'error' | 'refreshed', callback: () => void): any;
}
export declare class TOktaAuth {
    public readonly token: OktaToken;
    public readonly tokenManager: OktaTokenManager;
    constructor(config: OktaConfig);
    public signIn(options: OktaCredentials): Promise<OktaTransaction>;
    public signOut(): Promise<any>;
    [fn: string]: any;
}
