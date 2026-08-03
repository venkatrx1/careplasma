// Cloudflare Pages "Advanced Mode" entry point — this project is deployed as a
// Pages project (careplasmamailer.pages.dev), which routes every request through
// a root-level _worker.js rather than the `main` field in wrangler.toml. Re-export
// the same handler used for a plain Workers deploy so there's one source of truth.
export { default } from "./index.js";
