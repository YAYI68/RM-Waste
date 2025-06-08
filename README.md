# README.md – Skip Selector UI

A modern, mobile-responsive React application for selecting skip bin sizes. Built with **Vite**, **Tailwind CSS**

---

## 🔧 Tech Stack

- React 18+
- Vite (frontend tooling)
- Tailwind CSS (utility-first CSS framework)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:YAYI68/RM-Waste.git
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
```

### 4. Tailwind Configuration

In `vite.config.js`:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
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

Visit [https://rm-waste.vercel.app](https://rm-waste.vercel.app/) to view the live application.
---