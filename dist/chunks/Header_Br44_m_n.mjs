import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, s as spreadAttributes, f as renderSlot, r as renderComponent } from './astro/server_Bk1LWNsd.mjs';
import 'piccolore';
import 'clsx';
import { a as SITE_TITLE } from './consts_BKVdSRqN.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/tom/vibecode/my-vibe-blog/src/components/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/tom/vibecode/my-vibe-blog/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <div class="logo-title" data-astro-cid-3ef6ksr2> <a href="/" class="logo-link" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Tom Blog Logo" class="logo" data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2>${SITE_TITLE}</h2> </a> </div> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blog` })} </div> </nav> </header> `;
}, "/Users/tom/vibecode/my-vibe-blog/src/components/Header.astro", void 0);

export { $$Header as $, $$FormattedDate as a };
