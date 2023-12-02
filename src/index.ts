import * as apiFetch from "./api-fetch";
import { fetch, apiFetchDefaults, apiFetchDefaultConfig } from "./api-fetch";
import uuid from "./uuid";
import twcls from "./twcls";

const Utils = {
    uuid,
    fetch,
    twcls,
    Crypto,
    apiFetch,
    apiFetchDefaults,
    apiFetchDefaultConfig,
};

export default Utils;

export {
    uuid,
    fetch,
    twcls,
    apiFetch,
    apiFetchDefaults,
    apiFetchDefaultConfig,
};

export type {
    ApiFetchError,
    ApiFetchResponse,
    ApiFetchRejection,
    ApiFetchDefaultOverride,
} from "./api-fetch";