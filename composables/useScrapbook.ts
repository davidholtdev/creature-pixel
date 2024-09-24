import type { Response, Scrapbook } from "~/types";

interface UseScrapbook {
  get: (take?: number) => Promise<Response<Scrapbook[]>>;
}

const useScrapbook = (): UseScrapbook => {
  const get = async (take?: number): Promise<Response<Scrapbook[]>> => {
    const { data, error } = await useFetch<Response<Scrapbook[]>>("/api/scrapbook", {
      query: {
        take,
      },
    });

    if (error.value) {
      return {
        success: false,
        message: error.value.message || "An unknown error occurred",
      };
    }

    if (!data.value || !data.value.data) {
      return {
        success: false,
        message: "No data returned from the server",
      };
    }

    return {
      success: true,
      data: data.value.data,
      total: data.value.total,
    };
  };

  return { get };
};

export default useScrapbook;
