import { getCollection } from "astro:content";
import { exec } from "child_process";
import { promisify } from "util";

export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      dev: {
        build: (
          await promisify(exec)("git rev-parse --short HEAD")
        ).stdout.trim(),
        buildTime: new Date().toISOString(),
      },
      shows: (await getCollection("shows")).map((show) => show.data),
      members: (await getCollection("members")).map((member) => member.data),
    }),
  );
}
