import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_KEY!,
  version: "v5.0",
});
