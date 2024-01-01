// from https://github.com/vuejs/blog
import { createContentLoader } from 'vitepress'
import formatDate from './formatDate';

interface Post {
  title: string
  url: string,
  excerpt?: string,
  date: string[],
};

declare const data: Post[];

export { data };

export default createContentLoader('en/posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter(({ frontmatter }) => !frontmatter?.draft)
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date[0].localeCompare(a.date[0], []));
  }
});
