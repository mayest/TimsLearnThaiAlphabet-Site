"use strict";
// Discourages basic HTML scraping, but is not protection against advanced harvesting.
(() => {
  const localName = ["dr", "mayes"].join(".");
  const tag = "TLTA";
  const domain = ["gmail", "com"].join(".");
  const address = [localName + "+" + tag, domain].join("@");
  document.querySelectorAll("[data-support-email]").forEach((container) => {
    const link = document.createElement("a");
    link.href = "mailto:" + address;
    link.textContent = address;
    container.replaceChildren(link);
  });
})();
