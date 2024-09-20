import products from "../data/projects";
import { randomizeArray } from "~/utils/randomize";

type QueryParams = {
  random?: string;
};

export default defineEventHandler((event) => {
  const query = getQuery<QueryParams>(event);
  if (query.random == "true") {
    return randomizeArray(products);
  }
  return products;
});
