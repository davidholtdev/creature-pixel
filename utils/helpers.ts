import { appName } from "./constants";

export const getPageTitle = (value?: string) => {
  if (!value) return appName;
  return `${value} | ${appName}`;
};

export const getBaseUrl = () => {
  const config = useRuntimeConfig();
  return config.public.baseUrl || "/";
};
