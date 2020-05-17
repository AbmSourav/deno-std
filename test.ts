import { serve } from "https://deno.land/std/http/server.ts";

export async function serverTest() {
  const createServer = await serve({ port: 8080 });
}
