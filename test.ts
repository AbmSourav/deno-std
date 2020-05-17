export function createFile(path: string) {
  return Deno.create(path);
}
