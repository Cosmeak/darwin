import { walk } from "jsr:@std/fs/walk";

export const importDirectory = async (folder: string) => {
  const files = {};
  for await (const entry of walk(folder)) {
    if (!entry.isFile) continue;
    const file = await import(`./${entry.path}`.replace("/src", ""));
    files[Object.keys(file)[0]] = Object.values(file)[0];
  }
  return files;
};
