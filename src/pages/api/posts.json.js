import { getCollection } from "astro:content";
const blogPosts = await getCollection("projects");
/* export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      data: blogPosts,
    })
  );
} */
export const prerender = false;
export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      posts: blogPosts,
    })
  );
}
