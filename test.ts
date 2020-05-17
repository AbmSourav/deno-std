import { listenAndServe } from "https://deno.land/std/http/server.ts";

export function serverTest(options: object, body: string) {
  return listenAndServe(options, (req) => {
    req.respond({ body });
  });
}
