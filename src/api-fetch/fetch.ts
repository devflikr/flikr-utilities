import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { ApiFetchError, ApiFetchRejection, ApiFetchResponse, apiFetchDefaultConfig } from "./types";
import toast from "react-hot-toast";

export default function fetch<T>(url: string, config: AxiosRequestConfig = {}, data?: unknown, toastID?: string): Promise<ApiFetchResponse<T>> {
    return new Promise((resolve, reject) => {
        axios<ApiFetchResponse<T>>({
            ...apiFetchDefaultConfig,
            url,
            ...config,
            data,
        }).then(({ data }) => {
            resolve(data);
        }).catch((error: AxiosError<ApiFetchRejection>) => {
            console.error(error);
            let message = "";
            if (error.response) {
                if (error.response.data) {
                    if (error.response.data.message) {
                        message = error.response.data.message;
                        if (error.response.data.data) {
                            message += `: ${JSON.stringify(error.response.data.data)}`;
                        }
                    } else {
                        message = String(error.response.data);
                    }
                } else {
                    message = error.message;
                }
            } else {
                message = "An unknown error occurred";
            }
            const messageElement = document.createElement("span");
            messageElement.innerHTML = message;
            message = messageElement.innerText;
            message = message.replace(/\n/g, " ");
            toast.error(message, { id: toastID });
            reject(parseError(error, message));
        });
    });
}

function parseError(error: AxiosError<ApiFetchRejection>, message: string): ApiFetchError {
    const errorData = error.response?.data;
    const type = (errorData?.type || "").split("/");
    return {
        error: true,
        type: errorData?.type || "",
        status: "error",
        message,
        data: errorData?.data,
        service: type[0],
        target: type[1],
        content: type[2],
    }
}