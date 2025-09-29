import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/portfolio/",
  lang: "en-US",
  title: "Bahadin Ali",
  description: "Frontend Developer Portfolio",

  theme: defaultTheme({
    logo: "/code.com.png",
    navbar: [
      { text: "Home", link: "/#home" },
      { text: "About", link: "/#about" },
      { text: "Projects", link: "/#projects" },
      { text: "Contact", link: "/#contact" },
    ],
    sidebar: false,
  }),

  bundler: viteBundler(),
});
