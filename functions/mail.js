// Cloudflare Pages Function — scoped to /mail only, so it doesn't take over
// static-asset routing the way a root-level _worker.js would (that broke the
// careplasma.pages.dev home page, since both Pages projects build from this
// same repo root). Reuses the same handler as a plain Workers deploy.
import worker from "../index.js";

export async function onRequest(context) {
  return worker.fetch(context.request, context.env);
}
