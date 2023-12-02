import { AxiosRequestConfig } from "axios";
import fetch from "./fetch";
import { apiFetchDefaultConfig } from "./types";


export {
    fetch,
    apiFetchDefaultConfig,
};

export type {
    ApiFetchError,
    ApiFetchResponse,
    ApiFetchRejection,
} from "./types";

export type ApiFetchDefaultOverride = AxiosRequestConfig | ((config: AxiosRequestConfig) => AxiosRequestConfig)

export function apiFetchDefaults(override: ApiFetchDefaultOverride) {
    if (typeof override === "function") {
        override = override(apiFetchDefaultConfig);
    }
    for (const key in override) {
        apiFetchDefaultConfig[key as keyof AxiosRequestConfig] = override[key as keyof AxiosRequestConfig];
    }
    return apiFetchDefaultConfig;
}