# README.md – Skip Selector UI

A modern, mobile-responsive React application for selecting skip bin sizes. Built with **Vite**, **Tailwind CSS**, and **Framer Motion**, and features fully custom-built components for the UI layout.

---

## 🔧 Tech Stack

- React 18+
- Vite (frontend tooling)
- Tailwind CSS (utility-first CSS framework)
- Framer Motion (animations)
- Custom Card Components (no UI libraries)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skip-selector-ui.git
cd skip-selector-ui
```

### 2. Create a Vite React Project

```bash
npm create vite@latest .
# Choose "React" when prompted
```

Or, start from scratch:

```bash
npm init vite@latest skip-selector-ui -- --template react
cd skip-selector-ui
```

### 3. Install Dependencies

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion
```

### 4. Tailwind Configuration

In `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensure `main.jsx` imports the stylesheet:

```jsx
import './index.css';
```

---

## ▶️ Running the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the application.

---

## 🏗️ Building for Production

```bash
npm run build
```

---