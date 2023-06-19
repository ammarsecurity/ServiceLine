//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from "axios";
import type { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
//@ts-ignore
import qs from "qs";
import type {
  GetAdminGetAllUsersQueryParams,
  GetFormGetManyFormsQueryParams,
  LoginForm,
  PersonalInformationForm,
  PersonalInformationGlobalResponse,
  PersonalInformationListPaginationResponse,
  RegisterUserForm,
  UserDtoGlobalResponse,
  UserDtoListPaginationResponse,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
  return qs.stringify(requestBody);
}

export const deleteFormDeleteFormId = (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalInformationGlobalResponse>> => {
  return Http.deleteRequest(
    template(deleteFormDeleteFormId.key, { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deleteFormDeleteFormId.key = "/Form/DeleteForm/{id}";

export const getAdminGetAllUsers = (
  queryParams?: GetAdminGetAllUsersQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<UserDtoListPaginationResponse>> => {
  return Http.getRequest(
    getAdminGetAllUsers.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
getAdminGetAllUsers.key = "/Admin/GetAllUsers";

export const getAdminGetUserByIdId = (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<UserDtoGlobalResponse>> => {
  return Http.getRequest(
    template(getAdminGetUserByIdId.key, { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
getAdminGetUserByIdId.key = "/Admin/GetUserById/{id}";

export const getFormGetFormId = (
  id: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalInformationGlobalResponse>> => {
  return Http.getRequest(
    template(getFormGetFormId.key, { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
getFormGetFormId.key = "/Form/GetForm/{id}";

export const getFormGetManyForms = (
  queryParams?: GetFormGetManyFormsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalInformationListPaginationResponse>> => {
  return Http.getRequest(
    getFormGetManyForms.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
getFormGetManyForms.key = "/Form/GetManyForms";

export const postAdminRegisterUser = (
  requestBody: RegisterUserForm,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<UserDtoGlobalResponse>> => {
  return Http.postRequest(
    postAdminRegisterUser.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminRegisterUser.key = "/Admin/RegisterUser";

export const postAuthLogin = (
  requestBody: LoginForm,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<UserDtoGlobalResponse>> => {
  return Http.postRequest(
    postAuthLogin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAuthLogin.key = "/Auth/Login";

export const postFormAddForm = (
  requestBody: PersonalInformationForm,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalInformationGlobalResponse>> => {
  return Http.postRequest(
    postFormAddForm.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postFormAddForm.key = "/Form/AddForm";

export const putFormPutFormId = (
  id: string,
  requestBody: PersonalInformationForm,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalInformationGlobalResponse>> => {
  return Http.putRequest(
    template(putFormPutFormId.key, { id }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putFormPutFormId.key = "/Form/PutForm/{id}";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json-patch+json",
    Accept: "text/plain",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "text/plain",
  },
};
