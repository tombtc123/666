import { e as createAstro, c as createComponent, r as renderComponent, b as renderHead, f as renderSlot, g as renderScript, a as renderTemplate, d as addAttribute } from './astro/server_Bk1LWNsd.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_DwQfilHD.mjs';
import { $ as $$BaseHead, a as $$Footer } from './Footer_CX72ZL9U.mjs';
import { $ as $$Header, a as $$FormattedDate } from './Header_Br44_m_n.mjs';
/* empty css                         */

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, headings = [] } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "data-astro-cid-bvzihdzo": true })}`} </div> <div class="article-container" data-astro-cid-bvzihdzo> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> ${headings.length > 0 && renderTemplate`<nav class="toc" id="toc" data-astro-cid-bvzihdzo> <div class="toc-title" data-astro-cid-bvzihdzo>目录</div> <ul class="toc-list" data-astro-cid-bvzihdzo> ${headings.map((heading) => {
    const slug = heading.slug || heading.text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    return renderTemplate`<li${addAttribute(`toc-item ${heading.depth === 3 ? "toc-item-h3" : ""}`, "class")} data-astro-cid-bvzihdzo> <a${addAttribute(`#${slug}`, "href")} class="toc-link"${addAttribute(slug, "data-slug")} data-astro-cid-bvzihdzo> ${heading.text} </a> </li>`;
  })} </ul> </nav>`} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} ${renderScript($$result, "/Users/tom/vibecode/my-vibe-blog/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/tom/vibecode/my-vibe-blog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
