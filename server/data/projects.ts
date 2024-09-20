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
      src: "/images/projects/newmarket-holidays/tile-image.png",
      altText: "Newmarket holidays logo",
      width: 1000,
      height: 428,
    },
    image: {
      src: "/images/projects/newmarket-holidays/template-1.jpg",
      altText: "",
      width: 2000,
      height: 1125,
    },
    tags: ["C# ASP.NET MVC", "Umbraco", "Azure", "jQuery/AngularJs", "Bootstrap/SCSS"],
    components: [
      {
        content: [
          '<p><span class="h1">Newmarket Holidays is one of UK&#39;s largest independently owned specialist escorted tour operators.</span></p>',
          "<p>When I started my journey with Newmarket Holidays the company was at a point in its lifecycle where it was time for a complete branding and technology refresh. I joined a small team and together we would be tasked with designing, architecting and implementing a completely new end-to-end system all powered via a centralised content management system. My initial responsibility was to design, wireframe and build the front-end interfaces ensuring that any new feature adhered to business guidelines, although this would quickly evolve to me playing a prominent full-stack role.</p>",
        ],
        images: [
          {
            src: "/images/projects/newmarket-holidays/template-4.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">Passing of the mantle</span></h2>',
          "<p>It was not long into the project and for a variety of reasons (including the pandemic) that we would see our team drastically reduce. It would become my responsibility to solely manage and maintain the full system from this point forward. This would include not only maintaining the front-end but I would now be tasked with implementing end-to-end solutions ranging from new features, DevOps, database augmentations (EF code-first migrations), API integrations, automation and much more.</p>",
        ],
        images: [
          {
            src: "/images/projects/newmarket-holidays/template-2.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/newmarket-holidays/template-3.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">Features</span></h2>',
          "<p>Due to the size of the system, it is honestly hard to cover every project or feature I worked on over the last 4+ years. From feature updates and booking system augmentations, automation and API management to implementing a full net promoter score solution with reporting, I have worked on just about every aspect of the system.</p>",
        ],
        images: [
          {
            src: "/images/projects/newmarket-holidays/template-5.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/newmarket-holidays/template-6.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          "<p>A new end-to-end system built around a centralised content management system, alongside a powerful suite of automation API endpoints and dashboards. Allowing for improved back-office and content management, automated and optimised workflows and less maintenance.</p>",
        ],
        link: {
          name: "View the site",
          url: "https://www.newmarketholidays.co.uk",
          target: "_black",
        },
      },
    ],
  },
  {
    id: 2,
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
      src: "/images/projects/beyond-travel-blog/tile-image.png",
      altText: "Beyone travel blog logo",
      width: 1000,
      height: 428,
    },
    image: {
      src: "/images/projects/beyond-travel-blog/template-1.jpg",
      altText: "",
      width: 2000,
      height: 1125,
    },
    tags: ["C# ASP.NET MVC", "Umbraco", "Azure", "jQuery/AngularJs", "Bootstrap/SCSS"],
    components: [
      {
        content: [
          '<p><span class="h1">The beyond travel blog is a place showcasing curated edits of the world&#39;s most beautiful destinations, travel tips, and inspiration.</span></p>',
          "<p>Newmarket Holidays wanted to further expand their plethora of rich geographical-based content by providing a dedicated area where their writers could tell stories and express themselves in more creative ways.</p>",
        ],
        images: [
          {
            src: "/images/projects/beyond-travel-blog/template-3.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">Great, but how did the website come about?</span></h2>',
          "<p>Newmarket Holidays already had a pre-existing blog website which was hosted independently of their standard website environment. But for the purpose of ease of content management, reduction in costs and maintenance, fewer security risks and better capitalisation on SEO gains, the requirement arose to move the blog directly to the main website. While this was the primary goal, It was also time for the blog to receive a much-needed branding and UI/UX refresh. I had full creative control over this process but liaised closely with the content writers themselves to ensure that the final site was tailored to their needs and provided them with an environment they felt part of and would be proud to showcase their work on.</p>",
        ],
        images: [
          {
            src: "/images/projects/beyond-travel-blog/template-2.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">WordPress to Umbraco</span></h2>',
          "<p>The aim was to rebuild the existing WordPress blog website along with its features and integrate it directly into the primary Umbraco CMS. By doing this the company could ensure that all content was housed in one location, and that content could be re-used and linked to in multiple places allowing them to capitalize on content strategies.</p>",
          "<p>The website itself needed to sit within the current CMS but act much like a standalone website. As the blog provided a completely different look and feel it was important the implementation was done in such a way that they behave independently of each other. This resulted in amendments to the core site routing configurations so that each site respected its own global error handling and page not found requests.</p>",
          "<p>To replicate the majority of the WordPress blog features as close as possible to a .NET environment I had to utilise many different approaches ranging from Lucene/Examine searches, custom routing and route hijacking to the creation of virtual pages for tagging and category searches. This resulted in a fluid user experience that closely matched the pre-existing site but with no dependencies on external sources/libraries.</p>",
          "<p>The blog itself was built from the ground up with optimisation in mind. We wanted to ensure that the overall page-by-page resource sizes were kept as minimal as possible, with extra attention being given to managing DOM size, reducing unnecessary dependencies and image size optimisation. The outcome far exceeded expectations with massive improvements to page speed resulting in consistent scores ranging from 85-100 on mobile and 90-100 on desktop.</p>",
        ],
        images: [
          {
            src: "/images/projects/beyond-travel-blog/template-4.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          "<p>A complete branding refresh, in addition, to a complete site rebuild and integration directly into the primary environment. Allowing for improved content management, optimised page speeds, less maintenance and overall an improved company workflow.</p>",
        ],
        link: {
          name: "View the site",
          url: "https://www.newmarketholidays.co.uk/blog",
          target: "_black",
        },
      },
    ],
  },
  {
    id: 3,
    metaData: {
      title: "Edwards Cleaning Service | Creature Pixel",
      description: "A high-level breakdown of the Edwards Cleaning Service development project.",
    },
    slug: "edwards-cleaning-service",
    title: "Edwards Cleaning Service",
    type: ProjectTypes.Development,
    summary: "A complete company brand, plus a simple-to-use website with an integrated content management system, allowing for adaptive online growth at the same pace as business growth.",
    tileImage: {
      src: "/images/projects/edwards-cleaning-service/tile-image.png",
      altText: "Edwards cleaning service logo",
      width: 1000,
      height: 428,
    },
    image: {
      src: "/images/projects/edwards-cleaning-service/template-4.jpg",
      altText: "",
      width: 2000,
      height: 1125,
    },
    tags: ["C# ASP.NET MVC", "Umbraco", "jQuery/AngularJs", "Bootstrap/SCSS"],
    components: [
      {
        content: [
          '<p><span class="h1">Edwards Cleaning Service is an independently owned company offering a multitude of both domestic and commercial cleaning services.</span></p>',
          "<p>The company was just starting and had no digital or design presence, a clean slate. But they needed a professional to help them create the building blocks for their company identity along with a simple, affordable, and robust website that can give them the flexibility to grow online at the same pace that their business grows.</p>",
          "<p>With this information in mind, I started to examine and research existing companies in the same sector trying to get an initial feel for branding values and direction. We wanted it to be simple, clean, and trustworthy but still reflect the core identity of the company and the owner himself. The outcome was a minimalist colour pallet, plain midtones and white space, complimented by a bold primary and secondary colour to be used sparingly to have better control over CTAs or promotions. The logo was designed to be uncomplicated, free from distractions such as icons or design features, leaving the emphasis on the name of the business only. The thought process behind this was to improve readability for signage such as vehicle vinyl or adverts.</p>",
        ],
        images: [
          {
            src: "/images/projects/edwards-cleaning-service/template-2.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">But what about the website?</span></h2>',
          "<p>The online requirements were pretty straightforward, a website that was clean, spacious and that provided quick, concise information about services and pricing. Usually, such an online service would require some kind of integrated booking system but this was not the case. The company was in its infancy and did not require such features, but they still wanted a platform that could easily introduce additional functionality when required. We decided to build the site using the Umbraco CMS, allowing the company to quickly and intuitively manage the website's content without the worry of continuous development support. Plus laying the necessary foundations for development growth should the need ever arise.</p>",
        ],
        images: [
          {
            src: "/images/projects/edwards-cleaning-service/template-5.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/edwards-cleaning-service/template-6.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          "<p>A complete company brand, plus a simple-to-use website with an integrated content management system, allowing for adaptive online growth at the same pace as business growth.</p>",
        ],
      },
    ],
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
      src: "/images/projects/secure-cloudlink/tile-image.png",
      altText: "Secure cloudlink logo",
      width: 1000,
      height: 428,
    },
    image: {
      src: "/images/projects/secure-cloudlink/template-1.jpg",
      altText: "",
      width: 2000,
      height: 1125,
    },
    tags: ["C# ASP.NET MVC", "HTML5", "CSS", "Adobe CC"],
    components: [
      {
        content: [
          '<p><span class="h1">Secure Cloudlink solves online security by taking a new and inherently different approach to stop the wrong people from gaining access to your digital systems.</span></p>',
          "<p>I worked as the UI/UX designer and front-end developer, helping to design, wireframe and build interfaces for several new and exciting projects. The company was starting to build out its service offerings and it was my responsibility to cover every aspect of the front-end user experience, from storyboard to code, ensuring that any new project/interface adhered to branding guidelines, and the company maintained a consistent and fluid user experience.</p>",
        ],
        images: [
          {
            src: "/images/projects/secure-cloudlink/template-2.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/secure-cloudlink/template-3.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">A powerful core</span></h2>',
          "<p>At the core of Secure Cloudlink is a suite of multiple management tools covering everything from digital application marketplaces and mobile/desktop authentication applications to administration control panels and enrolment portals. The majority of applications created were utilitarian-style dashboards or management portals, the main focus was to ensure that the workflow was intuitive, informative and clean. Each tool would in some way, shape or form interact with another so it was paramount that the user's experience would flow seamlessly from application to application. Each application was built with the additional ability to offer a simple white label experience allowing organisations to customize their user's experience.</p>",
        ],
        images: [
          {
            src: "/images/projects/secure-cloudlink/template-4.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/secure-cloudlink/template-6.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/secure-cloudlink/template-7.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          "<p>A comprehensive suite of management tools allowing organisations to manage users, applications and security policies across multiple organisations and domains all with a customisable and seamless user experience.</p>",
        ],
      },
    ],
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
      src: "/images/projects/jungle-island-adventure-golf/tile-image.png",
      altText: "Jungle island adventure golf logo",
      width: 1000,
      height: 428,
    },
    image: {
      src: "/images/projects/jungle-island-adventure-golf/template-7-1.jpg",
      altText: "",
      width: 2000,
      height: 1125,
    },
    tags: ["Adobe CC", "Graphic Design"],
    components: [
      {
        content: [
          '<p><span class="h1">The Maple Leaf Golf Group, were looking to expand their customer offerings to include a new mini golf attraction.</span></p>',
          "<p>Introducing Jungle Island Adventure Golf! The company already had a name and structural theme in mind for the new attraction but needed a little help to give it an identity all of its own. The course would be in a prehistoric setting, something wild and 'dangerous'. There would be sculptures and interactive features dotted around the 18-hole mini course which would offer some assistance to the design process.</p>",
        ],
        images: [
          {
            src: "/images/projects/jungle-island-adventure-golf/template-6-1.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The Challenge</span></h2>',
          "<p>The challenge was to create the overall branding identity for the attraction. The organisation was looking for a component-based set of logos, graphics and illustrations that could be used independently or in conjunction with one another. They wanted the flexibility to create additional promotional material as and when they needed it.</p>",
          "<p>As a starting point, I researched existing attractions to ensure there were no design conflicts, this also helped me to get a feel for customer expectations as I wanted their experience to be familiar, comfortable but new and exciting at the same time. I wanted the outcome to capture the kind the excitement you might experience when going to a theme or amusement park. I planned to create a strong primary logo, something that told a story by itself. I wanted this design to formulate the base for the whole project, it should dictate the style of every part of the component library. Then every subsequent asset would simply be a creative extension, a continuation of the tale.</p>",
          "<p>I decided to go with a style that was heavily based on vector illustrations. Every feature is unique and designed from scratch. I focused a lot on attention to detail and wanted to ensure that the graphics looked strong, vibrant and stood out from conventional 2D graphics.</p>",
        ],
        images: [
          {
            src: "/images/projects/jungle-island-adventure-golf/template-2.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/jungle-island-adventure-golf/template-8.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          "<p>A multitude of design components and characters, complemented by a catalogue of marketing material ranging from signage and scorecards to party invites and corporate letterheads.</p>",
        ],
        link: {
          name: "View the site",
          url: "https://hortongolfpark.com/adventure-golf",
          target: "_black",
        },
      },
    ],
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
      src: "/images/projects/skifocus/tile-image.png",
      altText: "Ski focus logo",
      width: 1000,
      height: 428,
    },
    image: {
      src: "/images/projects/skifocus/template-3.jpg",
      altText: "",
      width: 2000,
      height: 1125,
    },
    tags: ["HTML5", "CSS", "Adobe CC", "Graphic Design"],
    components: [
      {
        content: [
          '<p><span class="h1">Ski Focus is an independently owned company offering tailored ski teaching and instructor training.</span></p>',
          "<p>The company had a pre-existing base brand identity and a functioning website but was looking to refresh. They wanted to retain the majority of their core branding but refine the customers' web experience and bring it closer to the standards of the time. Ski Focus offers a catalogue of services, across two countries and locations so a key focus was on content breakdown and ensuring that the users can quickly and easily get access to the information and/or pricing they need.</p>",
        ],
        images: [
          {
            src: "/images/projects/skifocus/template-2.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/skifocus/template-5.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">What about apparel?</span></h2>',
          "<p>The company wanted to start expanding its marketing strategy and introduce a small line of Ski Focus Apparel. The requirement was to maintain the Ski Focus identity at the core but offer some more creative design variations. There was a lot of design flexibility and it was a great opportunity to explore how the brand could be used over multiple styles.</p>",
        ],
        images: [
          {
            src: "/images/projects/skifocus/template-7.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
          {
            src: "/images/projects/skifocus/template-6.jpg",
            altText: "",
            width: 2000,
            height: 1125,
          },
        ],
      },
      {
        content: [
          '<h2><span class="h1">The result</span></h2>',
          "<p>A complete site refresh and online theme built with the purpose of reusability across both internal and external facing applications, alongside a new and refreshed line of apparel-based design components.</p>",
        ],
        link: {
          name: "View the site",
          url: "https://skifocus.co.uk",
          target: "_black",
        },
      },
    ],
  },
];

export default projects;
