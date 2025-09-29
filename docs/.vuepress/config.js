import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/portfolio/",
  lang: "en-US",
  title: "Bahadin Ali",
  description: "Frontend Developer Portfolio",
  theme: defaultTheme({
    logo: "/spider.png", // optional logo
    navbar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about.html" },
      { text: "Projects", link: "/projects.html" },
      { text: "Contact", link: "/contact.html" },
    ],
    sidebar: false, // disable sidebar
  }),
  bundler: viteBundler(),
});
