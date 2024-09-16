import { Project, ProjectTypes } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    metaData: {
      title: "Newmarket Holidays | Creature Pixel",
      description: "A high-level breakdown of the Newmarket Holidays development project.",
    },
    slug: "newmarket-holidays",
    title: "Newmarket Holidays",
    type: ProjectTypes.Development,
    summary:
      "A new end-to-end system built around a centralised content management system, alongside a powerful suite of automation API endpoints and dashboards. Allowing for improved back-office and content management, automated and optimised workflows and less maintenance.",
    tileImage: {
      src: "/images/tile-image-nmh.png",
      altText: "Newmarket holidays logo",
      width: 1000,
      height: 428,
    },
    image: undefined,
    tags: ["C# ASP.NET MVC", "Umbraco", "Azure", "jQuery/AngularJs", "Bootstrap/SCSS"],
  },
  {
    id: 2,
    metaData: {
      title: "Edwards Cleaning Service | Creature Pixel",
      description: "A high-level breakdown of the Edwards Cleaning Service development project.",
    },
    slug: "edwards-cleaning-service",
    title: "Edwards Cleaning Service",
    type: ProjectTypes.Development,
    summary: "A complete company brand, plus a simple-to-use website with an integrated content management system, allowing for adaptive online growth at the same pace as business growth.",
    tileImage: {
      src: "/images/tile-image-ecs.png",
      altText: "Edwards cleaning service logo",
      width: 1000,
      height: 428,
    },
    image: undefined,
    tags: ["C# ASP.NET MVC", "Umbraco", "jQuery/AngularJs", "Bootstrap/SCSS"],
  },
  {
    id: 3,
    metaData: {
      title: "Beyond Travel Blog | Creature Pixel",
      description: "A high-level breakdown of the Beyond Travel Blog development project.",
    },
    slug: "beyond-travel-blog",
    title: "Beyond Travel Blog",
    type: ProjectTypes.Development,
    summary:
      "A complete branding refresh, in addition, to a complete site rebuild and integration directly into the primary environment. Allowing for improved content management, optimised page speeds, less maintenance and overall an improved company workflow.",
    tileImage: {
      src: "/images/tile-image-beyond.png",
      altText: "Beyone travel blog logo",
      width: 1000,
      height: 428,
    },
    image: undefined,
    tags: ["C# ASP.NET MVC", "Umbraco", "Azure", "jQuery/AngularJs", "Bootstrap/SCSS"],
  },
  {
    id: 4,
    metaData: {
      title: "Secure Cloudlink | Creature Pixel",
      description: "A high-level breakdown of the Secure Cloudlink development project.",
    },
    slug: "secure-cloudlink",
    title: "Secure Cloudlink",
    type: ProjectTypes.Development,
    summary:
      "A comprehensive suite of management tools allowing organisations to manage users, applications and security policies across multiple organisations and domains all with a customisable and seamless user experience.",
    tileImage: {
      src: "/images/tile-image-scl.png",
      altText: "Secure cloudlink logo",
      width: 1000,
      height: 428,
    },
    image: undefined,
    tags: ["C# ASP.NET MVC", "HTML5", "CSS", "Adobe CC"],
  },
  {
    id: 5,
    metaData: {
      title: "Jungle Island Adventure Golf | Creature Pixel",
      description: "A high-level breakdown of the Jungle Island Adventure Golf design project.",
    },
    slug: "jungle-island-adventure-golf",
    title: "Jungle Island Adventure Golf",
    type: ProjectTypes.Design,
    summary: "A multitude of design components and characters, complemented by a catalogue of marketing material ranging from signage and scorecards to party invites and corporate letterheads.",
    tileImage: {
      src: "/images/tile-image-hpgc.png",
      altText: "Jungle island adventure golf logo",
      width: 1000,
      height: 428,
    },
    image: undefined,
    tags: ["Adobe CC", "Graphic Design"],
  },
  {
    id: 6,
    metaData: {
      title: "Ski Focus | Creature Pixel",
      description: "A high-level breakdown of the Jungle Island Adventure Golf design project.",
    },
    slug: "ski-focus",
    title: "Ski Focus",
    type: ProjectTypes.Development,
    summary:
      "A complete site refresh and online theme built with the purpose of reusability across both internal and external facing applications, alongside a new and refreshed line of apparel-based design components.",
    tileImage: {
      src: "/images/tile-image-sf.png",
      altText: "Ski focus logo",
      width: 1000,
      height: 428,
    },
    image: undefined,
    tags: ["HTML", "CSS", "Adobe CC", "Graphic Design"],
  },
];

export default projects;
