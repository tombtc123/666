import { c as createComponent, r as renderComponent, b as renderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_Bk1LWNsd.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_D7HX2KOL.mjs';
import { $ as $$BaseHead, a as $$Footer } from '../chunks/Footer_CX72ZL9U.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from '../chunks/consts_BKVdSRqN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return renderTemplate`<html lang="zh-CN" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> <!-- 页眉区域 --> <header class="page-header" data-astro-cid-j7pv25f6> <div class="header-logo-title" data-astro-cid-j7pv25f6> <img src="/logo.png" alt="Tom Blog Logo" class="header-logo" data-astro-cid-j7pv25f6> <h1 class="header-title" data-astro-cid-j7pv25f6>${SITE_TITLE}</h1> </div> <p class="header-subtitle" data-astro-cid-j7pv25f6>探索科技、思维与生活的边界</p> </header> <!-- 文章列表 --> <main class="post-list-container" data-astro-cid-j7pv25f6> <ul class="post-list" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<li class="post-item" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-j7pv25f6> <div class="post-meta" data-astro-cid-j7pv25f6> ${formatDate(post.data.pubDate)} </div> <h2 class="post-title" data-astro-cid-j7pv25f6>${post.data.title}</h2> <p class="post-description" data-astro-cid-j7pv25f6>${post.data.description}</p> </a> </li>`)} </ul> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/Users/tom/vibecode/my-vibe-blog/src/pages/index.astro", void 0);

const $$file = "/Users/tom/vibecode/my-vibe-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
