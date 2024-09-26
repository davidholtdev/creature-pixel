import { appName } from "./constants";

export const getPageTitle = (value?: string) => {
  if (!value) return appName;
  return `${value} | ${appName}`;
};

export const getBaseUrl = () => {
  return process.env.NODE_ENV === "production" ? "/creature-pixel/" : "/";
};
