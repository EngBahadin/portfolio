import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/portfolio/",
  lang: "en-US",
  title: "Bahadin Ali",
  description: "Frontend Developer Portfolio - React, Next.js, Vue Specialist",

  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Projects", link: "/projects" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: false,
    colorMode: "auto",
    colorModeSwitch: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/EngBahadin" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/bahadin-ali/" },
    ],
  }),

  bundler: viteBundler(),
});
