import React from "react";
import { ReactNativeRecoilPersist } from "./";
declare type Props = {
    store: ReactNativeRecoilPersist;
    fallback?: React.ReactNode;
    onInit?: () => void;
};
export declare const ReactNativeRecoilPersistGate: React.FC<Props>;
export {};
