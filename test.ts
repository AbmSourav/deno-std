import { listenAndServe } from "https://deno.land/std/http/server.ts";

export async function serverTest(options, body) {
  return listenAndServe(options, (req) => {
    req.respond({ body });
  });
}
