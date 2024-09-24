import data from "../data/projects";
import { randomizeArray } from "~/utils/randomize";
import { Response, Project } from "~/types";

type QueryParams = {
  random?: string;
  take?: string;
};

export default defineEventHandler((event): Response<Project[]> => {
  const query = getQuery<QueryParams>(event);

  let take: number | undefined = undefined;
  let items = data;

  if (query.take) {
    take = parseInt(query.take, 10);

    if (isNaN(take) || take <= 0) {
      take = undefined;
    }
  }

  const total = data.length;

  if (query.random == "true") {
    items = randomizeArray(data);
  }

  return {
    success: true,
    data: take ? [...items].splice(0, take) : items,
    message: "",
    total,
  };
});
