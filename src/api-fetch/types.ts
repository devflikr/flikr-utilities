import { AxiosRequestConfig } from "axios";

export type ApiFetchResponse<T> = {
    success: true;
    status: "success";
    message: string;
    data?: T;
}

export type ApiFetchRejection = {
    error: true;
    type: string;
    status: "error";
    message: string;
    data?: unknown;
}

export type ApiFetchError = {
    error: true;
    type: string;
    status: "error";
    message: string;
    data?: unknown;
    service?: string;
    target?: string;
    content?: string;
}

export const apiFetchDefaultConfig: AxiosRequestConfig = {
    baseURL: "https://api.devflikr.com",
    method: "POST",
    responseType: "json",
    withCredentials: true,
}