import { serve } from "https://deno.land/std/http/server.ts";

export function serverTest() {
  const createServer = serve({ port: 8080 });
  for await (const req of createServer) {
    req.respond({ body: "Hello Universe \n" + req.url });
  }
}
