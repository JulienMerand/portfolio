# Julien Mérand — Personal Portfolio & Academic Website

[![Astro](https://img.shields.io/badge/Astro-v5.12-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

Personal portfolio and academic research website for **Julien Mérand**, PhD Researcher in Robotics & AI at **CEA-List** and **Université Paris-Saclay**.

🔗 **Live Website**: [https://julienmerand.github.io/portfolio/](https://julienmerand.github.io/portfolio/)

---

## 🔬 Research Interests

- **Dexterous Multi-Fingered Manipulation**: Anthropomorphic robotic hands, grasping policies, and in-hand manipulation.
- **Deep Generative Models**: Diffusion models, Conditional Variational Autoencoders (CVAEs), and transformer-based grasp synthesis.
- **3D Computer Vision & Point Clouds**: Joint configuration estimation and canonical workspace learning.
- **Embodied AI & Sim-to-Real**: Policy learning, ROS2 integration, and real-time robotic control.

---

## 🚀 Key Features

- **Dynamic 2-Column Hero**: Interactive research overview card with live citation counter and core methodology tags.
- **Automated Citation Resolver**: Build-time citation retrieval supporting Semantic Scholar API and OpenAlex API with zero-config fallback.
- **Bento-Grid About Section**: Highlights research mission, lifestyle/athletic disciplines, and categorized skill badges.
- **Premier Publications Showcase**: Peer-reviewed conference badges (ECCV, IROS, CASE), author highlighting, abstract previews, and project page / arXiv links.
- **Vertical Career & Academic Timelines**: Connected timeline cards for professional experience and dual-degree education.
- **Responsive 2-Column Projects Grid**: Interactive showcase of open-source robotics and hardware projects.
- **Floating Glassmorphic Navbar & Mobile Drawer**: Sleek frosted navigation with downloadable CV (English Resume & French CV) and mobile menu drawer.
- **Single-Source Configuration**: All content, papers, projects, and styling accent colors are centrally managed in `src/config.ts`.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Language**: TypeScript
- **APIs**: Semantic Scholar Graph API & OpenAlex API (Citations)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg               # Site favicon
│   ├── Julien_MERAND_CV.pdf      # French CV
│   ├── Julien_MERAND_Resume.pdf  # English Resume
│   └── logo_*.jpg/png            # Institution & company logos
├── src/
│   ├── components/               # Section components
│   │   ├── About.astro           # Bio, lifestyle & categorized skills
│   │   ├── Education.astro       # Academic degrees timeline
│   │   ├── Experience.astro      # Professional & research experience timeline
│   │   ├── Footer.astro          # Connect CTA, navigation & back-to-top
│   │   ├── Header.astro          # Glassmorphic pill navbar & mobile drawer
│   │   ├── Hero.astro            # Hero section & live research stats card
│   │   ├── Papers.astro          # Research publications & preprints
│   │   └── Projects.astro        # Robotics & hardware projects grid
│   ├── pages/
│   │   └── index.astro           # Main single-page layout
│   ├── styles/
│   │   └── global.css            # Global CSS, glassmorphism & animations
│   ├── utils/
│   │   └── citations.ts          # Semantic Scholar & OpenAlex citation resolver
│   └── config.ts                 # Central site configuration
├── astro.config.mjs              # Astro & Tailwind Vite configuration
├── package.json
└── tsconfig.json
```

---

## ⚙️ Customization (`src/config.ts`)

All content is managed through `src/config.ts`:

- **Personal Info**: `name`, `title`, `description`, `accentColor`
- **Social Links**: `email`, `linkedin`, `github`
- **Publications (`papers`)**: Title, authors, conference, `conferenceSurname`, `arxivId`, `doi`, `link`, `abstract`, `tags`, and fallback `citations`.
- **Experience**: Institution, title, date range, logo image, and achievements.
- **Education**: School, degree, date range, logo image, and achievements.
- **Projects**: Project name, description, link, and tech stack tags.

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JulienMerand/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321/portfolio` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Email**: [julien.merand@cea.fr](mailto:julien.merand@cea.fr)
- **LinkedIn**: [linkedin.com/in/julien-merand](https://www.linkedin.com/in/julien-merand/)
- **GitHub**: [github.com/JulienMerand](https://github.com/JulienMerand)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
