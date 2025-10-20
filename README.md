# Bahadin Ali - Portfolio

A clean, modern portfolio website built with VuePress showcasing my frontend development projects and skills.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Project Showcase**: Organized project structure with detailed information
- **Skills Display**: Comprehensive technology stack presentation
- **Contact Integration**: Multiple ways to get in touch
- **Mobile Responsive**: Optimized for all devices
- **Fast Loading**: Optimized build with Vite bundler

## 📁 Project Structure

```
docs/
├── .vuepress/
│   └── config.js          # VuePress configuration
├── sections/
│   ├── about.md           # About section
│   ├── contact.md         # Contact section
│   ├── projects.md        # Projects overview
│   ├── skills.md          # Skills section
│   └── projects/          # Individual project folders
│       ├── unifood/
│       │   └── README.md  # UniFood project details
│       └── sayay-farmuda/
│           └── README.md  # Sayay Farmuda project details
└── README.md              # Homepage
```

## 🛠️ Technologies Used

- **VuePress 2.0**: Static site generator
- **Vite**: Fast build tool
- **Markdown**: Content management
- **CSS3**: Custom styling and animations
- **JavaScript**: Interactive features

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/EngBahadin/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development server:

```bash
pnpm docs:dev
```

4. Build for production:

```bash
pnpm docs:build
```

## 🎯 Adding New Projects

To add a new project:

1. Create a new folder in `docs/sections/projects/` with your project name
2. Add a `README.md` file with the project details
3. Include frontmatter with project metadata:

```yaml
---
title: Project Name
image: /images/project-image.png
description: Project description
technologies:
  - React
  - Next.js
  - TypeScript
link: https://github.com/username/project
linkText: View on GitHub →
status: active
featured: true
order: 3
---
```

4. Update the projects overview in `docs/sections/projects.md` to include your new project

## 🎨 Customization

- **Colors**: Modify the color scheme in the CSS sections
- **Layout**: Adjust grid layouts and spacing
- **Content**: Update personal information in section files
- **Images**: Replace images in the `public/images/` directory

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The site can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: se.bahauddin@gmail.com
- **GitHub**: [@EngBahadin](https://github.com/EngBahadin)
- **LinkedIn**: [Bahadin Ali](https://www.linkedin.com/in/bahadin-ali/)
- **Phone**: +964 750 334 2925
