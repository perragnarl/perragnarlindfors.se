import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: "prl",
		description: "Things and stuff",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pub,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
		})),
	});
}
