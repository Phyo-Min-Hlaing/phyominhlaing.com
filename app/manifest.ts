import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phyo Min Hlaing — Senior Product UI/UX Designer",
    short_name: "PMH",
    description:
      "Product design, UX strategy, interaction design and design systems for mobile and web products.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D11",
    theme_color: "#0D0D11",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
