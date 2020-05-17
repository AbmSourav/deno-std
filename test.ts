import { serve } from "https://deno.land/std/http/server.ts";

export function serverTest() {
  const createServer = serve({ port: 8080 });
}
