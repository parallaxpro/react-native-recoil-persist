import { AtomEffect } from "recoil";
interface StorageInterface {
    getItem: (localStorageKey: string) => Promise<string | null>;
    mergeItem: (localStorageKey: string, state: any) => Promise<void>;
}
export declare const defaultStorageInterface: StorageInterface;
export declare const defaultLocalStorageKey: string;
export declare class ReactNativeRecoilPersist {
    private storageHandlers;
    private key;
    private cachedState;
    constructor(storageHandlers?: StorageInterface, key?: string);
    init: () => Promise<void>;
    private parseState;
    private setState;
    private updateState;
    persistAtom: AtomEffect<any>;
}
export {};
