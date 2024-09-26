import { getBaseUrl } from "~/utils/helpers";
import type { Image, BaseScrapbook, Scrapbook } from "~/types";

enum FilePathSuffix {
  Full = "full",
  Tile = "tile",
}

const basePath: string = `/images/scrapbook`;

const baseItems: BaseScrapbook[] = [
  {
    slug: "deer-skull",
    name: "Deer skull",
  },
  {
    slug: "diamond-skull",
    name: "Diamond skull",
  },
  {
    slug: "double-koi",
    name: "Double koi",
  },
  {
    slug: "koi",
    name: "Koi",
  },
  {
    slug: "native-skull",
    name: "Native skull",
  },
  {
    slug: "pink-skull",
    name: "Pink skull",
  },
  {
    slug: "pistol",
    name: "Pistol",
  },
  {
    slug: "ram-skull",
    name: "Ram skull",
  },
  {
    slug: "vans",
    name: "Vans",
  },
];

const generateImage = (baseItem: BaseScrapbook, pathSuffix: FilePathSuffix): Image => {
  return {
    src: `${basePath}/${baseItem.slug}-${pathSuffix}.jpg`,
    altText: `${baseItem.name} scrapbook illustration`,
  };
};

const generateItem = (item: BaseScrapbook): Scrapbook => {
  return {
    ...item,
    tileImage: generateImage(item, FilePathSuffix.Tile),
    image: generateImage(item, FilePathSuffix.Full),
  };
};

const items: Scrapbook[] = baseItems.map((x) => generateItem(x));

export default items;
