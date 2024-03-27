# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- Portfolio
Welcome to my portfolio repository! This repository contains the source code for my portfolio website, showcasing my projects, skills, and experiences as a Frontend Developer based in Abuja, Nigeria. The website is built using modern frontend technologies such as React, TypeScript, and Tailwind CSS, reflecting my commitment to creating visually appealing and user-friendly web interfaces.

Features
Projects: Explore my latest projects, including GeekOps.
Skills: Discover my skills in HTML/CSS, JavaScript, TypeScript, React, Tailwind CSS, Git, and GitHub.
About Me: Learn more about my background, interests, and professional experiences.
Contact: Reach out to me via email or connect with me on LinkedIn.
Technologies Used
Frontend: React, TypeScript, Tailwind CSS
Version Control: Git, GitHub
Getting Started
To run this project locally, follow these steps:

Clone this repository.
Install dependencies using npm install.
Start the development server using npm start.
Feel free to explore the code and use it as a reference for your own projects. If you have any questions or feedback, please don't hesitate to reach out!
