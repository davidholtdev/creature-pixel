import data from "@/server/data/scapbook";

type QueryParams = {
  take?: string;
};

export default defineEventHandler((event) => {
  const query = getQuery<QueryParams>(event);

  let take: number | undefined = undefined;

  if (query.take) {
    take = parseInt(query.take, 10);

    if (isNaN(take) || take <= 0) {
      take = undefined;
    }

    if (take) {
      return [...data].splice(0, take);
    }
  }

  return data;
});
