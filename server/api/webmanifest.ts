import { getBaseUrl } from "~/utils/helpers";
export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl || "/";
  return {
    name: "Creature Pixel",
    short_name: "CreaturePixel",
    description: "Creature Pixel - A portfolio showcasing web development and design projects.",
    lang: "en",
    start_url: "/",
    display: "standalone",
    background_color: "#1E2028",
    theme_color: "#03D1C5",
    orientation: "portrait",
    icons: [
      {
        src: `${baseUrl}icons/icon-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${baseUrl}icons/icon-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
});
