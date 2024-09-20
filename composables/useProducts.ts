import type { Project } from "~/types";

interface UseProjects {
  getProjects: (randomize?: boolean) => Promise<Response<Project[]>>;
}

interface Response<T> {
  success: boolean;
  data?: Ref<T | null>;
  message?: string | null;
}

const useProjects = (): UseProjects => {
  const getProjects = async (randomize?: boolean): Promise<Response<Project[]>> => {
    const { data, error } = await useFetch<Project[] | null>("/api/products", {
      query: {
        random: !!randomize,
      },
    });

    if (error.value) {
      return {
        success: false,
        message: error.value.message || "An unknown error occurred",
      };
    }

    if (!data.value) {
      return {
        success: false,
        message: "No data returned from the server",
      };
    }

    return {
      success: true,
      data,
    };
  };

  return { getProjects };
};

export default useProjects;
