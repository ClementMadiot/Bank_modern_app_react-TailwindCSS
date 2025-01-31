<div align="center">
  <a href="https://bank-modern-cm.netlify.app/" target="_blanck"><img src="./src/assets/hookbank-min.png" alt="HookBank"></a>
  <h3 align="center">HookBank</h3>
  <div align="center">
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## <br /> 📋 <a name="table">Summary</a>

- ✨ [Introduction](#introduction)
- 🛠 [Technology Used](#tech-stack)
- 🚀 [Launch App](#launch-app)
- 🎨 [Styling](#style)

## <br /> <a name="introduction">✨ Introduction</a>

**[ENG]** This online bank landing page is designed to present the next-generation payment method, offering a reliable and secure experience. Built with React Vite for fast performance and optimized build times, the site ensures smooth interactions and a modern, responsive layout.

**[FR]** Cette landing page de banque en ligne est conçue pour présenter une méthode de paiement de nouvelle génération, fiable et sécurisée. Développée avec React Vite pour des performances rapides et des temps de construction optimisés, le site garantit une expérience fluide et un design moderne et responsive.

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [TailwindCSS](https://tailwindcss.com/docs/installation): Tailwind CSS is a valuable tool for developers who want to build modern, responsive, and visually appealing websites without sacrificing development speed.


- [react-icon](https://www.npmjs.com/package/react-icons)
Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
  
## <br /> <a name="launch-app">🚀 Launch App</a>

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**installation**

> After cloning the repository, run the command `npm install` to install the project's dependencies.

> Once the dependencies are installed, start the project with the command `npm run dev`.

## <br /> <a name="launch-app">🚀 Styling</a>

Global styling are defined using TailwindCSS in the tailwind.config.js file.

```
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255,255,255,0.7)',
        dimBlue: 'rgba(9,151,124,0.1)',
        transparent: "transparent",
        lightBlue:"rgb(51, 187, 207)"
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
```

