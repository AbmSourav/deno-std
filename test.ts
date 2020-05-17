import { listenAndServe } from "https://deno.land/std/http/server.ts";

export function serverTest(options: string | HTTPOptions, body: string) {
  return listenAndServe(options, (req) => {
    req.respond({ body });
  });
}
