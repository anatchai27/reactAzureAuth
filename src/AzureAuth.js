import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

export const adalConfig = {
  clientId: "41b6288a-ddd0-4e5c-8f13-bc745be2b1dc",
  tenant: "99b4ead1-92b0-413b-867d-9091cbe5567d",
  client_secrets: "u0v8Q~kXxUSfmri_KomUZbaf5lpk-.aDF4i9kc3v",
  endpoints: {
    api: "api://41b6288a-ddd0-4e5c-8f13-bc745be2b1dc",
  },
  redirectUri: "http://localhost:3300/",
  cacheLocation: "localStorage",
};
export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  adalConfig.endpoints.api
);
