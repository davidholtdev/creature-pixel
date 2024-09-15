import type { Project } from "~/types";

interface UseProjects {
  getProjects: () => Promise<Response<Project[]>>;
}

interface Response<T> {
  success: boolean;
  data?: Ref<T | null>;
  message?: string | null;
}

const useProjects = (): UseProjects => {
  const getProjects = async (): Promise<Response<Project[]>> => {
    try {
      const { data, error: fetchError } = await useFetch<Project[] | null>("/api/products");

      if (fetchError.value) {
        throw new Error(fetchError.value.message || "An unknown error occurred");
      }

      return {
        success: true,
        data,
      };
    } catch (err) {
      return {
        success: false,
        message: err instanceof Error ? err.message : "An unknown error occurred",
      };
    }
  };

  return {
    getProjects,
  };
};

export default useProjects;
