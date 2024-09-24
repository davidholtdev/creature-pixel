import data from "@/server/data/scapbook";
import { Response, Scrapbook } from "~/types";

type QueryParams = {
  take?: string;
};

export default defineEventHandler((event): Response<Scrapbook[]> => {
  const query = getQuery<QueryParams>(event);

  let take: number | undefined = undefined;

  if (query.take) {
    take = parseInt(query.take, 10);

    if (isNaN(take) || take <= 0) {
      take = undefined;
    }
  }

  const total = data.length;

  return {
    success: true,
    data: take ? [...data].splice(0, take) : data,
    message: "",
    total,
  };
});
