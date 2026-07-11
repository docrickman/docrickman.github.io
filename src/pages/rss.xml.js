import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const projects = await getCollection('projects');
	const notes = await getCollection('notes');
	const items = [
		...projects.map((p) => ({ ...p.data, link: `/projects/${p.id}/` })),
		...notes.map((n) => ({ ...n.data, link: `/notes/${n.id}/` })),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
